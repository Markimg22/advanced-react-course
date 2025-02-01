import { StoryObj, Meta } from '@storybook/react';

import { Banner, BannerProps } from '@/components/Banner';

export default {
    title: 'Banner',
    component: Banner,
    argTypes: {
        img: {
            control: false
        },
        ribbon: {
            type: 'string'
        }
    },
    parameters: {
        layout: 'fullscreen'
    },
    args: {
        img: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_640.jpg',
        title: 'Defy death',
        subtitle: 'Play the new <strong>CrashLands</strong> season',
        buttonLabel: 'Buy now',
        buttonLink: '/games/defy-death'
    },
    decorators: [
        (Story) => (
            <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
                <Story />
            </div>
        )
    ]
} as Meta<BannerProps>;

export const Default: StoryObj<typeof Banner> = {
    argTypes: {
        ribbon: { control: false },
        ribbonColor: { control: false },
        ribbonSize: { control: false }
    }
};

export const WithRibbon: StoryObj<typeof Banner> = {
    args: {
        ribbon: 'Any Text',
        ribbonColor: 'primary',
        ribbonSize: 'normal'
    }
};
