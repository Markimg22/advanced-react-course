import { fireEvent, screen } from '@testing-library/react';

import { Menu } from '@/components/Menu';
import { renderWithTheme } from '@/utils/tests/helpers';

describe('<Menu />', () => {
    it('should render the menu', () => {
        renderWithTheme(<Menu />);

        expect(screen.getByLabelText('Open Menu')).toBeInTheDocument();
        expect(screen.getByLabelText('Search')).toBeInTheDocument();
        expect(screen.getByLabelText('Open Shopping Cart')).toBeInTheDocument();
        expect(screen.getByRole('img', { name: 'Won Games' })).toBeInTheDocument();
    });

    it('should handle the open/close mobile menu', () => {
        renderWithTheme(<Menu />);

        const fullMenuElement = screen.getByRole('navigation', { hidden: true });

        expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
        expect(fullMenuElement).toHaveStyle({ opacity: 0 });

        fireEvent.click(screen.getByLabelText('Open Menu'));

        expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false');
        expect(fullMenuElement).toHaveStyle({ opacity: 1 });

        fireEvent.click(screen.getByLabelText('Close Menu'));

        expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
        expect(fullMenuElement).toHaveStyle({ opacity: 0 });
    });

    it('should show register box when logged out', () => {
        renderWithTheme(<Menu />);

        expect(screen.queryByText('My Account')).not.toBeInTheDocument();
        expect(screen.queryByText('Wishlist')).not.toBeInTheDocument();
        expect(screen.getByText('Log in now')).toBeInTheDocument();
        expect(screen.getByText('Sign Up')).toBeInTheDocument();
    });

    it('should show wishlist and account when logged in', () => {
        renderWithTheme(<Menu username="Any Username" />);

        expect(screen.getByText('My Account')).toBeInTheDocument();
        expect(screen.getByText('Wishlist')).toBeInTheDocument();
        expect(screen.queryByText('Log in now')).not.toBeInTheDocument();
        expect(screen.queryByText('Sign Up')).not.toBeInTheDocument();
    });
});
