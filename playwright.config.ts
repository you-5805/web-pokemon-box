import type { PlaywrightTestConfig } from '@playwright/test';

export default <PlaywrightTestConfig>{
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
};
