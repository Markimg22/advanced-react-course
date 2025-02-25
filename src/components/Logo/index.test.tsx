import { screen } from '@testing-library/react';

import { Logo } from '@/components/Logo';
import { renderWithTheme } from '@/utils/tests/helpers';
import theme from '@/styles/theme';

describe('<Logo />', () => {
    it('should render a white label by default', () => {
        renderWithTheme(<Logo />);
        expect(screen.getByLabelText('Won Games').parentElement).toHaveStyle({ color: theme.colors.white });
    });

    it('should render a black label when color is passed', () => {
        renderWithTheme(<Logo color="black" />);
        expect(screen.getByLabelText('Won Games').parentElement).toHaveStyle({ color: theme.colors.black });
    });

    it('should render a normal logo when size is default', () => {
        renderWithTheme(<Logo />);
        expect(screen.getByLabelText('Won Games').parentElement).toHaveStyle({ width: '11rem' });
    });

    it('should render a bigger logo', () => {
        renderWithTheme(<Logo size="large" />);
        expect(screen.getByLabelText('Won Games').parentElement).toHaveStyle({ width: '20rem' });
    });

    it('should render a bigger logo without text if hideOnMobile', () => {
        renderWithTheme(<Logo $hideOnMobile />);
        expect(screen.getByLabelText('Won Games').parentElement).toHaveStyleRule('width', '5.8rem', {
            media: '(max-width:  768px)'
        });
    });
});
