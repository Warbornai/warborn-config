/**
 * AI Model Provider Configurations.
 * @module @warborn/config/providers
 */
export interface ProviderBaseConfig {
    readonly enabled: boolean;
    readonly baseUrl?: string;
    readonly region?: string;
    readonly apiKeyEnvVar?: string;
    readonly defaultModel: string;
    readonly timeoutMs: number;
    readonly maxRetries: number;
    readonly maxTokens?: number;
    readonly temperature?: number;
    readonly topP?: number;
}
export interface BedrockProviderConfig extends ProviderBaseConfig {
    readonly region: string;
    readonly accessKeyIdEnvVar: string;
    readonly secretAccessKeyEnvVar: string;
    readonly modelId: string;
}
export interface AIProvidersConfig {
    readonly bedrock: BedrockProviderConfig;
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