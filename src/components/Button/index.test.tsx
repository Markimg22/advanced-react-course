import { screen } from '@testing-library/react';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';

import { Button } from '@/components/Button';
import { renderWithTheme } from '@/utils/tests/helpers';
import theme from '@/styles/theme';

describe('<Button />', () => {
    it('should render the medium size by default', () => {
        const { container } = renderWithTheme(<Button>Any Text</Button>);

        expect(screen.getByRole('button', { name: 'Any Text' })).not.toHaveStyle({ width: '100%' });
        expect(screen.getByRole('button', { name: 'Any Text' })).toHaveStyle({
            height: '4rem',
            padding: `${theme.spacings.xxsmall} ${theme.spacings.medium}`,
            fontSize: theme.font.sizes.small
        });

        expect(container.firstChild).toMatchSnapshot();
    });

    it('should render the small size', () => {
        renderWithTheme(<Button size="small">Any Text</Button>);

        expect(screen.getByRole('button', { name: 'Any Text' })).toHaveStyle({
            height: '3rem',
            fontSize: theme.font.sizes.xsmall
        });
    });

    it('should render the large size', () => {
        renderWithTheme(<Button size="large">Any Text</Button>);

        expect(screen.getByRole('button', { name: 'Any Text' })).toHaveStyle({
            height: '5rem',
            padding: `${theme.spacings.xxsmall} ${theme.spacings.xlarge}`,
            fontSize: theme.font.sizes.medium
        });
    });

    it('should render a fullWidth version', () => {
        renderWithTheme(<Button $fullWidth>Any Text</Button>);
        expect(screen.getByRole('button', { name: 'Any Text' })).toHaveStyle({ width: '100%' });
    });

    it('should render a normal size when fullWidth explicitly passed as false', () => {
        renderWithTheme(<Button $fullWidth={false}>Any Text</Button>);
        expect(screen.getByRole('button', { name: 'Any Text' })).not.toHaveStyle({ width: '100%' });
    });

    it('should render an icon version', () => {
        renderWithTheme(<Button icon={<AddShoppingCart data-testid="icon" />}>Any Text</Button>);
        expect(screen.getByTestId('icon')).toBeInTheDocument();
    });

    it('should not render an icon when not provided', () => {
        renderWithTheme(<Button>Any Text</Button>);
        expect(screen.queryByTestId('icon')).not.toBeInTheDocument();
    });

    it('should not render an icon when explicitly passed as null', () => {
        renderWithTheme(<Button icon={null}>Any Text</Button>);
        expect(screen.queryByTestId('icon')).not.toBeInTheDocument();
    });

    it('should render Button as link', () => {
        renderWithTheme(
            <Button as="a" href="/any-link">
                Any Text
            </Button>
        );

        expect(screen.getByRole('link', { name: 'Any Text' })).toHaveAttribute('href', '/any-link');
    });
});
