import { Banner, BannerProps } from '@/components/Banner';
import { Slider, SliderSettins } from '@/components/Slider';

import * as S from './styles';

export type BannerSliderProps = {
    items: BannerProps[];
};

const settings: SliderSettins = {
    dots: true,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    infinite: false,
    responsive: [
        {
            breakpoint: 1170,
            settings: {
                vertical: false,
                verticalSwiping: false
            }
        }
    ]
};

export function BannerSlider({ items }: BannerSliderProps): JSX.Element {
    return (
        <S.Wrapper>
            <Slider settings={settings}>
                {items.map((item, index) => (
                    <Banner key={index} {...item} />
                ))}
            </Slider>
        </S.Wrapper>
    );
}
