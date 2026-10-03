# CIS-AM

Frontend institucional de **CIS-AM (Comprehensive Information System Academic Administration)** para
SIAFQ+.

La entrega actual incluye la base ejecutable, la frontera OpenAPI/HTTP y la autenticación E3. Todavía no
implementa selección de contexto institucional, permisos ni funcionalidades de negocio.

Repositorio remoto: `https://github.com/SIAFQ2026/siafq-frontend-cis-am`.

## Requisitos

- Node.js `24.12.0`.
- pnpm `12.8.1`.
- Stack local SIAFQ con Keycloak en `http://localhost:8081` y API en
  `http://localhost:8080/api/v1`.
- Para generar o verificar contratos: checkout de `siafq-backend` como hermano de este repositorio, o la
  variable `SIAFQ_BACKEND_DIR` apuntando a su raíz.

## Instalación y ejecución

```powershell
nvm use 24.12.0
pnpm install --frozen-lockfile
pnpm dev
```

Vite usa de forma estricta `http://localhost:3001`. Si el puerto está ocupado, el servidor falla en vez de
cambiar a otro origen. Esta es la configuración prevista para separar CIS-AM del BackOffice, pero el realm
y CORS locales actualmente activos todavía no admiten ese origen.

BackOffice permanece en `http://localhost:3000` y usa el cliente distinto `siafq-backoffice`. Compartir
la API y el realm `siafq` es intencional; compartir Client ID o puerto de desarrollo no lo es. La
configuración objetivo de `siafq-web` necesita admitir los retornos exactos de CIS-AM en
`http://localhost:3001/` y `http://localhost:3001/app`, además del Web Origin y CORS correspondientes.

Esa configuración pertenece a Backend/IAM y no se modifica desde este repositorio. Hasta que el equipo
responsable la aplique al entorno local, la comprobación interactiva de E3 permanece bloqueada; las
pruebas automatizadas verifican únicamente el comportamiento del frontend.

## Configuración pública

`.env.development` contiene únicamente valores públicos del entorno local. `.env.example` documenta las
variables requeridas para otros entornos:

```dotenv
VITE_API_BASE_URL=http://localhost:8080/api/v1
VITE_KEYCLOAK_URL=http://localhost:8081
VITE_KEYCLOAK_REALM=siafq
VITE_KEYCLOAK_CLIENT_ID=siafq-web
```

Las variables `VITE_*` terminan en el bundle del navegador: nunca deben contener secretos, contraseñas,
client secrets ni credenciales. Cada despliegue debe definir Redirect URIs y Web Origins precisos tanto en
Keycloak como en CORS; no usar comodines amplios en entornos compartidos.

## Autenticación

El cliente público `siafq-web` usa `keycloak-js 26.2.4` con Authorization Code y PKCE S256:

1. Keycloak inicializa `check-sso` antes de crear el router.
2. La ruta pública `/login` envía al formulario alojado por Keycloak.
3. Después del retorno, CIS-AM renueva el token si vence en menos de 30 segundos.
4. CIS-AM llama realmente a `GET /iam/me` con bearer token.
5. Solo una respuesta exitosa de IAM habilita `/app`.
6. Un `401`, una renovación fallida o un token ausente elimina el estado local y solicita logout a
   Keycloak.

Los access y refresh tokens permanecen en la memoria administrada por `keycloak-js`. El frontend no los
guarda en `localStorage`, `sessionStorage`, cookies propias ni logs. Tampoco contiene formularios o
credenciales propias.

La ruta autenticada prueba identidad y sesión, no autorización funcional. `/iam/me` devuelve `issuer`,
`subject` y `username` opcional, pero la interfaz de E3 no expone esos datos ni deriva decisiones de sus
valores.

## Verificación

```powershell
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm check
```

En un entorno que también tenga el backend:

```powershell
pnpm contracts:check
pnpm check:with-contracts
```

