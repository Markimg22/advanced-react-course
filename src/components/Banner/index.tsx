import { Button } from '@/components/Button';

import { Ribbon, RibbonColors, RibbonSizes } from '@/components/Ribbon';

import * as S from './styles';

export type BannerProps = {
    img: string;
    title: string;
    subtitle: string;
    buttonLabel: string;
    buttonLink: string;
    ribbon?: React.ReactNode;
    ribbonSize?: RibbonSizes;
    ribbonColor?: RibbonColors;
};

export function Banner({
    img,
    title,
    subtitle,
    buttonLabel,
    buttonLink,
    ribbon,
    ribbonColor = 'primary',
    ribbonSize = 'normal'
}: BannerProps): JSX.Element {
    return (
        <S.Wrapper>
            <S.Image src={img} role="img" aria-label={title} />
            <S.Caption>
                <S.Title>{title}</S.Title>
                <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
                <Button as="a" href={buttonLink} size="large">
                    {buttonLabel}
                </Button>
            </S.Caption>
            {!!ribbon && (
                <Ribbon color={ribbonColor} size={ribbonSize}>
                    {ribbon}
                </Ribbon>
            )}
        </S.Wrapper>
    );
}
