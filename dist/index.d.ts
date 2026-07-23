/**
 * @warborn/config - Platform Configuration Manager for Warborn OS
 * Single Source of Truth for Environment, Provider, Feature Flags, and Runtime Configuration.
 * @packageDocumentation
 */
import { EnvironmentConfig } from './environment';
import { FeatureFlags } from './features';
import { AIProvidersConfig } from './providers';
import { RuntimeConfig } from './runtime';
import { ApiConfig } from './api';
import { AuthConfig } from './auth';
import { StorageConfig } from './storage';
import { LoggingConfig } from './logging';
export * from './environment';
export * from './features';
export * from './providers';
export * from './runtime';
export * from './api';
export * from './auth';
export * from './storage';
export * from './logging';
export * from './validation';
export interface PlatformConfig {
    readonly environment: EnvironmentConfig;
    readonly features: FeatureFlags;
    readonly providers: AIProvidersConfig;
    readonly runtime: RuntimeConfig;
    readonly api: ApiConfig;
    readonly auth: AuthConfig;
    readonly storage: StorageConfig;
    readonly logging: LoggingConfig;
}
/** Create and validate a full Warborn Platform Configuration object */
export declare function createWarbornConfig(overrides?: Partial<PlatformConfig>): PlatformConfig;
/** Get singleton platform configuration */
export declare function getPlatformConfig(): PlatformConfig;
//# sourceMappingURL=index.d.ts.map