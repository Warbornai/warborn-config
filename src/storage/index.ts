/**
 * Storage, Vector Database, and Object Storage Configuration.
 * @module @warborn/config/storage
 */

export interface StorageConfig {
  readonly databaseUrlEnvVar: string;
  readonly vectorDb: {
    readonly provider: 'qdrant' | 'milvus' | 'in_memory';
    readonly endpoint: string;
  };
  readonly redisUrlEnvVar: string;
}

export const defaultStorageConfig: StorageConfig = {
  databaseUrlEnvVar: 'DATABASE_URL',
  vectorDb: {
    provider: 'in_memory',
    endpoint: 'http://localhost:6333',
  },
  redisUrlEnvVar: 'REDIS_URL',
};
