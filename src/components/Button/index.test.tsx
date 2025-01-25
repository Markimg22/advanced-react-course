import { screen } from '@testing-library/react';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';

import { Button } from '@/components/Button';
import { renderWithTheme } from '@/utils/tests/helpers';

describe('<Button />', () => {
    it('should render the medium size by default', () => {
        const { container } = renderWithTheme(<Button>Any Text</Button>);

        expect(screen.getByRole('button', { name: /Any Text/i })).toHaveStyle({
            height: '4rem',
            padding: '0.8rem 3.2rem',
            'font-size': '1.4rem'
        });

        expect(container.firstChild).toMatchSnapshot();
    });

    it('should render the small size', () => {
        renderWithTheme(<Button size="small">Any Text</Button>);
        expect(screen.getByRole('button', { name: /Any Text/i })).toHaveStyle({
            height: '3rem',
            'font-size': '1.2rem'
        });
    });

    it('should render the large size', () => {
        renderWithTheme(<Button size="large">Any Text</Button>);
        expect(screen.getByRole('button', { name: /Any Text/i })).toHaveStyle({
            height: '5rem',
            padding: '0.8rem 4.8rem',
            'font-size': '1.6rem'
        });
    });

    it('should render a fullWidth version', () => {
        renderWithTheme(<Button $fullWidth>Any Text</Button>);
        expect(screen.getByRole('button', { name: /Any Text/i })).toHaveStyle({
            width: '100%'
        });
    });

    it('should render an icon version', () => {
        renderWithTheme(<Button icon={<AddShoppingCart data-testid="icon" />}>Any Text</Button>);

        expect(screen.getByText(/Any Text/i)).toBeInTheDocument();
        expect(screen.getByTestId('icon')).toBeInTheDocument();
    });

    it('should render Button as link', () => {
        renderWithTheme(
            <Button as="a" href="/any-link">
                Any Text
            </Button>
        );

        expect(screen.getByRole('link', { name: /any text/i })).toHaveAttribute('href', '/any-link');
    });
});
