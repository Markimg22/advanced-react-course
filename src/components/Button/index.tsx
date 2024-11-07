import * as S from './styles';

export type ButtonProps = {
    children?: React.ReactNode;
    size?: 'small' | 'medium' | 'large';
    $fullWidth?: boolean;
    icon?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export function Button({ children, size = 'medium', $fullWidth = false, icon, ...props }: ButtonProps): JSX.Element {
    return (
        <S.Wrapper size={size} $fullWidth={$fullWidth} $hasIcon={!!icon} {...props}>
            {!!icon && icon}
            {!!children && <span>{children}</span>}
        </S.Wrapper>
    );
}
