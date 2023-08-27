/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_GOOGLE_API_KEY: string;
  VITE_PLACE_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
