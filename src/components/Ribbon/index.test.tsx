import { screen } from '@testing-library/react';

import { Ribbon } from '@/components/Ribbon';
import { renderWithTheme } from '@/utils/tests/helpers';
import theme from '@/styles/theme';

describe('<Ribbon />', () => {
    it('should render the text correctly', () => {
        const { container } = renderWithTheme(<Ribbon>Best Seller</Ribbon>);

        expect(screen.getByText('Best Seller')).toBeInTheDocument();
        expect(container.firstChild).toMatchSnapshot();
    });

    it('should render with the primary color', () => {
        renderWithTheme(<Ribbon>Best Seller</Ribbon>);
        expect(screen.getByText('Best Seller')).toHaveStyle({ backgroundColor: theme.colors.primary });
    });

    it('should render with the secondary color', () => {
        renderWithTheme(<Ribbon color="secondary">Best Seller</Ribbon>);
        expect(screen.getByText('Best Seller')).toHaveStyle({ backgroundColor: theme.colors.secondary });
    });

    it('should render with the normal size as default', () => {
        renderWithTheme(<Ribbon>Best Seller</Ribbon>);
        expect(screen.getByText('Best Seller')).toHaveStyle({ height: '3.6rem', fontSize: theme.font.sizes.small });
    });

    it('should render with the small size', () => {
        renderWithTheme(<Ribbon size="small">Best Seller</Ribbon>);
        expect(screen.getByText('Best Seller')).toHaveStyle({ height: '2.6rem', fontSize: theme.font.sizes.xsmall });
    });
});
