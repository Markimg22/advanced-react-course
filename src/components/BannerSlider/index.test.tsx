import 'match-media-mock';
import { screen } from '@testing-library/react';

import { BannerSlider } from '@/components/BannerSlider';
import { BannerProps } from '@/components/Banner';
import { renderWithTheme } from '@/utils/tests/helpers';

const items: BannerProps[] = [
    {
        img: '/img/red-dead-img.jpg',
        title: 'Red Dead 1',
        subtitle: 'Play <strong>Red Dead 1</strong>',
        buttonLabel: 'Buy Now',
        buttonLink: '/any-link',
        ribbon: 'Bestselling'
    },
    {
        img: '/img/red-dead-img.jpg',
        title: 'Red Dead 2',
        subtitle: 'Play <strong>Red Dead 2</strong>',
        buttonLabel: 'Buy Now',
        buttonLink: '/any-link'
    }
];

describe('<BannerSlider />', () => {
    it('should render vertical slider', () => {
        const { container } = renderWithTheme(<BannerSlider items={items} />);
        expect(container.querySelector('.slick-vertical')).toBeInTheDocument();
    });

    it('should render with 1 active item', () => {
        const { container } = renderWithTheme(<BannerSlider items={items} />);

        expect(container.querySelectorAll('.slick-slide')).toHaveLength(2);
        expect(container.querySelectorAll('li.slick-active')).toHaveLength(1);

        expect(screen.getByRole('heading', { name: 'Red Dead 1', hidden: false })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Red Dead 2', hidden: true })).toBeInTheDocument();
    });

    it('should render the dots', () => {
        const { container } = renderWithTheme(<BannerSlider items={items} />);
        expect(container.querySelector('.slick-dots')).toBeInTheDocument();
    });
});
