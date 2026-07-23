"use strict";
/**
 * Gateway and API Server Endpoint Configuration.
 * @module @warborn/config/api
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultApiConfig = void 0;
exports.defaultApiConfig = {
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
//# sourceMappingURL=index.js.map