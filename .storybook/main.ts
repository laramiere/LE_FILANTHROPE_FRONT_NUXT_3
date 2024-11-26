import type { StorybookConfig } from '@storybook-vue/nuxt'

export default {
  stories: [
    '../components/**/*.stories.ts',
    '../components/**/**/*.stories.ts',
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds',
    '@storybook/addon-controls',
    '@storybook/addon-measure',
    '@storybook/addon-outline',
    '@storybook/addon-toolbars',
    '@storybook/addon-viewport',
  ],
  framework: '@storybook-vue/nuxt',
} as StorybookConfig
