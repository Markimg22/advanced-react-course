import { StoryObj, Meta } from '@storybook/react';

import { BannerSlider, BannerSliderProps } from '@/components/BannerSlider';
import { BannerProps } from '@/components/Banner';

const items: BannerProps[] = [
    {
        img: '/img/red-dead-img.jpg',
        title: 'Red Dead 1',
        subtitle: 'Play <strong>Red Dead 1</strong>',
        buttonLabel: 'Buy Now',
        buttonLink: '/any-link',
        ribbon: 'Bestselling'
    },
    {
        img: '/img/red-dead-img.jpg',
        title: 'Red Dead 2',
        subtitle: 'Play <strong>Red Dead 2</strong>',
        buttonLabel: 'Buy Now',
        buttonLink: '/any-link'
    },
    {
        img: '/img/red-dead-img.jpg',
        title: 'Red Dead 3',
        subtitle: 'Play <strong>Red Dead 3</strong>',
        buttonLabel: 'Buy Now',
        buttonLink: '/any-link'
    }
];

export default {
    title: 'BannerSlider',
    component: BannerSlider,
    parameters: {
        layout: 'fullscreen',
        backgrounds: {
            default: 'dark'
        }
    },
    args: {
        items: [...items]
    },
    decorators: [
        (Story) => (
            <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
                <Story />
            </div>
        )
    ]
} as Meta<BannerSliderProps>;

export const Default: StoryObj<typeof BannerSlider> = {};
