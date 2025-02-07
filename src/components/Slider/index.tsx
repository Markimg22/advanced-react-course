import SlickSlider, { Settings } from 'react-slick';

import * as S from './styles';

export type SliderSettins = Settings;

export type SliderProps = {
    children: React.ReactNode;
    settings: SliderSettins;
};

export function Slider({ children, settings }: SliderProps): JSX.Element {
    return (
        <S.Wrapper>
            <SlickSlider {...settings}>{children}</SlickSlider>
        </S.Wrapper>
    );
}
