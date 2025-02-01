import { StoryObj, Meta } from '@storybook/react';

import { Highlight, HightlightProps } from '@/components/Highlight';

export default {
    title: 'Highlight',
    component: Highlight,
    argTypes: {
        buttonLink: { control: false },
        $backgroundImage: { control: false },
        $floatImage: { control: false }
    },
    args: {
        title: 'Any Title',
        subtitle: 'Any Subtitle',
        buttonLabel: 'Any Button Label',
        buttonLink: '/any-link',
        $backgroundImage: '/img/red-dead-img.jpg',
        alignment: 'right'
    },
    decorators: [
        (Story) => (
            <div style={{ maxWidth: '104rem' }}>
                <Story />
            </div>
        )
    ]
} as Meta<HightlightProps>;

export const Default: StoryObj<typeof Highlight> = {};

export const WithFloatImage: StoryObj<typeof Highlight> = {
    args: {
        $floatImage: '/img/red-dead-float.png'
    }
};
