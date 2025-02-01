import { StoryObj, Meta } from '@storybook/react';

import { Heading, HeadingProps } from '@/components/Heading';

export default {
    title: 'Heading',
    component: Heading,
    argTypes: {
        children: {
            control: 'text'
        }
    },
    args: {
        children: 'Most Populars',
        color: 'black',
        size: 'medium'
    }
} as Meta<HeadingProps>;

export const Default: StoryObj<typeof Heading> = {};
