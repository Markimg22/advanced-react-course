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
});
