import { Button } from '@/components/Button';

import * as S from './styles';

export type HightlightProps = {
    title: string;
    subtitle: string;
    buttonLabel: string;
    buttonLink: string;
    $backgroundImage: string;
    $floatImage?: string;
    alignment?: 'right' | 'left';
};

export function Highlight({
    title,
    subtitle,
    buttonLabel,
    buttonLink,
    $backgroundImage,
    $floatImage,
    alignment = 'right'
}: HightlightProps): JSX.Element {
    return (
        <S.Wrapper $backgroundImage={$backgroundImage} alignment={alignment}>
            {!!$floatImage && <S.FloatImage src={$floatImage} alt={title} />}
            <S.Content>
                <S.Title>{title}</S.Title>
                <S.Subtitle>{subtitle}</S.Subtitle>
                <Button as="a" href={buttonLink}>
                    {buttonLabel}
                </Button>
            </S.Content>
        </S.Wrapper>
    );
}
