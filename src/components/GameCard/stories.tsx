import { StoryObj, Meta } from '@storybook/react';

import { GameCard, GameCardProps } from '@/components/GameCard';

export default {
    title: 'GameCard',
    component: GameCard,
    argTypes: {
        onFav: { action: 'clicked' },
        ribbon: { type: 'string' }
    },
    args: {
        title: 'Any Title',
        developer: 'Any Developer',
        img: '/img/red-dead-img.jpg',
        price: 'R$ 200,00',
        promotionalPrice: 'R$ 150,00',
        favorite: false
    },
    decorators: [
        (Story) => (
            <div style={{ width: '30rem' }}>
                <Story />
            </div>
        )
    ]
} as Meta<GameCardProps>;

export const Default: StoryObj<typeof GameCard> = {
    argTypes: {
        ribbon: { control: false },
        ribbonColor: { control: false },
        ribbonSize: { control: false }
    }
};

export const WithRibbon: StoryObj<typeof GameCard> = {
    args: {
        ribbon: 'Any Text',
        ribbonColor: 'primary',
        ribbonSize: 'small'
    }
};
