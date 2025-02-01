import { screen } from '@testing-library/react';

import { renderWithTheme } from '@/utils/tests/helpers';
import { Footer } from '@/components/Footer';

describe('<Footer />', () => {
    it('should render 4 column topics', () => {
        const { container } = renderWithTheme(<Footer />);

        expect(screen.getByRole('heading', { name: 'Contact us' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Follow us' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Links' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Location' })).toBeInTheDocument();

        expect(container.firstChild).toMatchSnapshot();
    });
});
