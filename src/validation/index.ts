/**
 * Fail-Fast Configuration Validation Engine.
 * @module @warborn/config/validation
 */

import { PlatformConfig } from '../';

declare const process: { env: Record<string, string | undefined> } | undefined;

export class ConfigValidationError extends Error {
  constructor(public readonly errors: readonly string[]) {
    super(`[Warborn Config Validation Error]:\n  - ${errors.join('\n  - ')}`);
    this.name = 'ConfigValidationError';
  }
}

export function validateConfig(config: PlatformConfig): void {
  const errors: string[] = [];

  if (config.environment.isProduction) {
    const envObj = typeof process !== 'undefined' && process?.env ? process.env : {};
    if (!envObj[config.auth.jwtSecretEnvVar]) {
      errors.push(`Production mode requires ${config.auth.jwtSecretEnvVar} environment variable to be set.`);
    }
  }

  if (config.api.port <= 0 || config.api.port > 65535) {
    errors.push(`Invalid API port: ${config.api.port}. Must be between 1 and 65535.`);
  }

  if (errors.length > 0) {
    throw new ConfigValidationError(errors);
  }
}
