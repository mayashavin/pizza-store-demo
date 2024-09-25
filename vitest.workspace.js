import { defineWorkspace, configDefaults } from 'vitest/config'

export default defineWorkspace([
  // This will keep running your existing tests.
  // If you don't need to run those in Node.js anymore,
  // You can safely remove it from the workspace file
  // Or move the browser test configuration to the config file.
  // 'vitest.config.js',
  {
    extends: 'vitest.config.js',
     test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*', '**/*.browser.{test,spec}.ts', '**/*.browser.{test,spec}.js'],
      coverage: {
        provider: 'istanbul' // or 'v8'
      },
    }
  },
  {
    extends: 'vitest.config.js',
    test: {
      include: [
        '**/*.browser.{test,spec}.ts',
        '**/*.browser.{test,spec}.js',
      ],
      name: 'browser',
      browser: {
        enabled: true,
        name: 'chromium',
        provider: 'playwright',
        // https://playwright.dev
        providerOptions: {},
      },
      coverage: {
        provider: 'istanbul' // or 'v8'
      }
    },
  },
])
