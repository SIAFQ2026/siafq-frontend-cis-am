import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import openapiTS, { astToString } from 'openapi-typescript';

const toolDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryDirectory = resolve(toolDirectory, '..', '..');
const backendDirectory = resolve(
  process.env.SIAFQ_BACKEND_DIR ?? resolve(repositoryDirectory, '..', 'siafq-backend'),
);
const checkOnly = process.argv.includes('--check');
const gitSafeDirectory = backendDirectory.replaceAll('\\', '/');

const contracts = [
  {
    id: 'governance',
    source: 'modules/governance/src/main/resources/openapi/governance-api-openapi.yml',
    output: 'src/shared/api/generated/governance-api.ts',
  },
  {
    id: 'iam',
    source: 'modules/iam/src/main/resources/openapi/iam-api-openapi.yml',
    output: 'src/shared/api/generated/iam-api.ts',
  },
];

const git = (...arguments_) =>
  execFileSync(
    'git',
    ['-c', `safe.directory=${gitSafeDirectory}`, '-C', backendDirectory, ...arguments_],
    { encoding: 'utf8' },
  ).trim();

const sha256 = (contents) => createHash('sha256').update(contents).digest('hex');

const backendCommit = git('rev-parse', 'HEAD');
const dirtyContracts = git('status', '--porcelain', '--', ...contracts.map(({ source }) => source));

if (dirtyContracts) {
  throw new Error(
    `Los contratos fuente deben estar confirmados en el backend antes de generar:\n${dirtyContracts}`,
  );
}

const generated = [];

for (const contract of contracts) {
  const sourcePath = resolve(backendDirectory, contract.source);
  const sourceContents = await readFile(sourcePath);
  const sourceHash = sha256(sourceContents);
  const nodes = await openapiTS(pathToFileURL(sourcePath), { alphabetize: true });
  const types = astToString(nodes);
  const banner = [
    '/**',
    ' * ARCHIVO GENERADO. NO EDITAR MANUALMENTE.',
    ` * Fuente: siafq-backend/${contract.source}`,
    ` * Commit backend: ${backendCommit}`,
    ` * SHA-256: ${sourceHash}`,
    ' * Generador: openapi-typescript 7.13.0 (TypeScript 5.9.3)',
    ' */',
    '',
  ].join('\n');

  generated.push({
    path: resolve(repositoryDirectory, contract.output),
    contents: `${banner}${types}`,
    metadata: {
      id: contract.id,
      source: `siafq-backend/${contract.source}`,
      sha256: sourceHash,
    },
  });
}

const manifest = {
  backendCommit,
  generators: {
    openapiTypescript: '7.13.0',
    typescript: '5.9.3',
  },
  contracts: generated.map(({ metadata }) => metadata),
};

generated.push({
  path: resolve(repositoryDirectory, 'src/shared/api/generated/contracts.manifest.json'),
  contents: `${JSON.stringify(manifest, null, 2)}\n`,
});

const changed = [];

for (const artifact of generated) {
  let current;

  try {
    current = await readFile(artifact.path, 'utf8');
  } catch (error) {
    if (error?.code !== 'ENOENT') {
      throw error;
    }
  }

  if (current === artifact.contents) {
    continue;
  }

  changed.push(artifact.path.slice(repositoryDirectory.length + 1));

  if (!checkOnly) {
    await mkdir(dirname(artifact.path), { recursive: true });
    await writeFile(artifact.path, artifact.contents, 'utf8');
  }
}

if (checkOnly && changed.length > 0) {
  throw new Error(
    `Los artefactos OpenAPI no corresponden a sus fuentes:\n${changed.map((path) => `- ${path}`).join('\n')}\nEjecuta pnpm contracts:generate.`,
  );
}

if (changed.length === 0) {
  console.log('Los artefactos OpenAPI están actualizados.');
} else {
  console.log(`Artefactos OpenAPI generados:\n${changed.map((path) => `- ${path}`).join('\n')}`);
}
