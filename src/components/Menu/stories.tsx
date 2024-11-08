import { StoryObj, Meta } from '@storybook/react';

import { Menu, MenuProps } from '@/components/Menu';

export default {
    title: 'Menu',
    component: Menu
} as Meta<MenuProps>;

export const Default: StoryObj<typeof Menu> = {
    parameters: {
        layout: 'fullscreen',
        backgrounds: {
            default: 'dark'
        }
    }
};
