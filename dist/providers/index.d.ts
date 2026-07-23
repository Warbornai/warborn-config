/**
 * AI Model Provider Configurations.
 * @module @warborn/config/providers
 */
export interface ProviderBaseConfig {
    readonly enabled: boolean;
    readonly baseUrl: string;
    readonly apiKeyEnvVar?: string;
    readonly defaultModel: string;
    readonly timeoutMs: number;
    readonly maxRetries: number;
}
export interface AIProvidersConfig {
    readonly openai: ProviderBaseConfig;
    readonly anthropic: ProviderBaseConfig;
    readonly gemini: ProviderBaseConfig;
    readonly groq: ProviderBaseConfig;
    readonly mistral: ProviderBaseConfig;
    readonly cohere: ProviderBaseConfig;
    readonly openrouter: ProviderBaseConfig;
    readonly ollama: ProviderBaseConfig;
    readonly azureOpenai: ProviderBaseConfig & {
        readonly apiVersion?: string;
        readonly resourceName?: string;
    };
}
export declare const defaultProvidersConfig: AIProvidersConfig;
//# sourceMappingURL=index.d.ts.map