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
export declare const defaultAuthConfig: AuthConfig;
//# sourceMappingURL=index.d.ts.map