Las pruebas de E3 verifican PKCE, sesión anónima, comprobación con IAM, renovación, logout por fallo,
tratamiento de `401`, redirects locales y protección de ruta. No escriben tokens ni PII en la salida.

### Comprobación manual local

1. Iniciar el stack según `siafq-backend/docs/runbooks/keycloak-local.md`.
2. Confirmar que `http://localhost:8080/api/v1/actuator/health` responde y abrir
   `http://localhost:3001`.
3. Ingresar a CIS-AM y autenticarse en Keycloak con un usuario local configurado fuera de Git.
4. Verificar que `/app` muestra “Acceso verificado”.
5. Cerrar sesión y comprobar que `/app` vuelve a `/login`.

Las herramientas del navegador permiten confirmar la llamada a `/api/v1/iam/me`; no copiar ni capturar el
encabezado `Authorization`.

## Contratos OpenAPI

Los tipos se generan directamente desde los contratos originales mediante `pnpm contracts:generate`.
La herramienta exige fuentes confirmadas en Git y registra commit backend, SHA-256 y versiones exactas.
Los archivos `src/shared/api/generated/*.ts` y `contracts.manifest.json` se versionan y nunca se editan a
mano.

`openapi-typescript 7.13.0` requiere TypeScript 5.x; por eso vive en una herramienta interna con
TypeScript 5.9.3. La aplicación conserva TypeScript 6.0.3.

La verificación remota de contratos sigue dependiendo de que el backend publique un artefacto inmutable,
opción propuesta en ADR-003. No se añade un PAT entre repositorios ni se copian los YAML.

## Frontera HTTP

`src/shared/api/http` proporciona fetch JSON tipado, rutas relativas, bearer token inyectable,
trazabilidad, idempotencia explícita, cancelación y normalización de `Problem` de Governance y `ApiError`
de IAM. Un callback central maneja cualquier respuesta HTTP `401` sin interpretar su mensaje.

## Contexto institucional pendiente

IAM no expone aún membresías, institución activa, rol institucional ni capacidades. Governance recibe un
`institutionId`, pero no determina cuál corresponde al actor. E4 continúa bloqueada hasta disponer de una
fuente backend autoritativa; no se inferirá contexto desde claims no documentados, URL o almacenamiento
local.

## Estructura actual

```text
src/
  app/                 Composición del router.
  config/              Lectura y validación de configuración pública.
  features/auth/       Sesión Keycloak, validación IAM y protección de ruta.
  routes/              Páginas públicas y autenticada mínima.
  shared/api/generated Tipos OpenAPI y manifiesto generados.
  shared/api/http/     Transporte, encabezados y errores normalizados.
  styles/              Estilos globales mínimos.
  testing/             Configuración compartida de pruebas.
tools/
  openapi-generator/   Generación reproducible desde el backend.
```

## Límites de seguridad

- La protección de rutas del navegador no reemplaza la autorización del backend.
- El backend valida JWT, audiencia, membresía, permisos y aislamiento institucional en cada operación.
- El `institutionId` de una ruta o del estado cliente no concede acceso.
- CIS-AM no llama al Admin API de Keycloak ni recibe client secrets.
- No se interpretan claims no documentados ni mensajes de error como permisos.

## Fuentes

- `D:\SIAFQ\documentation\1 Creación y configuración del instituto\Etapa 1 Estructura del Instituto\CIS-AM.md`
- `D:\SIAFQ\siafq-backend\docker\keycloak\realm\siafq-realm.json`
- `D:\SIAFQ\siafq-backend\docs\runbooks\keycloak-local.md`
- `D:\SIAFQ\siafq-backend\modules\iam\src\main\resources\openapi\iam-api-openapi.yml`
- [Keycloak JavaScript adapter](https://www.keycloak.org/securing-apps/javascript-adapter)
- [keycloak-js 26.2.4](https://github.com/keycloak/keycloak-js/releases/tag/26.2.4)
