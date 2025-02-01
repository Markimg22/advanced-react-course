import { screen } from '@testing-library/react';

import { Banner, BannerProps } from '@/components/Banner';
import { renderWithTheme } from '@/utils/tests/helpers';

const props: BannerProps = {
    title: 'Any Title',
    subtitle: 'Any Subtitle',
    img: 'Any Image',
    buttonLabel: 'Any Button Label',
    buttonLink: 'Any ButtonLink'
};

describe('<Banner />', () => {
    it('should render correctly', () => {
        const { container } = renderWithTheme(<Banner {...props} />);

        expect(screen.getByRole('heading', { name: 'Any Title' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Any Subtitle' })).toBeInTheDocument();
        expect(screen.getByRole('img', { name: 'Any Title' })).toBeInTheDocument();

        expect(container.firstChild).toMatchSnapshot();
    });

    it('should render a Ribbon', () => {
        renderWithTheme(<Banner {...props} ribbon="Any Text Ribbon" ribbonColor="secondary" ribbonSize="small" />);

        const ribbon = screen.getByText('Any Text Ribbon');

        expect(ribbon).toBeInTheDocument();
        expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' });
        expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' });
    });
});
