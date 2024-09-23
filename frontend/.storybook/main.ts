import path from 'path';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-onboarding',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
        '@storybook/addon-themes',
        '@storybook/addon-a11y'
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {}
    },
    viteFinal: async (config) => {
        if (config.resolve?.alias) {
            config.resolve.alias = {
                ...config.resolve.alias,
                '@': path.resolve(__dirname, '../src')
            };
        }

        return config;
    }
};
export default config;
