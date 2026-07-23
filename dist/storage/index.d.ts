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
export declare const defaultStorageConfig: StorageConfig;
//# sourceMappingURL=index.d.ts.map