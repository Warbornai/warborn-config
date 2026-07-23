# ⚡ @warborn/config

> **Single Source of Truth for environment, provider, feature flags, and runtime configuration across Warborn OS.**

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

---

## 📦 Installation

```bash
npm install @warborn/config @warborn/types
# or
pnpm add @warborn/config @warborn/types
```

---

## 🏗️ Configuration Modules

* **`@warborn/config/environment`**: Mode resolution (`development`, `test`, `staging`, `production`, `local`).
* **`@warborn/config/features`**: Typed feature flags (`voice`, `vision`, `plugins`, `memory`, `multiAgent`).
* **`@warborn/config/providers`**: Configurations for OpenAI, Anthropic, Gemini, Groq, Mistral, Ollama, etc.
* **`@warborn/config/runtime`**: Worker concurrency, queue retry backoffs, and cache TTL settings.
* **`@warborn/config/api`**: API port, gateway prefix, CORS origins, and rate limits.
* **`@warborn/config/auth`**: JWT token expiration and session cookie settings.
* **`@warborn/config/storage`**: Database URLs, vector store endpoints (Qdrant/Milvus), Redis connection strings.

---

## 💡 Usage Example

```typescript
import { createWarbornConfig, getPlatformConfig } from '@warborn/config';

// Initialize platform config with validation
const config = createWarbornConfig({
  api: {
    port: 9000,
    host: '0.0.0.0',
    gatewayPrefix: '/api/v1',
    cors: { allowedOrigins: ['*'], allowCredentials: true },
    rateLimit: { windowMs: 60000, maxRequestsPerWindow: 200 }
  }
});

console.log('Active Environment:', config.environment.mode);
console.log('Default AI Model:', config.providers.openai.defaultModel);
```

---

## 📄 License

MIT © 2026 Warborn Technologies
