import * as S from './styles';

export type RibbonColors = 'primary' | 'secondary';
export type RibbonSizes = 'normal' | 'small';

export type RibbonProps = {
    children: React.ReactNode;
    color?: RibbonColors;
    size?: RibbonSizes;
};

export function Ribbon({ children, color = 'primary', size = 'normal' }: RibbonProps): JSX.Element {
    return (
        <S.Wrapper color={color} size={size}>
            {children}
        </S.Wrapper>
    );
}
