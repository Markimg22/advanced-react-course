import { StoryObj, Meta } from '@storybook/react';

import { Logo, LogoProps } from '@/components/Logo';

export default {
    title: 'Logo',
    component: Logo,
    args: {
        color: 'black',
        size: 'normal'
    }
} as Meta<LogoProps>;

export const Default: StoryObj<typeof Logo> = {};
