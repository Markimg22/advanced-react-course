import { render, screen } from '@testing-library/react';

import { Main } from '@/components/Main';

describe('<Main />', () => {
    it('should render the heading', () => {
        const { container } = render(<Main />);

        expect(screen.getByRole('heading', { name: 'React Avançado' })).toBeInTheDocument();
        expect(container.firstChild).toMatchSnapshot();
    });
});
