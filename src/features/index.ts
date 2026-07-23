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

export const defaultFeatureFlags: FeatureFlags = {
  voice: true,
  vision: true,
  plugins: true,
  memory: true,
  telemetry: true,
  reasoning: true,
  multiAgent: true,
  experimental: false,
};
