/**
 * ARCHIVO GENERADO. NO EDITAR MANUALMENTE.
 * Fuente: siafq-backend/modules/governance/src/main/resources/openapi/governance-api-openapi.yml
 * Commit backend: eeee41dfa3e03dd119802499f3a40de983046325
 * SHA-256: 53bd33a146cb84364c0f552e5908aab755b8f30ea872b1b92f474bc1d5341aa2
 * Generador: openapi-typescript 7.13.0 (TypeScript 5.9.3)
 */
export interface paths {
    "/governance/backoffice/access": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Validate current actor access to the internal backoffice
         * @description Confirms that the authenticated actor has the minimum functional profile required to enter the SIAFQ internal BackOffice.
         */
        get: operations["validateBackofficeAccess"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/governance/catalogs/academic-broad-fields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List academic-broad-fields */
        get: operations["listAcademicBroadFields"];
        put?: never;
        /** Create a AcademicBroadField record */
        post: operations["createAcademicBroadField"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/governance/catalogs/academic-broad-fields/{academicBroadFieldId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a AcademicBroadField record */
        get: operations["getAcademicBroadFieldById"];
        /** Update a AcademicBroadField record */
        put: operations["updateAcademicBroadField"];
        post?: never;
        /** Delete a AcademicBroadField record */
        delete: operations["deleteAcademicBroadField"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/governance/catalogs/academic-detailed-fields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List academic-detailed-fields */
        get: operations["listAcademicDetailedFields"];
        put?: never;
        /** Create a AcademicDetailedField record */
        post: operations["createAcademicDetailedField"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/governance/catalogs/academic-detailed-fields/{academicDetailedFieldId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a AcademicDetailedField record */
        get: operations["getAcademicDetailedFieldById"];
        /** Update a AcademicDetailedField record */
        put: operations["updateAcademicDetailedField"];
        post?: never;
        /** Delete a AcademicDetailedField record */
        delete: operations["deleteAcademicDetailedField"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/governance/catalogs/academic-specific-fields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List academic-specific-fields */
        get: operations["listAcademicSpecificFields"];
        put?: never;
        /** Create a AcademicSpecificField record */
        post: operations["createAcademicSpecificField"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/governance/catalogs/academic-specific-fields/{academicSpecificFieldId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a AcademicSpecificField record */
        get: operations["getAcademicSpecificFieldById"];
        /** Update a AcademicSpecificField record */
        put: operations["updateAcademicSpecificField"];
        post?: never;
        /** Delete a AcademicSpecificField record */
        delete: operations["deleteAcademicSpecificField"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/governance/catalogs/awarded-titles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List awarded-titles */
        get: operations["listAwardedTitles"];
        put?: never;
        /** Create a AwardedTitle record */
        post: operations["createAwardedTitle"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/governance/catalogs/awarded-titles/{awardedTitleId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a AwardedTitle record */
        get: operations["getAwardedTitleById"];
        /** Update a AwardedTitle record */
        put: operations["updateAwardedTitle"];
        post?: never;
        /** Delete a AwardedTitle record */
        delete: operations["deleteAwardedTitle"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/governance/catalogs/cantons": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List cantons */
        get: operations["listCantons"];
        put?: never;
        /** Create a Canton record */
        post: operations["createCanton"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/governance/catalogs/cantons/{cantonId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a Canton record */
        get: operations["getCantonById"];
        /** Update a Canton record */
        put: operations["updateCanton"];
        post?: never;
        /** Delete a Canton record */
        delete: operations["deleteCanton"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/governance/catalogs/career-types": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List career-types */
        get: operations["listCareerTypes"];
        put?: never;
        /** Create a CareerType record */
        post: operations["createCareerType"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/governance/catalogs/career-types/{careerTypeId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a CareerType record */
        get: operations["getCareerTypeById"];
        /** Update a CareerType record */
        put: operations["updateCareerType"];
        post?: never;
        /** Delete a CareerType record */
        delete: operations["deleteCareerType"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/governance/catalogs/careers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List careers */
        get: operations["listCareers"];
        put?: never;
        /** Create a Career record */
        post: operations["createCareer"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/governance/catalogs/careers/{careerId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a Career record */
        get: operations["getCareerById"];
        /** Update a Career record */
        put: operations["updateCareer"];
        post?: never;
        /** Delete a Career record */
        delete: operations["deleteCareer"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/governance/catalogs/institute-types": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List institute-types */
        get: operations["listInstituteTypes"];
        put?: never;
        /** Create a InstituteType record */
        post: operations["createInstituteType"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/governance/catalogs/institute-types/{instituteTypeId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a InstituteType record */
        get: operations["getInstituteTypeById"];
        /** Update a InstituteType record */
        put: operations["updateInstituteType"];
        post?: never;
        /** Delete a InstituteType record */
        delete: operations["deleteInstituteType"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/governance/catalogs/institute-types/{instituteTypeId}/allowed-career-types": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["listAllowedCareerTypes"];
        put?: never;
        post: operations["allowCareerType"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/governance/catalogs/institute-types/{instituteTypeId}/allowed-career-types/{careerTypeId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["disallowCareerType"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/governance/catalogs/parishes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List parishes */
        get: operations["listParishes"];
        put?: never;
        /** Create a Parish record */
        post: operations["createParish"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/governance/catalogs/parishes/{parishId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a Parish record */
        get: operations["getParishById"];
        /** Update a Parish record */
        put: operations["updateParish"];
        post?: never;
        /** Delete a Parish record */
        delete: operations["deleteParish"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/governance/catalogs/provinces": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List provinces */
        get: operations["listProvinces"];
        put?: never;
        /** Create a Province record */
        post: operations["createProvince"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/governance/catalogs/provinces/{provinceId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a Province record */
        get: operations["getProvinceById"];
        /** Update a Province record */
        put: operations["updateProvince"];
        post?: never;
        /** Delete a Province record */
        delete: operations["deleteProvince"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/governance/institutions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List institutions */
        get: operations["listInstitutions"];
        put?: never;
        /** Create an institution */
        post: operations["createInstitution"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/governance/institutions/{institutionId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get an institution */
        get: operations["getInstitutionById"];
        /** Update an institution */
        put: operations["updateInstitution"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/governance/institutions/{institutionId}/campuses": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["listCampuses"];
        put?: never;
        post: operations["createCampus"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/governance/institutions/{institutionId}/campuses/{campusId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getCampusById"];
        put: operations["updateCampus"];
        post?: never;
        delete: operations["deleteCampus"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/governance/institutions/{institutionId}/institution-careers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["listInstitutionCareers"];
        put?: never;
        post: operations["createInstitutionCareer"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/governance/institutions/{institutionId}/institution-careers/{institutionCareerId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getInstitutionCareerById"];
        put: operations["updateInstitutionCareer"];
        post?: never;
        delete: operations["deleteInstitutionCareer"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/governance/institutions/{institutionId}/profile": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get the institution basic data
         * @description Returns the basic data of the institution, its main campus and the source of each value. Readable by platform staff and by the institution administrator, also while the institution is suspended.
         */
        get: operations["getInstitutionProfile"];
        /**
         * Update the institution basic data
         * @description Updates name, foundation date, rector and main campus location. The CES code and the institute type are not editable here. The first save with a main campus registers it; once registered it cannot be removed. The source of a value changes only when the value changes: CES for platform staff, INSTITUTION for the institution administrator. Once the data is confirmed, values can be corrected but a required field cannot be cleared: such an edit returns 409 INSTITUTION_PROFILE_INCOMPLETE listing the fields in details.
         */
        put: operations["updateInstitutionProfile"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/governance/institutions/{institutionId}/profile/confirmation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Confirm the institution basic data
         * @description Confirms the basic data on behalf of the institution. Only the institution administrator can confirm. Requires name, foundation date, rector name and the main campus with its address; otherwise returns 409 INSTITUTION_PROFILE_INCOMPLETE listing the missing fields in details. Confirming again keeps the first confirmation.
         */
        post: operations["confirmInstitutionProfile"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/governance/institutions/{institutionId}/reactivation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Reactivate a suspended institution
         * @description Reactivates a SUSPENDED institution with a mandatory reason and publishes the lifecycle event IAM consumes. Memberships are preserved.
         */
        post: operations["reactivateInstitution"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/governance/institutions/{institutionId}/suspension": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Suspend an institution
         * @description Suspends an institution and publishes the lifecycle event IAM consumes. Nothing is deleted: memberships are kept and the identity provider organization is disabled. Reversible.
         */
        post: operations["suspendInstitution"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/governance/institutions/{institutionId}/withdrawal": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Withdraw an institution
         * @description Withdraws an institution and publishes the lifecycle event IAM consumes. Nothing is deleted: SIAFQ keeps academic records and regulatory evidence, institutional memberships are deactivated and the identity provider organization is disabled. Not reversible.
         */
        post: operations["withdrawInstitution"];
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
        AcademicBroadFieldRequest: {
            active?: components["schemas"]["ActiveStatus"];
            name: string;
        };
        AcademicBroadFieldResponse: components["schemas"]["AuditFields"] & {
            active: components["schemas"]["ActiveStatus"];
            name: string;
        };
        AcademicDetailedFieldRequest: {
            active?: components["schemas"]["ActiveStatus"];
            name: string;
            specificFieldId: components["schemas"]["Uuid"];
        };
        AcademicDetailedFieldResponse: components["schemas"]["AuditFields"] & {
            active: components["schemas"]["ActiveStatus"];
            name: string;
            specificFieldId: components["schemas"]["Uuid"];
        };
        AcademicSpecificFieldRequest: {
            active?: components["schemas"]["ActiveStatus"];
            broadFieldId: components["schemas"]["Uuid"];
            name: string;
        };
        AcademicSpecificFieldResponse: components["schemas"]["AuditFields"] & {
            active: components["schemas"]["ActiveStatus"];
            broadFieldId: components["schemas"]["Uuid"];
            name: string;
        };
        /** @default true */
        ActiveStatus: boolean;
        AllowedCareerTypeRequest: {
            careerTypeId: components["schemas"]["Uuid"];
        };
        AllowedCareerTypeResponse: {
            careerTypeId: components["schemas"]["Uuid"];
            instituteTypeId: components["schemas"]["Uuid"];
        };
        AuditFields: {
            /** Format: date-time */
            createdAt: string;
            createdBy: string;
            id: components["schemas"]["Uuid"];
            /** Format: date-time */
            updatedAt: string;
            updatedBy: string;
        };
        AwardedTitleRequest: {
            active?: components["schemas"]["ActiveStatus"];
            careerId: components["schemas"]["Uuid"];
            careerTypeId: components["schemas"]["Uuid"];
            name: string;
        };
        AwardedTitleResponse: components["schemas"]["AuditFields"] & {
            active: components["schemas"]["ActiveStatus"];
            careerId: components["schemas"]["Uuid"];
            careerTypeId: components["schemas"]["Uuid"];
            name: string;
        };
        BackofficeAccessResponse: {
            /**
             * @description Always true when this endpoint returns 200.
             * @example true
             */
            allowed: boolean;
            /**
             * @description Functional profile validated for BackOffice entry.
             * @enum {string}
             */
            profile: "BC-SUPER-ADMIN";
        };
        CampusRequest: {
            address?: string | null;
            campusType: components["schemas"]["CampusType"];
            cantonId: components["schemas"]["Uuid"];
            /** Format: date */
            foundationDate?: string | null;
            name: string;
            parishId?: components["schemas"]["Uuid"];
            provinceId: components["schemas"]["Uuid"];
            status: components["schemas"]["CampusStatus"];
        };
        CampusResponse: {
            address?: string | null;
            campusType: components["schemas"]["CampusType"];
            cantonId: components["schemas"]["Uuid"];
            /** Format: date-time */
            createdAt: string;
            createdBy: string;
            /** Format: date */
            foundationDate?: string | null;
            id: components["schemas"]["Uuid"];
            institutionId: components["schemas"]["Uuid"];
            name: string;
            parishId?: components["schemas"]["Uuid"];
            provinceId: components["schemas"]["Uuid"];
            status: components["schemas"]["CampusStatus"];
            /** Format: date-time */
            updatedAt: string;
            updatedBy: string;
        };
        /** @enum {string} */
        CampusStatus: "ACTIVE" | "INACTIVE";
        /**
         * @description Fixed location type. MAIN_CAMPUS is the main campus (sede matriz): one per institution and managed through the institution profile, so the campus operations reject it.
         * @enum {string}
         */
        CampusType: "MAIN_CAMPUS" | "BRANCH" | "EXTENSION" | "SUPPORT_CENTER" | "CAMPUS";
        CantonRequest: {
            active?: components["schemas"]["ActiveStatus"];
            cantonCode: string;
            name: string;
            provinceId: components["schemas"]["Uuid"];
        };
        CantonResponse: components["schemas"]["AuditFields"] & {
            active: components["schemas"]["ActiveStatus"];
            cantonCode: string;
            name: string;
            provinceId: components["schemas"]["Uuid"];
        };
        CareerRequest: {
            active?: components["schemas"]["ActiveStatus"];
            careerTypeId: components["schemas"]["Uuid"];
            code: string;
            detailedFieldId: components["schemas"]["Uuid"];
            name: string;
        };
        CareerResponse: components["schemas"]["AuditFields"] & {
            active: components["schemas"]["ActiveStatus"];
            careerTypeId: components["schemas"]["Uuid"];
            code: string;
            detailedFieldId: components["schemas"]["Uuid"];
            name: string;
        };
        CareerTypeRequest: {
            active?: components["schemas"]["ActiveStatus"];
            careerLevel: number;
            code: string;
            name: string;
        };
        CareerTypeResponse: components["schemas"]["AuditFields"] & {
            active: components["schemas"]["ActiveStatus"];
            careerLevel: number;
            code: string;
            name: string;
        };
        CreateInstitutionRequest: {
            cesCode: string;
            instituteTypeId: components["schemas"]["Uuid"];
            name: string;
            status?: components["schemas"]["InstitutionStatus"];
        };
        InstituteTypeRequest: {
            active?: components["schemas"]["ActiveStatus"];
            code: string;
            maxCareerLevel: number;
            name: string;
        };
        InstituteTypeResponse: components["schemas"]["AuditFields"] & {
            active: components["schemas"]["ActiveStatus"];
            code: string;
            maxCareerLevel: number;
            name: string;
        };
        InstitutionCareerRequest: {
            careerId: components["schemas"]["Uuid"];
            status: components["schemas"]["InstitutionCareerStatus"];
        };
        InstitutionCareerResponse: {
            careerId: components["schemas"]["Uuid"];
            /** Format: date-time */
            createdAt: string;
            createdBy: string;
            id: components["schemas"]["Uuid"];
            institutionId: components["schemas"]["Uuid"];
            /** Format: date-time */
            selectedAt: string;
            status: components["schemas"]["InstitutionCareerStatus"];
            /** Format: date-time */
            updatedAt: string;
            updatedBy: string;
        };
        /** @enum {string} */
        InstitutionCareerStatus: "SELECTED" | "INACTIVE";
        InstitutionLifecycleChangeRequest: {
            /** @description Mandatory motive for the lifecycle change. It is recorded as audit evidence in the consuming module. */
            reason: string;
        };
        InstitutionProfileRequest: {
            /** Format: date */
            foundationDate?: string | null;
            mainCampus?: components["schemas"]["MainCampusRequest"] | null;
            name: string;
            rectorName?: string | null;
            /** Format: date */
            rectorStartDate?: string | null;
        };
        InstitutionProfileResponse: {
            cesCode: string;
            confirmed: boolean;
            /** Format: date-time */
            confirmedAt?: string | null;
            confirmedBy?: string | null;
            /** Format: date */
            foundationDate?: string | null;
            instituteTypeId: components["schemas"]["Uuid"];
            institutionId: components["schemas"]["Uuid"];
            mainCampus?: components["schemas"]["MainCampusResponse"] | null;
            name: string;
            rectorName?: string | null;
            /** Format: date */
            rectorStartDate?: string | null;
            sources: components["schemas"]["InstitutionProfileSources"];
            status: components["schemas"]["InstitutionStatus"];
            /** Format: date-time */
            updatedAt: string;
            updatedBy: string;
        };
        InstitutionProfileSources: {
            foundationDate?: components["schemas"]["ProfileValueSource"] | null;
            mainCampus?: components["schemas"]["ProfileValueSource"] | null;
            name: components["schemas"]["ProfileValueSource"];
            rectorName?: components["schemas"]["ProfileValueSource"] | null;
            rectorStartDate?: components["schemas"]["ProfileValueSource"] | null;
        };
        InstitutionResponse: components["schemas"]["AuditFields"] & {
            cesCode: string;
            instituteTypeId: components["schemas"]["Uuid"];
            name: string;
            status: components["schemas"]["InstitutionStatus"];
        };
        /**
         * @default ACTIVE
         * @enum {string}
         */
        InstitutionStatus: "ACTIVE" | "SUSPENDED" | "CANCELED";
        MainCampusRequest: {
            address: string;
            cantonId: components["schemas"]["Uuid"];
            parishId?: components["schemas"]["Uuid"];
            provinceId: components["schemas"]["Uuid"];
        };
        MainCampusResponse: {
            address?: string | null;
            campusId: components["schemas"]["Uuid"];
            cantonId: components["schemas"]["Uuid"];
            parishId?: components["schemas"]["Uuid"];
            provinceId: components["schemas"]["Uuid"];
        };
        PageMetadata: {
            page: number;
            size: number;
            /** Format: int64 */
            totalElements: number;
            totalPages: number;
        };
        PaginatedAcademicBroadFieldResponse: {
            items: components["schemas"]["AcademicBroadFieldResponse"][];
            page: components["schemas"]["PageMetadata"];
        };
        PaginatedAcademicDetailedFieldResponse: {
            items: components["schemas"]["AcademicDetailedFieldResponse"][];
            page: components["schemas"]["PageMetadata"];
        };
        PaginatedAcademicSpecificFieldResponse: {
            items: components["schemas"]["AcademicSpecificFieldResponse"][];
            page: components["schemas"]["PageMetadata"];
        };
        PaginatedAllowedCareerTypeResponse: {
            items: components["schemas"]["AllowedCareerTypeResponse"][];
            page: components["schemas"]["PageMetadata"];
        };
        PaginatedAwardedTitleResponse: {
            items: components["schemas"]["AwardedTitleResponse"][];
            page: components["schemas"]["PageMetadata"];
        };
        PaginatedCampusResponse: {
            items: components["schemas"]["CampusResponse"][];
            page: components["schemas"]["PageMetadata"];
        };
        PaginatedCantonResponse: {
            items: components["schemas"]["CantonResponse"][];
            page: components["schemas"]["PageMetadata"];
        };
        PaginatedCareerResponse: {
            items: components["schemas"]["CareerResponse"][];
            page: components["schemas"]["PageMetadata"];
        };
        PaginatedCareerTypeResponse: {
            items: components["schemas"]["CareerTypeResponse"][];
            page: components["schemas"]["PageMetadata"];
        };
        PaginatedInstituteTypeResponse: {
            items: components["schemas"]["InstituteTypeResponse"][];
            page: components["schemas"]["PageMetadata"];
        };
        PaginatedInstitutionCareerResponse: {
            items: components["schemas"]["InstitutionCareerResponse"][];
            page: components["schemas"]["PageMetadata"];
        };
        PaginatedInstitutionResponse: {
            items: components["schemas"]["InstitutionResponse"][];
            page: components["schemas"]["PageMetadata"];
        };
        PaginatedParishResponse: {
            items: components["schemas"]["ParishResponse"][];
            page: components["schemas"]["PageMetadata"];
        };
        PaginatedProvinceResponse: {
            items: components["schemas"]["ProvinceResponse"][];
            page: components["schemas"]["PageMetadata"];
        };
        ParishRequest: {
            active?: components["schemas"]["ActiveStatus"];
            cantonId: components["schemas"]["Uuid"];
            name: string;
            parishCode: string;
            parishType?: components["schemas"]["ParishType"];
        };
        ParishResponse: components["schemas"]["AuditFields"] & {
            active: components["schemas"]["ActiveStatus"];
            cantonId: components["schemas"]["Uuid"];
            name: string;
            parishCode: string;
            parishType: components["schemas"]["ParishType"];
        };
        /** @enum {string} */
        ParishType: "URBAN" | "RURAL";
        Problem: {
            code: string;
            correlationId: components["schemas"]["TraceId"];
            details?: {
                [key: string]: unknown;
            }[];
            message: string;
            path: string;
            requestId: components["schemas"]["TraceId"];
            /** Format: date-time */
            timestamp: string;
        };
        /**
         * @description CES: registered by platform staff from the official source. INSTITUTION: entered or corrected by the institution.
         * @enum {string}
         */
        ProfileValueSource: "CES" | "INSTITUTION";
        ProvinceRequest: {
            active?: components["schemas"]["ActiveStatus"];
            name: string;
            provinceCode: string;
        };
        ProvinceResponse: components["schemas"]["AuditFields"] & {
            active: components["schemas"]["ActiveStatus"];
            name: string;
            provinceCode: string;
        };
        TraceId: string;
        UpdateInstitutionRequest: {
            cesCode: string;
            instituteTypeId: components["schemas"]["Uuid"];
            name: string;
            status: components["schemas"]["InstitutionStatus"];
        };
        /** Format: uuid */
        Uuid: string;
    };
    responses: {
        /** @description The request does not satisfy the API contract. */
        BadRequest: {
            headers: {
                "x-correlation-id": components["headers"]["XCorrelationId"];
                "x-request-id": components["headers"]["XRequestId"];
                [name: string]: unknown;
            };
            content: {
                "application/problem+json": components["schemas"]["Problem"];
            };
        };
        /** @description The request conflicts with existing data, a related record, or an idempotency key. */
        Conflict: {
            headers: {
                "x-correlation-id": components["headers"]["XCorrelationId"];
                "x-request-id": components["headers"]["XRequestId"];
                [name: string]: unknown;
            };
            content: {
                "application/problem+json": components["schemas"]["Problem"];
            };
        };
        /** @description The authenticated caller is not allowed to perform this operation. */
        Forbidden: {
            headers: {
                "x-correlation-id": components["headers"]["XCorrelationId"];
                "x-request-id": components["headers"]["XRequestId"];
                [name: string]: unknown;
            };
            content: {
                "application/problem+json": components["schemas"]["Problem"];
            };
        };
        /** @description The requested resource does not exist. */
        NotFound: {
            headers: {
                "x-correlation-id": components["headers"]["XCorrelationId"];
                "x-request-id": components["headers"]["XRequestId"];
                [name: string]: unknown;
            };
            content: {
                "application/problem+json": components["schemas"]["Problem"];
            };
        };
        /** @description A valid Bearer token is required. */
        Unauthorized: {
            headers: {
                "x-correlation-id": components["headers"]["XCorrelationId"];
                "x-request-id": components["headers"]["XRequestId"];
                [name: string]: unknown;
            };
            content: {
                "application/problem+json": components["schemas"]["Problem"];
            };
        };
    };
    parameters: {
        AcademicBroadFieldId: components["schemas"]["Uuid"];
        AcademicDetailedFieldId: components["schemas"]["Uuid"];
        AcademicSpecificFieldId: components["schemas"]["Uuid"];
        AwardedTitleId: components["schemas"]["Uuid"];
        CantonId: components["schemas"]["Uuid"];
        CareerId: components["schemas"]["Uuid"];
        CareerTypeId: components["schemas"]["Uuid"];
        InstituteTypeId: components["schemas"]["Uuid"];
        InstitutionId: components["schemas"]["Uuid"];
        Page: number;
        ParishId: components["schemas"]["Uuid"];
        ProvinceId: components["schemas"]["Uuid"];
        Size: number;
        XCorrelationId: components["schemas"]["TraceId"];
        XIdempotencyKey: string;
        XRequestId: components["schemas"]["TraceId"];
    };
    requestBodies: never;
    headers: {
        /** @description Effective identifier that links operations in the same flow. */
        XCorrelationId: components["schemas"]["TraceId"];
        /** @description Effective identifier for this request. */
        XRequestId: components["schemas"]["TraceId"];
    };
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    validateBackofficeAccess: {
        parameters: {
            query?: never;
            header?: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The authenticated actor can access the internal BackOffice. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BackofficeAccessResponse"];
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
        };
    };
    listAcademicBroadFields: {
        parameters: {
            query?: {
                page?: components["parameters"]["Page"];
                size?: components["parameters"]["Size"];
            };
            header?: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description AcademicBroadField records retrieved. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginatedAcademicBroadFieldResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
        };
    };
    createAcademicBroadField: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AcademicBroadFieldRequest"];
            };
        };
        responses: {
            /** @description AcademicBroadField record created. */
            201: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AcademicBroadFieldResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            409: components["responses"]["Conflict"];
        };
    };
    getAcademicBroadFieldById: {
        parameters: {
            query?: never;
            header?: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                academicBroadFieldId: components["parameters"]["AcademicBroadFieldId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description AcademicBroadField record retrieved. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AcademicBroadFieldResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
        };
    };
    updateAcademicBroadField: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                academicBroadFieldId: components["parameters"]["AcademicBroadFieldId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AcademicBroadFieldRequest"];
            };
        };
        responses: {
            /** @description AcademicBroadField record updated. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AcademicBroadFieldResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
        };
    };
    deleteAcademicBroadField: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                academicBroadFieldId: components["parameters"]["AcademicBroadFieldId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description AcademicBroadField record deleted. */
            204: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
        };
    };
    listAcademicDetailedFields: {
        parameters: {
            query?: {
                page?: components["parameters"]["Page"];
                size?: components["parameters"]["Size"];
            };
            header?: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description AcademicDetailedField records retrieved. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginatedAcademicDetailedFieldResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
        };
    };
    createAcademicDetailedField: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AcademicDetailedFieldRequest"];
            };
        };
        responses: {
            /** @description AcademicDetailedField record created. */
            201: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AcademicDetailedFieldResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            409: components["responses"]["Conflict"];
        };
    };
    getAcademicDetailedFieldById: {
        parameters: {
            query?: never;
            header?: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                academicDetailedFieldId: components["parameters"]["AcademicDetailedFieldId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description AcademicDetailedField record retrieved. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AcademicDetailedFieldResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
        };
    };
    updateAcademicDetailedField: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                academicDetailedFieldId: components["parameters"]["AcademicDetailedFieldId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AcademicDetailedFieldRequest"];
            };
        };
        responses: {
            /** @description AcademicDetailedField record updated. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AcademicDetailedFieldResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
        };
    };
    deleteAcademicDetailedField: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                academicDetailedFieldId: components["parameters"]["AcademicDetailedFieldId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description AcademicDetailedField record deleted. */
            204: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
        };
    };
    listAcademicSpecificFields: {
        parameters: {
            query?: {
                page?: components["parameters"]["Page"];
                size?: components["parameters"]["Size"];
            };
            header?: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description AcademicSpecificField records retrieved. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginatedAcademicSpecificFieldResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
        };
    };
    createAcademicSpecificField: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AcademicSpecificFieldRequest"];
            };
        };
        responses: {
            /** @description AcademicSpecificField record created. */
            201: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AcademicSpecificFieldResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            409: components["responses"]["Conflict"];
        };
    };
    getAcademicSpecificFieldById: {
        parameters: {
            query?: never;
            header?: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                academicSpecificFieldId: components["parameters"]["AcademicSpecificFieldId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description AcademicSpecificField record retrieved. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AcademicSpecificFieldResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
        };
    };
    updateAcademicSpecificField: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                academicSpecificFieldId: components["parameters"]["AcademicSpecificFieldId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AcademicSpecificFieldRequest"];
            };
        };
        responses: {
            /** @description AcademicSpecificField record updated. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AcademicSpecificFieldResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
        };
    };
    deleteAcademicSpecificField: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                academicSpecificFieldId: components["parameters"]["AcademicSpecificFieldId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description AcademicSpecificField record deleted. */
            204: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
        };
    };
    listAwardedTitles: {
        parameters: {
            query?: {
                page?: components["parameters"]["Page"];
                size?: components["parameters"]["Size"];
            };
            header?: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description AwardedTitle records retrieved. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginatedAwardedTitleResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
        };
    };
    createAwardedTitle: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AwardedTitleRequest"];
            };
        };
        responses: {
            /** @description AwardedTitle record created. */
            201: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AwardedTitleResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            409: components["responses"]["Conflict"];
        };
    };
    getAwardedTitleById: {
        parameters: {
            query?: never;
            header?: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                awardedTitleId: components["parameters"]["AwardedTitleId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description AwardedTitle record retrieved. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AwardedTitleResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
        };
    };
    updateAwardedTitle: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                awardedTitleId: components["parameters"]["AwardedTitleId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AwardedTitleRequest"];
            };
        };
        responses: {
            /** @description AwardedTitle record updated. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AwardedTitleResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
        };
    };
    deleteAwardedTitle: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                awardedTitleId: components["parameters"]["AwardedTitleId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description AwardedTitle record deleted. */
            204: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
        };
    };
    listCantons: {
        parameters: {
            query?: {
                page?: components["parameters"]["Page"];
                size?: components["parameters"]["Size"];
            };
            header?: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Canton records retrieved. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginatedCantonResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
        };
    };
    createCanton: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CantonRequest"];
            };
        };
        responses: {
            /** @description Canton record created. */
            201: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CantonResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            409: components["responses"]["Conflict"];
        };
    };
    getCantonById: {
        parameters: {
            query?: never;
            header?: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                cantonId: components["parameters"]["CantonId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Canton record retrieved. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CantonResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
        };
    };
    updateCanton: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                cantonId: components["parameters"]["CantonId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CantonRequest"];
            };
        };
        responses: {
            /** @description Canton record updated. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CantonResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
        };
    };
    deleteCanton: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                cantonId: components["parameters"]["CantonId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Canton record deleted. */
            204: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
        };
    };
    listCareerTypes: {
        parameters: {
            query?: {
                page?: components["parameters"]["Page"];
                size?: components["parameters"]["Size"];
            };
            header?: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description CareerType records retrieved. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginatedCareerTypeResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
        };
    };
    createCareerType: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CareerTypeRequest"];
            };
        };
        responses: {
            /** @description CareerType record created. */
            201: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CareerTypeResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            409: components["responses"]["Conflict"];
        };
    };
    getCareerTypeById: {
        parameters: {
            query?: never;
            header?: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                careerTypeId: components["parameters"]["CareerTypeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description CareerType record retrieved. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CareerTypeResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
        };
    };
    updateCareerType: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                careerTypeId: components["parameters"]["CareerTypeId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CareerTypeRequest"];
            };
        };
        responses: {
            /** @description CareerType record updated. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CareerTypeResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
        };
    };
    deleteCareerType: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                careerTypeId: components["parameters"]["CareerTypeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description CareerType record deleted. */
            204: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
        };
    };
    listCareers: {
        parameters: {
            query?: {
                page?: components["parameters"]["Page"];
                size?: components["parameters"]["Size"];
            };
            header?: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Career records retrieved. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginatedCareerResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
        };
    };
    createCareer: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CareerRequest"];
            };
        };
        responses: {
            /** @description Career record created. */
            201: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CareerResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            409: components["responses"]["Conflict"];
        };
    };
    getCareerById: {
        parameters: {
            query?: never;
            header?: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                careerId: components["parameters"]["CareerId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Career record retrieved. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CareerResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
        };
    };
    updateCareer: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                careerId: components["parameters"]["CareerId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CareerRequest"];
            };
        };
        responses: {
            /** @description Career record updated. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CareerResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
        };
    };
    deleteCareer: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                careerId: components["parameters"]["CareerId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Career record deleted. */
            204: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
        };
    };
    listInstituteTypes: {
        parameters: {
            query?: {
                page?: components["parameters"]["Page"];
                size?: components["parameters"]["Size"];
            };
            header?: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description InstituteType records retrieved. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginatedInstituteTypeResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
        };
    };
    createInstituteType: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InstituteTypeRequest"];
            };
        };
        responses: {
            /** @description InstituteType record created. */
            201: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InstituteTypeResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            409: components["responses"]["Conflict"];
        };
    };
    getInstituteTypeById: {
        parameters: {
            query?: never;
            header?: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                instituteTypeId: components["parameters"]["InstituteTypeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description InstituteType record retrieved. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InstituteTypeResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
        };
    };
    updateInstituteType: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                instituteTypeId: components["parameters"]["InstituteTypeId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InstituteTypeRequest"];
            };
        };
        responses: {
            /** @description InstituteType record updated. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InstituteTypeResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
        };
    };
    deleteInstituteType: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                instituteTypeId: components["parameters"]["InstituteTypeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description InstituteType record deleted. */
            204: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
        };
    };
    listAllowedCareerTypes: {
        parameters: {
            query?: {
                page?: components["parameters"]["Page"];
                size?: components["parameters"]["Size"];
            };
            header?: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                instituteTypeId: components["parameters"]["InstituteTypeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Allowed career types retrieved. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginatedAllowedCareerTypeResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
        };
    };
    allowCareerType: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                instituteTypeId: components["parameters"]["InstituteTypeId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AllowedCareerTypeRequest"];
            };
        };
        responses: {
            /** @description Career type allowed. */
            201: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AllowedCareerTypeResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
        };
    };
    disallowCareerType: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                careerTypeId: components["schemas"]["Uuid"];
                instituteTypeId: components["parameters"]["InstituteTypeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Career type disallowed. */
            204: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
        };
    };
    listParishes: {
        parameters: {
            query?: {
                page?: components["parameters"]["Page"];
                size?: components["parameters"]["Size"];
            };
            header?: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Parish records retrieved. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginatedParishResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
        };
    };
    createParish: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ParishRequest"];
            };
        };
        responses: {
            /** @description Parish record created. */
            201: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ParishResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            409: components["responses"]["Conflict"];
        };
    };
    getParishById: {
        parameters: {
            query?: never;
            header?: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                parishId: components["parameters"]["ParishId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Parish record retrieved. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ParishResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
        };
    };
    updateParish: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                parishId: components["parameters"]["ParishId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ParishRequest"];
            };
        };
        responses: {
            /** @description Parish record updated. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ParishResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
        };
    };
    deleteParish: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                parishId: components["parameters"]["ParishId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Parish record deleted. */
            204: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
        };
    };
    listProvinces: {
        parameters: {
            query?: {
                page?: components["parameters"]["Page"];
                size?: components["parameters"]["Size"];
            };
            header?: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Province records retrieved. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginatedProvinceResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
        };
    };
    createProvince: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ProvinceRequest"];
            };
        };
        responses: {
            /** @description Province record created. */
            201: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ProvinceResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            409: components["responses"]["Conflict"];
        };
    };
    getProvinceById: {
        parameters: {
            query?: never;
            header?: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                provinceId: components["parameters"]["ProvinceId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Province record retrieved. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ProvinceResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
        };
    };
    updateProvince: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                provinceId: components["parameters"]["ProvinceId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ProvinceRequest"];
            };
        };
        responses: {
            /** @description Province record updated. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ProvinceResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
        };
    };
    deleteProvince: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                provinceId: components["parameters"]["ProvinceId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Province record deleted. */
            204: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
        };
    };
    listInstitutions: {
        parameters: {
            query?: {
                page?: components["parameters"]["Page"];
                size?: components["parameters"]["Size"];
            };
            header?: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Institutions retrieved. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginatedInstitutionResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
        };
    };
    createInstitution: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateInstitutionRequest"];
            };
        };
        responses: {
            /** @description Institution created. */
            201: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InstitutionResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            409: components["responses"]["Conflict"];
        };
    };
    getInstitutionById: {
        parameters: {
            query?: never;
            header?: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                institutionId: components["parameters"]["InstitutionId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Institution retrieved. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InstitutionResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
        };
    };
    updateInstitution: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                institutionId: components["parameters"]["InstitutionId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateInstitutionRequest"];
            };
        };
        responses: {
            /** @description Institution updated. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InstitutionResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
        };
    };
    listCampuses: {
        parameters: {
            query?: {
                page?: components["parameters"]["Page"];
                size?: components["parameters"]["Size"];
            };
            header?: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                institutionId: components["parameters"]["InstitutionId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Campuses retrieved. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginatedCampusResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
        };
    };
    createCampus: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                institutionId: components["parameters"]["InstitutionId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CampusRequest"];
            };
        };
        responses: {
            /** @description Campus created. */
            201: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CampusResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
        };
    };
    getCampusById: {
        parameters: {
            query?: never;
            header?: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                campusId: components["schemas"]["Uuid"];
                institutionId: components["parameters"]["InstitutionId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Campus retrieved. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CampusResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
        };
    };
    updateCampus: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                campusId: components["schemas"]["Uuid"];
                institutionId: components["parameters"]["InstitutionId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CampusRequest"];
            };
        };
        responses: {
            /** @description Campus updated. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CampusResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
        };
    };
    deleteCampus: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                campusId: components["schemas"]["Uuid"];
                institutionId: components["parameters"]["InstitutionId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Campus deleted. */
            204: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
        };
    };
    listInstitutionCareers: {
        parameters: {
            query?: {
                page?: components["parameters"]["Page"];
                size?: components["parameters"]["Size"];
            };
            header?: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                institutionId: components["parameters"]["InstitutionId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Selections retrieved. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginatedInstitutionCareerResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
        };
    };
    createInstitutionCareer: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                institutionId: components["parameters"]["InstitutionId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InstitutionCareerRequest"];
            };
        };
        responses: {
            /** @description Career selected. */
            201: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InstitutionCareerResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
        };
    };
    getInstitutionCareerById: {
        parameters: {
            query?: never;
            header?: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                institutionCareerId: components["schemas"]["Uuid"];
                institutionId: components["parameters"]["InstitutionId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Selection retrieved. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InstitutionCareerResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
        };
    };
    updateInstitutionCareer: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                institutionCareerId: components["schemas"]["Uuid"];
                institutionId: components["parameters"]["InstitutionId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InstitutionCareerRequest"];
            };
        };
        responses: {
            /** @description Selection updated. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InstitutionCareerResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
        };
    };
    deleteInstitutionCareer: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                institutionCareerId: components["schemas"]["Uuid"];
                institutionId: components["parameters"]["InstitutionId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Selection deleted. */
            204: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
        };
    };
    getInstitutionProfile: {
        parameters: {
            query?: never;
            header?: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                institutionId: components["parameters"]["InstitutionId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Institution basic data retrieved. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InstitutionProfileResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
        };
    };
    updateInstitutionProfile: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                institutionId: components["parameters"]["InstitutionId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InstitutionProfileRequest"];
            };
        };
        responses: {
            /** @description Institution basic data updated. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InstitutionProfileResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
        };
    };
    confirmInstitutionProfile: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                institutionId: components["parameters"]["InstitutionId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Institution basic data confirmed. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InstitutionProfileResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
        };
    };
    reactivateInstitution: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                institutionId: components["parameters"]["InstitutionId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InstitutionLifecycleChangeRequest"];
            };
        };
        responses: {
            /** @description Institution reactivated. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InstitutionResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
        };
    };
    suspendInstitution: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                institutionId: components["parameters"]["InstitutionId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InstitutionLifecycleChangeRequest"];
            };
        };
        responses: {
            /** @description Institution suspended. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InstitutionResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
        };
    };
    withdrawInstitution: {
        parameters: {
            query?: never;
            header: {
                "x-correlation-id"?: components["parameters"]["XCorrelationId"];
                "x-idempotency-key": components["parameters"]["XIdempotencyKey"];
                "x-request-id"?: components["parameters"]["XRequestId"];
            };
            path: {
                institutionId: components["parameters"]["InstitutionId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InstitutionLifecycleChangeRequest"];
            };
        };
        responses: {
            /** @description Institution withdrawn. */
            200: {
                headers: {
                    "x-correlation-id": components["headers"]["XCorrelationId"];
                    "x-request-id": components["headers"]["XRequestId"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InstitutionResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
        };
    };
}
