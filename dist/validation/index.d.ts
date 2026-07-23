/**
 * Fail-Fast Configuration Validation Engine.
 * @module @warborn/config/validation
 */
import { PlatformConfig } from '../';
export declare class ConfigValidationError extends Error {
    readonly errors: readonly string[];
    constructor(errors: readonly string[]);
}
export declare function validateConfig(config: PlatformConfig): void;
//# sourceMappingURL=index.d.ts.map