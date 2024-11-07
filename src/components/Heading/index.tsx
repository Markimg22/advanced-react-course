import * as S from './styles';

export type HeadingProps = {
    children: React.ReactNode;
    color?: 'white' | 'black';
    $lineLeft?: boolean;
    $lineBottom?: boolean;
};

export function Heading({ children, color = 'white', $lineLeft = false, $lineBottom = false }: HeadingProps): JSX.Element {
    return (
        <S.Wrapper color={color} $lineLeft={$lineLeft} $lineBottom={$lineBottom}>
            {children}
        </S.Wrapper>
    );
}
