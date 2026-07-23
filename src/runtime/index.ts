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

export const defaultRuntimeConfig: RuntimeConfig = {
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
