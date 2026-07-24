/**
 * AI Model Provider Configurations.
 * @module @warborn/config/providers
 */

declare const process: any;

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
  readonly azureOpenai: ProviderBaseConfig & { readonly apiVersion?: string; readonly resourceName?: string };
}

const env = typeof process !== 'undefined' ? process.env || {} : {};

export const defaultProvidersConfig: AIProvidersConfig = {
  bedrock: {
    enabled: true,
    region: env.AWS_REGION || 'us-east-1',
    accessKeyIdEnvVar: 'AWS_ACCESS_KEY_ID',
    secretAccessKeyEnvVar: 'AWS_SECRET_ACCESS_KEY',
    defaultModel: env.BEDROCK_MODEL_ID || 'amazon.titan-text-express-v1',
    modelId: env.BEDROCK_MODEL_ID || 'amazon.titan-text-express-v1',
    maxTokens: parseInt(env.BEDROCK_MAX_TOKENS || '2048', 10),
    temperature: parseFloat(env.BEDROCK_TEMPERATURE || '0.7'),
    topP: parseFloat(env.BEDROCK_TOP_P || '0.9'),
    timeoutMs: parseInt(env.BEDROCK_TIMEOUT || '30000', 10),
    maxRetries: 3,
  },
  openai: {
    enabled: true,
    baseUrl: 'https://api.openai.com/v1',
    apiKeyEnvVar: 'OPENAI_API_KEY',
    defaultModel: 'gpt-4o',
    timeoutMs: 30000,
    maxRetries: 3,
  },
  anthropic: {
    enabled: true,
    baseUrl: 'https://api.anthropic.com/v1',
    apiKeyEnvVar: 'ANTHROPIC_API_KEY',
    defaultModel: 'claude-3-5-sonnet-20241022',
    timeoutMs: 30000,
    maxRetries: 3,
  },
  gemini: {
    enabled: true,
    baseUrl: 'https://generativelanguage.googleapis.com/v1beta',
    apiKeyEnvVar: 'GEMINI_API_KEY',
    defaultModel: 'gemini-1.5-pro',
    timeoutMs: 30000,
    maxRetries: 3,
  },
  groq: {
    enabled: false,
    baseUrl: 'https://api.groq.com/openai/v1',
    apiKeyEnvVar: 'GROQ_API_KEY',
    defaultModel: 'llama-3.3-70b-versatile',
    timeoutMs: 20000,
    maxRetries: 2,
  },
  mistral: {
    enabled: false,
    baseUrl: 'https://api.mistral.ai/v1',
    apiKeyEnvVar: 'MISTRAL_API_KEY',
    defaultModel: 'mistral-large-latest',
    timeoutMs: 30000,
    maxRetries: 3,
  },
  cohere: {
    enabled: false,
    baseUrl: 'https://api.cohere.ai/v1',
    apiKeyEnvVar: 'COHERE_API_KEY',
    defaultModel: 'command-r-plus',
    timeoutMs: 30000,
    maxRetries: 3,
  },
  openrouter: {
    enabled: false,
    baseUrl: 'https://openrouter.ai/api/v1',
    apiKeyEnvVar: 'OPENROUTER_API_KEY',
    defaultModel: 'auto',
    timeoutMs: 30000,
    maxRetries: 3,
  },
  ollama: {
    enabled: true,
    baseUrl: 'http://localhost:11434/v1',
    defaultModel: 'llama3.2',
    timeoutMs: 60000,
    maxRetries: 1,
  },
  azureOpenai: {
    enabled: false,
    baseUrl: 'https://your-resource.openai.azure.com',
    apiKeyEnvVar: 'AZURE_OPENAI_API_KEY',
    defaultModel: 'gpt-4o',
    timeoutMs: 30000,
    maxRetries: 3,
    apiVersion: '2024-02-15-preview',
  },
};
