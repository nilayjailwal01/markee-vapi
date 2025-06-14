declare module "@vapi-ai/web" {
    export default class Vapi {
      constructor(apiKey: string);
  
      start(assistantId: string): void;
      stop(): void;
      on(event: string, callback: (data?: any) => void): void;
    }
  
    export interface VapiError {
      message?: string;
    }
  }
  