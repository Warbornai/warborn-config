/**
 * Authentication, JWT, and Session Settings.
 * @module @warborn/config/auth
 */

export interface AuthConfig {
  readonly jwtSecretEnvVar: string;
  readonly tokenExpirationSeconds: number;
  readonly refreshTokenExpirationSeconds: number;
  readonly sessionCookieName: string;
}

export const defaultAuthConfig: AuthConfig = {
  jwtSecretEnvVar: 'WARBORN_JWT_SECRET',
  tokenExpirationSeconds: 3600,
  refreshTokenExpirationSeconds: 604800,
  sessionCookieName: 'warborn_session',
};
