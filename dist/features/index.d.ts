/**
 * Typed Feature Flags for Warborn OS.
 * @module @warborn/config/features
 */
export interface FeatureFlags {
    readonly voice: boolean;
    readonly vision: boolean;
    readonly plugins: boolean;
    readonly memory: boolean;
    readonly telemetry: boolean;
    readonly reasoning: boolean;
    readonly multiAgent: boolean;
    readonly experimental: boolean;
}
export declare const defaultFeatureFlags: FeatureFlags;
//# sourceMappingURL=index.d.ts.map