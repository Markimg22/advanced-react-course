import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

import * as S from './styles';

type ButtonTypes = AnchorHTMLAttributes<HTMLAnchorElement> | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
    size?: 'small' | 'medium' | 'large';
    $fullWidth?: boolean;
    icon?: React.ReactNode;
    as?: React.ElementType;
} & ButtonTypes;

export function Button({ children, size = 'medium', $fullWidth = false, icon, ...props }: ButtonProps): JSX.Element {
    return (
        <S.Wrapper size={size} $fullWidth={$fullWidth} $hasIcon={!!icon} {...props}>
            {!!icon && icon}
            {!!children && <span>{children}</span>}
        </S.Wrapper>
    );
}
