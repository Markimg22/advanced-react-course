import { StoryObj, Meta } from '@storybook/react';
import styled from 'styled-components';

import { Slider, SliderProps } from '@/components/Slider';

const Slide = styled.div`
    background: gray;
    width: 30rem;
    padding: 10rem 0;
    border: 0.1rem solid red;
    color: white;
    text-align: center;
`;

export default {
    title: 'Slider',
    component: Slider,
    argTypes: {
        children: { control: false }
    },
    decorators: [
        (_, context) => (
            <Slider settings={context.args.settings}>
                <Slide>1</Slide>
                <Slide>2</Slide>
                <Slide>3</Slide>
                <Slide>4</Slide>
                <Slide>5</Slide>
            </Slider>
        )
    ]
} as Meta<SliderProps>;

export const Horizontal: StoryObj<typeof Slider> = {
    args: {
        settings: {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToScroll: 1,
            slidesToShow: 3
        }
    }
};

export const Vertical: StoryObj<typeof Slider> = {
    args: {
        settings: {
            vertical: true,
            verticalSwiping: true,
            dots: true,
            infinite: false,
            slidesToShow: 1
        }
    }
};
