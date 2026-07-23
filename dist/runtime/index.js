"use strict";
/**
 * Worker, Queue, and Cache Runtime Configuration.
 * @module @warborn/config/runtime
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultRuntimeConfig = void 0;
exports.defaultRuntimeConfig = {
    workers: {
        concurrency: 4,
        maxJobsPerWorker: 10,
    },
    queues: {
        defaultTimeoutMs: 60000,
        maxRetries: 3,
        retryBackoffMs: 1000,
    },
    cache: {
        ttlSeconds: 3600,
        maxItems: 1000,
    },
};
//# sourceMappingURL=index.js.map