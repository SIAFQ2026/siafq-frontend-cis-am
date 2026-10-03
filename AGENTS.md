# AGENTS.md

## Alcance

Este repositorio contiene exclusivamente el frontend institucional de CIS-AM. No contiene BackOffice,
backend, contratos OpenAPI fuente, configuración del realm de Keycloak ni secretos.

## Fuentes autoritativas

Antes de implementar una funcionalidad, consultar:

1. `D:\SIAFQ\documentation\AGENTS.md`.
2. `D:\SIAFQ\documentation\1 Creación y configuración del instituto\Etapa 1 Estructura del Instituto\CIS-AM.md`.
3. El contrato OpenAPI original del módulo backend afectado.
4. Las ADR aceptadas aplicables.

Una nota vacía, propuesta, diseño o avance reportado no equivale a una especificación completa.

## Flujo supervisado

- Implementar únicamente la entrega autorizada por David Averos.
- Verificar y documentar esa entrega antes de detenerse.
- Una autorización no incluye la siguiente entrega.
- No crear repositorios remotos, publicar o desplegar sin autorización explícita.

## Convenciones técnicas actuales

- React 19, Vite 8, TypeScript 6 y pnpm 12.
- React Router en Data Mode.
- TypeScript estricto; evitar `any` y aserciones que oculten errores.
- Organización por funcionalidades cuando aparezcan funcionalidades reales.
- Usar HTML semántico, teclado y foco visible desde el primer componente.
- Mantener pruebas junto al comportamiento que verifican.

## Contratos y HTTP

- Generar tipos únicamente desde las fuentes originales mediante `pnpm contracts:generate`.
- No editar `src/shared/api/generated/*.ts` ni `contracts.manifest.json` manualmente.
- Ejecutar `pnpm contracts:check` cuando esté disponible el checkout backend correspondiente.
- No añadir endpoints, estados, permisos ni formas de error ausentes en los contratos.
- No interpretar mensajes de error como códigos de negocio.
- No generar automáticamente claves de idempotencia.
- Usar rutas relativas en la frontera HTTP para no filtrar tokens a orígenes arbitrarios.

## Autenticación

- Usar exclusivamente `keycloak-js` con Authorization Code y PKCE S256.
- Mantener tokens en memoria; nunca usar almacenamiento web, cookies propias o logs para tokens.
- No implementar contraseñas, refresh tokens, emisión de JWT ni formularios de credenciales propios.
- Inicializar Keycloak antes del router y validar la sesión mediante `/iam/me`.
- Renovar antes de llamadas autenticadas y cerrar la sesión local/remota si la renovación falla o el
  backend responde `401`.
- Mantener Redirect URIs, Web Origins y CORS exactos por entorno. Las variables `VITE_*` son públicas y no
  pueden contener secretos.
- No interpretar la respuesta de `/iam/me` como institución, membresía, rol o permisos.

## Seguridad

- Nunca versionar secretos, tokens, credenciales o datos institucionales reales.
- No confiar en rutas, estado cliente o controles visibles como autorización.
- El backend valida sesión, membresía, permisos y aislamiento institucional en cada operación.
- No llamar al Admin API de Keycloak desde el navegador.

## Comandos verificables

```powershell
pnpm contracts:check
pnpm check
pnpm check:with-contracts
```

`pnpm check` ejecuta formato, lint, tipos, pruebas y build. `check:with-contracts` requiere acceso al
repositorio backend fuente.

## Documentación

- Mantener `README.md`, este archivo y `TODO.md` alineados con lo realmente implementado.
- Registrar decisiones relevantes en el vault mediante ADR, sin cambiar una propuesta a aceptada sin el
  decisor correspondiente.
- No copiar contratos ni reglas funcionales extensas al frontend; enlazar sus fuentes.
