import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  {
    extends: 'vitest.config.js',
    test: {
      environment: 'jsdom',
      name: 'unit',
      include: ['**/*/unit/*.{spec,test}.{js,ts}'],
    },
  },
  {
    extends: 'vitest.config.js',
    test: {
      include: ['**/*/browser/*.{spec,test}.{js,ts}'],
      browser: {
        enabled: true,
        name: 'chromium',
        provider: 'playwright',
        // https://playwright.dev
        providerOptions: {},
      },
      name: 'browser'
    },
  },
])
