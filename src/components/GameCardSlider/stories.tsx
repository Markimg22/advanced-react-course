import { StoryObj, Meta } from '@storybook/react';

import { GameCardSlider, GameCardSliderProps } from '@/components/GameCardSlider';
import { GameCardProps } from '@/components/GameCard';

const items: GameCardProps[] = [
    {
        img: '/img/red-dead-img.jpg',
        title: 'Red Dead 1',
        developer: 'Rockstar Games',
        price: 'R$ 200,00'
    },
    {
        img: '/img/red-dead-img.jpg',
        title: 'Red Dead 2',
        developer: 'Rockstar Games',
        price: 'R$ 200,00',
        promotionalPrice: 'R$ 100,00',
        ribbon: '50% OFF'
    },
    {
        img: '/img/red-dead-img.jpg',
        title: 'Red Dead 3',
        developer: 'Rockstar Games',
        price: 'R$ 300,00'
    },
    {
        img: '/img/red-dead-img.jpg',
        title: 'Red Dead 4',
        developer: 'Rockstar Games',
        price: 'R$ 100,00',
        ribbon: 'Bestselling'
    },
    {
        img: '/img/red-dead-img.jpg',
        title: 'Red Dead 5',
        developer: 'Rockstar Games',
        price: 'R$ 100,00',
        promotionalPrice: 'R$ 50,00'
    }
];

export default {
    title: 'GameCardSlider',
    component: GameCardSlider,
    parameters: {
        layout: 'fullscreen',
        backgrounds: {
            default: 'dark'
        }
    },
    args: {
        items: [...items],
        color: 'black'
    },
    decorators: [
        (Story) => (
            <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
                <Story />
            </div>
        )
    ]
} as Meta<GameCardSliderProps>;

export const Default: StoryObj<typeof GameCardSlider> = {};
