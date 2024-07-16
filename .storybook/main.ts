import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-module-mock',
  ],

  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {},
  staticDirs: ['../public'],
  typescript: {
    check: true,
    reactDocgen: 'react-docgen-typescript',
  },
}
export default config
