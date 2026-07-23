"use strict";
/**
 * Fail-Fast Configuration Validation Engine.
 * @module @warborn/config/validation
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigValidationError = void 0;
exports.validateConfig = validateConfig;
class ConfigValidationError extends Error {
    errors;
    constructor(errors) {
        super(`[Warborn Config Validation Error]:\n  - ${errors.join('\n  - ')}`);
        this.errors = errors;
        this.name = 'ConfigValidationError';
    }
}
exports.ConfigValidationError = ConfigValidationError;
function validateConfig(config) {
    const errors = [];
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
//# sourceMappingURL=index.js.map