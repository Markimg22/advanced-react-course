import 'match-media-mock';
import { screen } from '@testing-library/react';

import { GameCardSlider } from '@/components/GameCardSlider';
import { GameCardProps } from '@/components/GameCard';
import { renderWithTheme } from '@/utils/tests/helpers';
import theme from '@/styles/theme';

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

describe('<GameCardSlider />', () => {
    it('should render with 4 active items', () => {
        const { container } = renderWithTheme(<GameCardSlider items={items} />);
        expect(container.querySelectorAll('.slick-active')).toHaveLength(4);
    });

    it('should render white arrows if color passed', () => {
        renderWithTheme(<GameCardSlider items={items} color="white" />);

        expect(screen.getByLabelText('previous games').parentElement).toHaveStyle({ color: theme.colors.white });
        expect(screen.getByLabelText('next games').parentElement).toHaveStyle({ color: theme.colors.white });
    });
});
