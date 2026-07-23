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

export const defaultApiConfig: ApiConfig = {
  port: 8080,
  host: '0.0.0.0',
  gatewayPrefix: '/api/v1',
  cors: {
    allowedOrigins: ['http://localhost:3000', 'http://localhost:5173'],
    allowCredentials: true,
  },
  rateLimit: {
    windowMs: 60000,
    maxRequestsPerWindow: 120,
  },
};
