import { screen } from '@testing-library/react';

import { Banner, BannerProps } from '@/components/Banner';
import { renderWithTheme } from '@/utils/tests/helpers';
import theme from '@/styles/theme';

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

        expect(screen.getByRole('heading', { name: props.title })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: props.subtitle })).toBeInTheDocument();
        expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument();

        expect(container.firstChild).toMatchSnapshot();
    });

    it('should render a Ribbon', () => {
        renderWithTheme(<Banner {...props} ribbon="Any Text Ribbon" ribbonColor="secondary" ribbonSize="small" />);

        const ribbon = screen.getByText('Any Text Ribbon');

        expect(ribbon).toBeInTheDocument();
        expect(ribbon).toHaveStyle({ backgroundColor: theme.colors.secondary });
        expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: theme.font.sizes.xsmall });
    });
});
