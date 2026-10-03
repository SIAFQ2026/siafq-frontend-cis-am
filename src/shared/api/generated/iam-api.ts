/**
 * ARCHIVO GENERADO. NO EDITAR MANUALMENTE.
 * Fuente: siafq-backend/modules/iam/src/main/resources/openapi/iam-api-openapi.yml
 * Commit backend: eeee41dfa3e03dd119802499f3a40de983046325
 * SHA-256: 5812cd873e68acf2448da7f66c8b92bde015cfb992ca28ed0975c2087ebc42e4
 * Generador: openapi-typescript 7.13.0 (TypeScript 5.9.3)
 */
export interface paths {
    "/administrators": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Crea el primer AC-SUPER-ADMIN de una institución
         * @description Endpoint de arranque. Solo BC-SUPER-ADMIN puede invocarlo y solo procede cuando el mapeo de identidad de la institución está en READY y su ciclo de vida admite operaciones de escritura. Keycloak entrega la credencial mediante su correo de acciones requeridas; SIAFQ no genera, no transporta y no ve la contraseña. Se rechaza si la institución está suspendida o retirada, o si ya tiene un AC-SUPER-ADMIN activo.
         */
        post: operations["createInstitutionAdministrator"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/institutions/{institutionId}/administrators/{identityId}/invitation/resend": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Reenvía la invitación de un AC-SUPER-ADMIN institucional
         * @description Solo BC-SUPER-ADMIN puede reenviar la invitación de un administrador activo de una institución con identidad READY y ciclo de vida ACTIVE. No crea una identidad ni una membresía nuevas.
         */
        post: operations["resendInstitutionAdministratorInvitation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/institutions/{institutionId}/provisioning/retry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Relanza el aprovisionamiento agotado de una institución
         * @description Solo BC-SUPER-ADMIN puede relanzar un mapeo en EXHAUSTED. La operación reinicia los intentos, registra la acción de auditoría e intenta crear o reconciliar la Organization de Keycloak inmediatamente. Un fallo técnico devuelve el estado FAILED programado para el job.
         */
        post: operations["retryInstitutionProvisioning"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Obtiene la identidad autenticada actual
         * @description Sonda técnica de integración. Devuelve únicamente los claims de identidad necesarios para comprobar la autenticación de Keycloak frente a la API.
         */
        get: operations["getCurrentActor"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        ApiError: {
            /** @description Problemas de validación de protocolo, cuando aplican. */
            details?: components["schemas"]["ApiErrorDetail"][] | null;
            /** @example Unauthorized */
            error: string;
            /** @example Authentication is required to access this resource. */
            message: string;
            /**
             * @description Ruta HTTP que produjo el error.
             * @example /iam/institutions/5a3b4a9a-616b-4d7d-a152-5c8bd55e8bbc/provisioning/retry
             */
            path: string;
            /** @example 401 */
            status: number;
            /**
             * Format: date-time
             * @description Momento UTC en que se generó el error.
             */
            timestamp: string;
        };
        ApiErrorDetail: {
            /** @example institutionId */
            field: string;
            /** @example must be a valid UUID */
            issue: string;
        };
        CreateInstitutionAdministratorRequest: {
            /**
             * Format: email
             * @description Buzón al que Keycloak envía el correo de acciones requeridas.
             * @example rectorado@instituto-x.edu.ec
             */
            email: string;
            firstName?: string | null;
            /**
             * Format: uuid
             * @description Institución de Governance a la que se asigna el administrador.
             */
            institutionId: string;
            lastName?: string | null;
            /**
             * @description Nombre de usuario en el realm compartido.
             * @example rectorado.instituto-x
             */
            username: string;
        };
        CurrentActorResponse: {
            /**
             * Format: uri
             * @description Issuer confiable que emitió el token.
             * @example http://localhost:8081/realms/siafq
             */
            issuer: string;
            /**
             * @description Identificador inmutable de la identidad dentro del issuer.
             * @example 5a3b4a9a-616b-4d7d-a152-5c8bd55e8bbc
             */
            subject: string;
            /**
             * @description Claim preferred_username si está presente en el token.
             * @example local-test
             */
            username?: string | null;
        };
        InstitutionAdministratorResponse: {
            /** Format: date-time */
            createdAt: string;
            email?: string | null;
            /**
             * Format: uuid
             * @description Identificador de la identidad en las tablas de IAM.
             */
            identityId: string;
            /** Format: uuid */
            institutionId: string;
            /**
             * Format: uuid
             * @description Identificador de la membresía institucional que concede el rol.
             */
            membershipId: string;
            role: components["schemas"]["InstitutionRole"];
            /** @description Claim sub de la identidad recién creada en Keycloak. */
            subject: string;
            username: string;
        };
        InstitutionProvisioningResponse: {
            attempts: number;
            /** Format: uuid */
            institutionId: string;
            /** @description Mensaje seguro del último fallo de aprovisionamiento. */
            lastError?: string | null;
            /** Format: date-time */
            nextAttemptAt?: string | null;
            provisioningStatus: components["schemas"]["ProvisioningStatus"];
        };
        /**
         * @description Roles institucionales que IAM resuelve en cada petición; no viajan en el token.
         * @enum {string}
         */
        InstitutionRole: "AC-SUPER-ADMIN";
        /** @enum {string} */
        ProvisioningStatus: "PENDING" | "READY" | "FAILED" | "EXHAUSTED";
    };
    responses: {
        /** @description La identidad ya existe, pero Keycloak no pudo entregar la invitación por correo. */
        BadGateway: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ApiError"];
            };
        };
        /** @description La petición incumple el contrato por un parámetro o un cuerpo inválido. */
        BadRequest: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ApiError"];
            };
        };
        /** @description El estado actual impide la operación: la identidad de la institución todavía no está aprovisionada, la institución no admite escrituras, ya tiene un AC-SUPER-ADMIN activo, o el mapeo no está en EXHAUSTED y no puede relanzarse manualmente. */
        Conflict: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ApiError"];
            };
        };
        /** @description La identidad autenticada no tiene el rol requerido. */
        Forbidden: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ApiError"];
            };
        };
        /** @description No se pudo procesar la operación por un fallo técnico. */
        InternalServerError: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ApiError"];
            };
        };
        /** @description La institución no existe en Governance, o no tiene mapeo de identidad. */
        NotFound: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ApiError"];
            };
        };
        /** @description Falta un token Bearer válido o no puede validarse. */
        Unauthorized: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ApiError"];
            };
        };
    };
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    createInstitutionAdministrator: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateInstitutionAdministratorRequest"];
            };
        };
        responses: {
            /** @description Primer AC-SUPER-ADMIN creado y añadido a la Organization. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InstitutionAdministratorResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
            500: components["responses"]["InternalServerError"];
            502: components["responses"]["BadGateway"];
        };
    };
    resendInstitutionAdministratorInvitation: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                identityId: string;
                institutionId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Invitación reenviada. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
            500: components["responses"]["InternalServerError"];
            502: components["responses"]["BadGateway"];
        };
    };
    retryInstitutionProvisioning: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Identificador de la institución cuyo aprovisionamiento se relanza. */
                institutionId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Relanzamiento procesado; el estado refleja el resultado inmediato. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InstitutionProvisioningResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
            500: components["responses"]["InternalServerError"];
        };
    };
    getCurrentActor: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Identidad autenticada actual */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CurrentActorResponse"];
                };
            };
            401: components["responses"]["Unauthorized"];
        };
    };
}
