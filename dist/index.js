"use strict";
/**
 * @warborn/config - Platform Configuration Manager for Warborn OS
 * Single Source of Truth for Environment, Provider, Feature Flags, and Runtime Configuration.
 * @packageDocumentation
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWarbornConfig = createWarbornConfig;
exports.getPlatformConfig = getPlatformConfig;
const environment_1 = require("./environment");
const features_1 = require("./features");
const providers_1 = require("./providers");
const runtime_1 = require("./runtime");
const api_1 = require("./api");
const auth_1 = require("./auth");
const storage_1 = require("./storage");
const logging_1 = require("./logging");
const validation_1 = require("./validation");
__exportStar(require("./environment"), exports);
__exportStar(require("./features"), exports);
__exportStar(require("./providers"), exports);
__exportStar(require("./runtime"), exports);
__exportStar(require("./api"), exports);
__exportStar(require("./auth"), exports);
__exportStar(require("./storage"), exports);
__exportStar(require("./logging"), exports);
__exportStar(require("./validation"), exports);
/** Create and validate a full Warborn Platform Configuration object */
function createWarbornConfig(overrides = {}) {
    const environment = overrides.environment || (0, environment_1.parseEnvironment)();
    const config = {
        environment,
        features: { ...features_1.defaultFeatureFlags, ...overrides.features },
        providers: { ...providers_1.defaultProvidersConfig, ...overrides.providers },
        runtime: { ...runtime_1.defaultRuntimeConfig, ...overrides.runtime },
        api: { ...api_1.defaultApiConfig, ...overrides.api },
        auth: { ...auth_1.defaultAuthConfig, ...overrides.auth },
        storage: { ...storage_1.defaultStorageConfig, ...overrides.storage },
        logging: { ...logging_1.defaultLoggingConfig, ...overrides.logging },
    };
    (0, validation_1.validateConfig)(config);
    return config;
}
let cachedConfig = null;
/** Get singleton platform configuration */
function getPlatformConfig() {
    if (!cachedConfig) {
        cachedConfig = createWarbornConfig();
    }
    return cachedConfig;
}
//# sourceMappingURL=index.js.map