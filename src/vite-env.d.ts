/// <reference types="vite/client" />

interface ImportMeta {
  readonly env: ImportMetaEnv;
  globEager(pattern: string): Record<string, { default: string }>;
}
