/**
 * Fail-Fast Configuration Validation Engine.
 * @module @warborn/config/validation
 */

import { PlatformConfig } from '../';

export class ConfigValidationError extends Error {
  constructor(public readonly errors: readonly string[]) {
    super(`[Warborn Config Validation Error]:\n  - ${errors.join('\n  - ')}`);
    this.name = 'ConfigValidationError';
  }
}

export function validateConfig(config: PlatformConfig): void {
  const errors: string[] = [];

  if (config.environment.isProduction) {
    if (!process.env[config.auth.jwtSecretEnvVar]) {
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
