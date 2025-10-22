export {};

declare global {
  interface Window {
    Cookiebot?: {
      consent: {
        marketing: boolean;
        statistics: boolean;
      };
    };
    gtag: (command: string, ...params: unknown[]) => void;
  }
}
