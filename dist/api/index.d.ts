/**
 * Gateway and API Server Endpoint Configuration.
 * @module @warborn/config/api
 */
export interface ApiConfig {
    readonly port: number;
    readonly host: string;
    readonly gatewayPrefix: string;
    readonly cors: {
        readonly allowedOrigins: readonly string[];
        readonly allowCredentials: boolean;
    };
    readonly rateLimit: {
        readonly windowMs: number;
        readonly maxRequestsPerWindow: number;
    };
}
export declare const defaultApiConfig: ApiConfig;
//# sourceMappingURL=index.d.ts.map