/**
 * @warborn/config - Platform Configuration Manager for Warborn OS
 * Single Source of Truth for Environment, Provider, Feature Flags, and Runtime Configuration.
 * @packageDocumentation
 */

import { EnvironmentConfig, parseEnvironment } from './environment';
import { FeatureFlags, defaultFeatureFlags } from './features';
import { AIProvidersConfig, defaultProvidersConfig } from './providers';
import { RuntimeConfig, defaultRuntimeConfig } from './runtime';
import { ApiConfig, defaultApiConfig } from './api';
import { AuthConfig, defaultAuthConfig } from './auth';
import { StorageConfig, defaultStorageConfig } from './storage';
import { LoggingConfig, defaultLoggingConfig } from './logging';
import { validateConfig } from './validation';

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
export function createWarbornConfig(overrides: Partial<PlatformConfig> = {}): PlatformConfig {
  const environment = overrides.environment || parseEnvironment();

  const config: PlatformConfig = {
    environment,
    features: { ...defaultFeatureFlags, ...overrides.features },
    providers: { ...defaultProvidersConfig, ...overrides.providers },
    runtime: { ...defaultRuntimeConfig, ...overrides.runtime },
    api: { ...defaultApiConfig, ...overrides.api },
    auth: { ...defaultAuthConfig, ...overrides.auth },
    storage: { ...defaultStorageConfig, ...overrides.storage },
    logging: { ...defaultLoggingConfig, ...overrides.logging },
  };

  validateConfig(config);
  return config;
}

let cachedConfig: PlatformConfig | null = null;

/** Get singleton platform configuration */
export function getPlatformConfig(): PlatformConfig {
  if (!cachedConfig) {
    cachedConfig = createWarbornConfig();
  }
  return cachedConfig;
}
