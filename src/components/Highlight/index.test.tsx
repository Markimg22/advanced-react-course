/* eslint-disable quotes */
import { screen } from '@testing-library/react';

import { renderWithTheme } from '@/utils/tests/helpers';
import { Highlight, HightlightProps } from '@/components/Highlight';
import * as S from '@/components/Highlight/styles';

const props: HightlightProps = {
    title: 'Heading 1',
    subtitle: 'Heading 2',
    buttonLabel: 'Buy Now',
    buttonLink: '/any-link',
    $backgroundImage: '/img/red-dead-img.jpg'
};

describe('<Highlight />', () => {
    it('should render headings and button', () => {
        renderWithTheme(<Highlight {...props} />);

        expect(screen.getByRole('heading', { name: props.title })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: props.subtitle })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: props.buttonLabel })).toBeInTheDocument();
    });

    it('should render background image', () => {
        const { container } = renderWithTheme(<Highlight {...props} />);
        expect(container.firstChild).toHaveStyle({ backgroundImage: `url(${props.$backgroundImage})` });
    });

    it('should render float image', () => {
        renderWithTheme(<Highlight {...props} $floatImage="/float-image.png" />);
        expect(screen.getByRole('img', { name: props.title })).toHaveAttribute('src', '/float-image.png');
    });

    it('should render align right by default', () => {
        const { container } = renderWithTheme(<Highlight {...props} />);

        expect(container.firstChild).toHaveStyleRule('grid-template-areas', "'floatImage content'");
        expect(container.firstChild).toHaveStyleRule('grid-template-columns', '1.3fr 2fr');
        expect(container.firstChild).toHaveStyleRule('text-align', 'right', { modifier: `${S.Content}` });
    });

    it('should render align left', () => {
        const { container } = renderWithTheme(<Highlight {...props} alignment="left" />);

        expect(container.firstChild).toHaveStyleRule('grid-template-areas', "'content floatImage'");
        expect(container.firstChild).toHaveStyleRule('grid-template-columns', '2fr 1.3fr');
        expect(container.firstChild).toHaveStyleRule('text-align', 'left', { modifier: `${S.Content}` });
        expect(container.firstChild).toHaveStyleRule('justify-self', 'end', { modifier: `${S.FloatImage}` });
    });
});
