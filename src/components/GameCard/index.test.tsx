import { fireEvent, screen } from '@testing-library/react';

import { GameCard, GameCardProps } from '@/components/GameCard';
import { renderWithTheme } from '@/utils/tests/helpers';
import theme from '@/styles/theme';

const props: GameCardProps = {
    title: 'Any Title',
    developer: 'Any Developer',
    img: '/any-image',
    price: 'R$ 200,00'
};

describe('<GameCard />', () => {
    it('should render correctly', () => {
        const { container } = renderWithTheme(<GameCard {...props} />);

        expect(screen.getByRole('heading', { name: props.title })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: props.developer })).toBeInTheDocument();
        expect(screen.getByRole('img', { name: props.title })).toHaveAttribute('src', props.img);
        expect(screen.getByLabelText('Add to Wishlist')).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    it('should render price in label ', () => {
        renderWithTheme(<GameCard {...props} />);

        expect(screen.getByText(props.price)).not.toHaveStyle({ textDecoration: 'line-through' });
        expect(screen.getByText(props.price)).toHaveStyle({ backgroundColor: theme.colors.secondary });
    });

    it('should render a line-through in price when promotional', () => {
        const promotionalPrice = 'R$ 150,00';
        renderWithTheme(<GameCard {...props} promotionalPrice={promotionalPrice} />);

        expect(screen.getByText(props.price)).toHaveStyle({ textDecoration: 'line-through' });
        expect(screen.getByText(promotionalPrice)).not.toHaveStyle({ textDecoration: 'line-through' });
        expect(screen.getByText(props.price)).not.toHaveStyle({ backgroundColor: theme.colors.secondary });
    });

    it('should render a filled Favorite icon when favorite is true', () => {
        renderWithTheme(<GameCard {...props} favorite />);
        expect(screen.getByLabelText('Remove from Wishlist')).toBeInTheDocument();
    });

    it('should call onFav method when favorite is clicked', () => {
        const onFav = jest.fn();
        renderWithTheme(<GameCard {...props} favorite onFav={onFav} />);

        fireEvent.click(screen.getAllByRole('button')[0]);

        expect(onFav).toHaveBeenCalled();
    });

    it('should render a Ribbon', () => {
        renderWithTheme(<GameCard {...props} ribbon="Any Text Ribbon" />);

        const ribbon = screen.getByText('Any Text Ribbon');

        expect(ribbon).toBeInTheDocument();
        expect(ribbon).toHaveStyle({ backgroundColor: theme.colors.primary });
        expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: theme.font.sizes.xsmall });
    });
});
