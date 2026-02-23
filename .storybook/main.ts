import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../features/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        components: path.resolve(__dirname, '../src/components'),
        utils: path.resolve(__dirname, '../src/utils'),
        stores: path.resolve(__dirname, '../src/stores'),
        hooks: path.resolve(__dirname, '../src/hooks'),
        services: path.resolve(__dirname, '../src/services'),
        screens: path.resolve(__dirname, '../src/screens'),
        '@constant': path.resolve(__dirname, '../src/utils/constant/index'),
        '@store': path.resolve(__dirname, '../src/stores/store/index'),
        '@redux-slice': path.resolve(__dirname, '../src/stores/action-slice'),
        '@redux-selector': path.resolve(__dirname, '../src/stores/selector'),
        '@redux-action-type': path.resolve(__dirname, '../src/stores/action-type'),
        '@redux-common': path.resolve(__dirname, '../src/stores/@extends/index'),
      };
    }

    const rules = config.module?.rules;
    if (rules) {
      const imageRule = rules.find(
        (rule) =>
          rule &&
          typeof rule !== 'string' &&
          rule.test instanceof RegExp &&
          rule.test.test('.svg')
      );
      if (imageRule && typeof imageRule !== 'string') {
        imageRule.exclude = /\.svg$/i;
      }

      rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: { dimensions: false },
          },
        ],
      });
    }

    return config;
  },
};

export default config;
