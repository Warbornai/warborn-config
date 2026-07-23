"use strict";
/**
 * Environment Modes and Resolution Utilities for Warborn OS.
 * @module @warborn/config/environment
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseEnvironment = parseEnvironment;
function parseEnvironment(modeString) {
    const nodeEnvVal = typeof process !== 'undefined' && process?.env ? process.env.NODE_ENV : 'development';
    const env = (modeString || nodeEnvVal || 'development').toLowerCase();
    let mode = 'development';
    if (env === 'production' || env === 'prod')
        mode = 'production';
    else if (env === 'staging')
        mode = 'staging';
    else if (env === 'test')
        mode = 'test';
    else if (env === 'local')
        mode = 'local';
    return {
        mode,
        isDevelopment: mode === 'development' || mode === 'local',
        isTest: mode === 'test',
        isProduction: mode === 'production' || mode === 'staging',
        nodeEnv: env,
    };
}
//# sourceMappingURL=index.js.map