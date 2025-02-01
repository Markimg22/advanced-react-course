import { StoryObj, Meta } from '@storybook/react';

import { Banner, BannerProps } from '@/components/Banner';

export default {
    title: 'Banner',
    component: Banner,
    argTypes: {
        img: {
            control: false
        }
    },
    parameters: {
        layout: 'fullscreen'
    }
} as Meta<BannerProps>;

export const Default: StoryObj<typeof Banner> = {
    args: {
        img: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_640.jpg',
        title: 'Defy death',
        subtitle: 'Play the new <strong>CrashLands</strong> season',
        buttonLabel: 'Buy now',
        buttonLink: '/games/defy-death'
    }
};
