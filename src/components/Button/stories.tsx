import { StoryObj, Meta } from '@storybook/react';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';

import { Button, ButtonProps } from '@/components/Button';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        children: { control: 'text' },
        icon: { control: false },
        as: { control: false },
        href: { control: false }
    },
    args: {
        children: 'Buy Now',
        size: 'medium'
    }
} as Meta<ButtonProps>;

export const Default: StoryObj<typeof Button> = {};

export const WithIcon: StoryObj<typeof Button> = {
    args: {
        icon: <AddShoppingCart />
    }
};

export const AsLink: StoryObj<typeof Button> = {
    args: {
        as: 'a',
        href: '/any-link'
    }
};
