"use strict";
/**
 * Authentication, JWT, and Session Settings.
 * @module @warborn/config/auth
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultAuthConfig = void 0;
exports.defaultAuthConfig = {
    jwtSecretEnvVar: 'WARBORN_JWT_SECRET',
    tokenExpirationSeconds: 3600,
    refreshTokenExpirationSeconds: 604800,
    sessionCookieName: 'warborn_session',
};
//# sourceMappingURL=index.js.map