import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.s([ac])ss$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        esModule: true,
                        importLoaders: 1,
                        modules: {
                            namedExport: false,
                            auto: /\.module\.scss$/,
                            localIdentName: '[name]__[local]--[hash:base64:5]',
                        },
                    },
                },
                'sass-loader',
            ],
        });

        return config;
    },
};
export default config;
