import type { components as GovernanceComponents } from '../generated/governance-api';
import type { components as IamComponents } from '../generated/iam-api';

type GovernanceProblem = GovernanceComponents['schemas']['Problem'];
type IamApiError = IamComponents['schemas']['ApiError'];

export type NormalizedApiError =
  | ({ kind: 'governance'; status: number } & GovernanceProblem)
  | ({ kind: 'iam' } & IamApiError)
  | { kind: 'http'; status: number; message: string }
  | { kind: 'network'; message: string }
  | { kind: 'aborted'; message: string }
  | { kind: 'invalid-response'; status: number; message: string };

export class ApiRequestError extends Error {
  readonly detail: NormalizedApiError;

  constructor(detail: NormalizedApiError, options?: ErrorOptions) {
    super(detail.message, options);
    this.name = 'ApiRequestError';
    this.detail = detail;
  }
}

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const isString = (value: unknown): value is string => typeof value === 'string';

const isGovernanceProblem = (value: unknown): value is GovernanceProblem => {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isString(value.code) &&
    isString(value.message) &&
    isString(value.path) &&
    isString(value.timestamp) &&
    isString(value.requestId) &&
    isString(value.correlationId) &&
    (value.details === undefined || (Array.isArray(value.details) && value.details.every(isRecord)))
  );
};

const isIamApiError = (value: unknown): value is IamApiError => {
  if (!isRecord(value)) {
    return false;
  }

  const validDetails =
    value.details === undefined ||
    value.details === null ||
    (Array.isArray(value.details) &&
      value.details.every(
        (detail) => isRecord(detail) && isString(detail.field) && isString(detail.issue),
      ));

  return (
    typeof value.status === 'number' &&
    isString(value.error) &&
    isString(value.message) &&
    isString(value.path) &&
    isString(value.timestamp) &&
    validDetails
  );
};

export const normalizeApiError = (status: number, body: unknown): NormalizedApiError => {
  if (isGovernanceProblem(body)) {
    return { kind: 'governance', status, ...body };
  }

  if (isIamApiError(body)) {
    return { kind: 'iam', ...body };
  }

  return {
    kind: 'http',
    status,
    message: 'La solicitud no pudo completarse.',
  };
};
