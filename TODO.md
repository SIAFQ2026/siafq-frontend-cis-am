# TODO — CIS-AM frontend

Este archivo registra entregas supervisadas. Una casilla pendiente no autoriza su implementación.

## E1 — Repositorio y base ejecutable

- [x] Inicializar el repositorio Git local con rama `main`.
- [x] Crear la base React, Vite y TypeScript.
- [x] Configurar React Router y una ruta de error mínima.
- [x] Configurar formato, lint, tipos, pruebas y build.
- [x] Añadir verificación de calidad para GitHub Actions.
- [x] Documentar alcance, comandos, seguridad e instrucciones para agentes.
- [x] Ejecutar `pnpm check` con las versiones declaradas.
- [x] Conectar el remoto creado por el usuario (`SIAFQ2026/siafq-frontend-cis-am`).

## E2 — Frontera de contratos y HTTP

- [x] Generar tipos de Governance e IAM desde los contratos originales.
- [x] Registrar commit backend, hashes y versiones del generador en un manifiesto determinista.
- [x] Verificar los artefactos sin reescribirlos mediante `pnpm contracts:check`.
- [x] Implementar fetch tipado, encabezados, cancelación y las dos formas de error.
- [x] Documentar la decisión propuesta para verificar contratos en CI.
- [ ] Integrar en CI el artefacto inmutable de contratos cuando el backend lo publique.

## E3 — Autenticación

- [x] Integrar `keycloak-js 26.2.4` como cliente público sin secretos.
- [x] Configurar Authorization Code con PKCE S256 y tokens solo en memoria.
- [x] Configurar Vite y las variables públicas del frontend para `localhost:3001`.
- [x] Renovar el token antes de peticiones y al vencer.
- [x] Cerrar la sesión ante renovación fallida, token ausente o respuesta `401`.
- [x] Proteger `/app` y proporcionar login/logout.
- [x] Validar la sesión autenticada mediante `GET /iam/me`.
- [x] Probar PKCE, renovación, logout, `401`, redirects y protección de ruta.
- [ ] Solicitar a Backend/IAM la separación de clientes/orígenes en el realm y CORS locales.
- [ ] Ejecutar la comprobación interactiva con el stack local y credenciales fuera de Git.

## Entregas no autorizadas

- [ ] E4 — Contexto institucional y permisos; bloqueada por contrato backend.
- [ ] E5 — Estructura visual basada en los frames concretos de Figma.
- [ ] E6 — Perfil institucional, dividido en lectura, edición y confirmación.
