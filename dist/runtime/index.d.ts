/**
 * Worker, Queue, and Cache Runtime Configuration.
 * @module @warborn/config/runtime
 */
export interface RuntimeConfig {
    readonly workers: {
        readonly concurrency: number;
        readonly maxJobsPerWorker: number;
    };
    readonly queues: {
        readonly defaultTimeoutMs: number;
        readonly maxRetries: number;
        readonly retryBackoffMs: number;
    };
    readonly cache: {
        readonly ttlSeconds: number;
        readonly maxItems: number;
    };
}
export declare const defaultRuntimeConfig: RuntimeConfig;
//# sourceMappingURL=index.d.ts.map