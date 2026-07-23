"use strict";
/**
 * Storage, Vector Database, and Object Storage Configuration.
 * @module @warborn/config/storage
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultStorageConfig = void 0;
exports.defaultStorageConfig = {
    databaseUrlEnvVar: 'DATABASE_URL',
    vectorDb: {
        provider: 'in_memory',
        endpoint: 'http://localhost:6333',
    },
    redisUrlEnvVar: 'REDIS_URL',
};
//# sourceMappingURL=index.js.map