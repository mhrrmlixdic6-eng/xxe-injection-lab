import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { AdminUser, FlagStatusList, FlagSubmitInput, FlagSubmitResult, HealthStatus, HiddenUserResult, Session, SessionInput, XmlParseInput, XmlParseResult } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType, BodyType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * @summary Health check
 */
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateSessionUrl: () => string;
/**
 * @summary Create a new session
 */
export declare const createSession: (sessionInput: SessionInput, options?: RequestInit) => Promise<Session>;
export declare const getCreateSessionMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createSession>>, TError, {
        data: BodyType<SessionInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createSession>>, TError, {
    data: BodyType<SessionInput>;
}, TContext>;
export type CreateSessionMutationResult = NonNullable<Awaited<ReturnType<typeof createSession>>>;
export type CreateSessionMutationBody = BodyType<SessionInput>;
export type CreateSessionMutationError = ErrorType<void>;
/**
* @summary Create a new session
*/
export declare const useCreateSession: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createSession>>, TError, {
        data: BodyType<SessionInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createSession>>, TError, {
    data: BodyType<SessionInput>;
}, TContext>;
export declare const getGetSessionUrl: (id: number) => string;
/**
 * @summary Get session by ID
 */
export declare const getSession: (id: number, options?: RequestInit) => Promise<Session>;
export declare const getGetSessionQueryKey: (id: number) => readonly [`/api/session/${number}`];
export declare const getGetSessionQueryOptions: <TData = Awaited<ReturnType<typeof getSession>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSession>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getSession>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetSessionQueryResult = NonNullable<Awaited<ReturnType<typeof getSession>>>;
export type GetSessionQueryError = ErrorType<void>;
/**
 * @summary Get session by ID
 */
export declare function useGetSession<TData = Awaited<ReturnType<typeof getSession>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSession>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getParseXmlUrl: () => string;
/**
 * @summary Parse XML input for XXE challenge
 */
export declare const parseXml: (xmlParseInput: XmlParseInput, options?: RequestInit) => Promise<XmlParseResult>;
export declare const getParseXmlMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof parseXml>>, TError, {
        data: BodyType<XmlParseInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof parseXml>>, TError, {
    data: BodyType<XmlParseInput>;
}, TContext>;
export type ParseXmlMutationResult = NonNullable<Awaited<ReturnType<typeof parseXml>>>;
export type ParseXmlMutationBody = BodyType<XmlParseInput>;
export type ParseXmlMutationError = ErrorType<void>;
/**
* @summary Parse XML input for XXE challenge
*/
export declare const useParseXml: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof parseXml>>, TError, {
        data: BodyType<XmlParseInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof parseXml>>, TError, {
    data: BodyType<XmlParseInput>;
}, TContext>;
export declare const getGetFlagStatusUrl: (sessionId: number) => string;
/**
 * @summary Get flag completion status for a session
 */
export declare const getFlagStatus: (sessionId: number, options?: RequestInit) => Promise<FlagStatusList>;
export declare const getGetFlagStatusQueryKey: (sessionId: number) => readonly [`/api/flags/status/${number}`];
export declare const getGetFlagStatusQueryOptions: <TData = Awaited<ReturnType<typeof getFlagStatus>>, TError = ErrorType<void>>(sessionId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getFlagStatus>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getFlagStatus>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetFlagStatusQueryResult = NonNullable<Awaited<ReturnType<typeof getFlagStatus>>>;
export type GetFlagStatusQueryError = ErrorType<void>;
/**
 * @summary Get flag completion status for a session
 */
export declare function useGetFlagStatus<TData = Awaited<ReturnType<typeof getFlagStatus>>, TError = ErrorType<void>>(sessionId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getFlagStatus>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getSubmitFlagUrl: () => string;
/**
 * @summary Submit a flag answer
 */
export declare const submitFlag: (flagSubmitInput: FlagSubmitInput, options?: RequestInit) => Promise<FlagSubmitResult>;
export declare const getSubmitFlagMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof submitFlag>>, TError, {
        data: BodyType<FlagSubmitInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof submitFlag>>, TError, {
    data: BodyType<FlagSubmitInput>;
}, TContext>;
export type SubmitFlagMutationResult = NonNullable<Awaited<ReturnType<typeof submitFlag>>>;
export type SubmitFlagMutationBody = BodyType<FlagSubmitInput>;
export type SubmitFlagMutationError = ErrorType<void>;
/**
* @summary Submit a flag answer
*/
export declare const useSubmitFlag: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof submitFlag>>, TError, {
        data: BodyType<FlagSubmitInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof submitFlag>>, TError, {
    data: BodyType<FlagSubmitInput>;
}, TContext>;
export declare const getGetHiddenUserUrl: () => string;
/**
 * @summary Hidden route for flag 6 discovery
 */
export declare const getHiddenUser: (options?: RequestInit) => Promise<HiddenUserResult>;
export declare const getGetHiddenUserQueryKey: () => readonly ["/api/user"];
export declare const getGetHiddenUserQueryOptions: <TData = Awaited<ReturnType<typeof getHiddenUser>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getHiddenUser>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getHiddenUser>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetHiddenUserQueryResult = NonNullable<Awaited<ReturnType<typeof getHiddenUser>>>;
export type GetHiddenUserQueryError = ErrorType<unknown>;
/**
 * @summary Hidden route for flag 6 discovery
 */
export declare function useGetHiddenUser<TData = Awaited<ReturnType<typeof getHiddenUser>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getHiddenUser>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetAdminUsersUrl: () => string;
/**
 * @summary Admin panel - list all sessions with progress
 */
export declare const getAdminUsers: (options?: RequestInit) => Promise<AdminUser[]>;
export declare const getGetAdminUsersQueryKey: () => readonly ["/api/admin/users"];
export declare const getGetAdminUsersQueryOptions: <TData = Awaited<ReturnType<typeof getAdminUsers>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminUsers>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAdminUsers>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAdminUsersQueryResult = NonNullable<Awaited<ReturnType<typeof getAdminUsers>>>;
export type GetAdminUsersQueryError = ErrorType<unknown>;
/**
 * @summary Admin panel - list all sessions with progress
 */
export declare function useGetAdminUsers<TData = Awaited<ReturnType<typeof getAdminUsers>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminUsers>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export {};
//# sourceMappingURL=api.d.ts.map