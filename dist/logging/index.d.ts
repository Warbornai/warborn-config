/**
 * Logging and Telemetry Configuration.
 * @module @warborn/config/logging
 */
export type LogLevel = 'debug' | 'info' | 'warn' | 'error';
export interface LoggingConfig {
    readonly level: LogLevel;
    readonly format: 'json' | 'pretty';
    readonly enableConsole: boolean;
}
export declare const defaultLoggingConfig: LoggingConfig;
//# sourceMappingURL=index.d.ts.map