/**
 * Environment Modes and Resolution Utilities for Warborn OS.
 * @module @warborn/config/environment
 */

declare const process: { env: Record<string, string | undefined> } | undefined;

export type EnvironmentMode = 'development' | 'test' | 'staging' | 'production' | 'local';

export interface EnvironmentConfig {
  readonly mode: EnvironmentMode;
  readonly isDevelopment: boolean;
  readonly isTest: boolean;
  readonly isProduction: boolean;
  readonly nodeEnv: string;
}

export function parseEnvironment(modeString?: string): EnvironmentConfig {
  const nodeEnvVal = typeof process !== 'undefined' && process?.env ? process.env.NODE_ENV : 'development';
  const env = (modeString || nodeEnvVal || 'development').toLowerCase();
  let mode: EnvironmentMode = 'development';

  if (env === 'production' || env === 'prod') mode = 'production';
  else if (env === 'staging') mode = 'staging';
  else if (env === 'test') mode = 'test';
  else if (env === 'local') mode = 'local';

  return {
    mode,
    isDevelopment: mode === 'development' || mode === 'local',
    isTest: mode === 'test',
    isProduction: mode === 'production' || mode === 'staging',
    nodeEnv: env,
  };
}
