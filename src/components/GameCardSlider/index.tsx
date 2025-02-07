import { ArrowBackIos as ArrowLeft, ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined';
import { CustomArrowProps } from 'react-slick';

import { Slider, SliderSettins } from '@/components/Slider';
import { GameCard, GameCardProps } from '@/components/GameCard';

import * as S from './styles';

export type GameCardSliderProps = {
    items: GameCardProps[];
    color?: 'white' | 'black';
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SlickCustomArrow = ({ currentSlide, slideCount, children, ...props }: CustomArrowProps & React.PropsWithChildren) => (
    <div {...props}>{children}</div>
);

const settings: SliderSettins = {
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: false,
    lazyLoad: 'ondemand',
    responsive: [
        {
            breakpoint: 1375,
            settings: {
                arrows: false,
                slidesToShow: 3.2
            }
        },
        {
            breakpoint: 1024,
            settings: {
                arrows: false,
                slidesToShow: 2.2
            }
        },
        {
            breakpoint: 570,
            settings: {
                arrows: false,
                slidesToShow: 1.2
            }
        },
        {
            breakpoint: 375,
            settings: {
                arrows: false,
                slidesToShow: 1.1
            }
        }
    ],
    nextArrow: (
        <SlickCustomArrow>
            <ArrowRight aria-label="next games" />
        </SlickCustomArrow>
    ),
    prevArrow: (
        <SlickCustomArrow>
            <ArrowLeft aria-label="previous games" />
        </SlickCustomArrow>
    )
};

export function GameCardSlider({ items, color = 'black' }: GameCardSliderProps): JSX.Element {
    return (
        <S.Wrapper color={color}>
            <Slider settings={settings}>
                {items.map((item, index) => (
                    <GameCard key={index} {...item} />
                ))}
            </Slider>
        </S.Wrapper>
    );
}
