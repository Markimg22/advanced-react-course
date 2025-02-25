import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
    staticDirs: ['../public'],
    stories: ['../src/components/**/stories.tsx'],
    addons: ['@storybook/addon-essentials'],
    framework: {
        name: '@storybook/nextjs',
        options: {}
    },
    webpackFinal: (config) => {
        // TODO: configuração não está funcionando
        config.resolve?.modules?.push(`${process.cwd()}/src`);
        return config;
    }
};

export default config;
