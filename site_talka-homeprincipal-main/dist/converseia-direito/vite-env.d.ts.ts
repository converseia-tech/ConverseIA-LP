/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_MAIL_SERVICE: string;
    readonly VITE_MAIL_TEMPLATE: string;
    readonly VITE_MAIL_USERID: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }