/**
 * Environment Modes and Resolution Utilities for Warborn OS.
 * @module @warborn/config/environment
 */
export type EnvironmentMode = 'development' | 'test' | 'staging' | 'production' | 'local';
export interface EnvironmentConfig {
    readonly mode: EnvironmentMode;
    readonly isDevelopment: boolean;
    readonly isTest: boolean;
    readonly isProduction: boolean;
    readonly nodeEnv: string;
}
export declare function parseEnvironment(modeString?: string): EnvironmentConfig;
//# sourceMappingURL=index.d.ts.map