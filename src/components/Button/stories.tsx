import { StoryObj, Meta } from '@storybook/react';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';

import { Button, ButtonProps } from '@/components/Button';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        children: {
            control: 'text'
        },
        icon: {
            control: false
        }
    }
} as Meta<ButtonProps>;

export const Default: StoryObj<typeof Button> = {
    args: {
        children: 'Buy now'
    }
};

export const WithIcon: StoryObj<typeof Button> = {
    args: {
        size: 'small',
        children: 'Buy now',
        icon: <AddShoppingCart />
    }
};

export const AsLink: StoryObj<typeof Button> = {
    args: {
        as: 'a',
        href: '/any-link',
        size: 'large',
        children: 'Buy Now'
    }
};
