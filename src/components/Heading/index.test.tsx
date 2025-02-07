import { screen } from '@testing-library/react';

import { renderWithTheme } from '@/utils/tests/helpers';
import { Heading } from '@/components/Heading';
import theme from '@/styles/theme';

describe('<Heading />', () => {
    it('should render a white heading by default', () => {
        renderWithTheme(<Heading>Won Games</Heading>);
        expect(screen.getByRole('heading', { name: 'Won Games' })).toHaveStyle({ color: theme.colors.white });
    });

    it('should render a black heading when color is passed', () => {
        renderWithTheme(<Heading color="black">Won Games</Heading>);
        expect(screen.getByRole('heading', { name: 'Won Games' })).toHaveStyle({ color: theme.colors.black });
    });

    it('should render a heading with a line to the left side', () => {
        renderWithTheme(<Heading $lineLeft>Won Games</Heading>);

        expect(screen.getByRole('heading', { name: 'Won Games' })).toHaveStyle({
            borderLeft: `0.7rem solid ${theme.colors.primary}`
        });
    });

    it('should render a heading with a line at the bottom', () => {
        renderWithTheme(<Heading $lineBottom>Won Games</Heading>);

        expect(screen.getByRole('heading', { name: 'Won Games' })).toHaveStyleRule(
            'border-bottom',
            `0.5rem solid ${theme.colors.primary}`,
            {
                modifier: '::after'
            }
        );
    });

    it('should render a heading with a small size', () => {
        renderWithTheme(<Heading size="small">Won Games</Heading>);

        expect(screen.getByRole('heading', { name: 'Won Games' })).toHaveStyle({ fontSize: theme.font.sizes.medium });
        expect(screen.getByRole('heading', { name: 'Won Games' })).toHaveStyleRule('width', '3rem', { modifier: '::after' });
    });

    it('should render a heading with a primary line color', () => {
        renderWithTheme(
            <Heading $lineColor="primary" $lineLeft $lineBottom>
                Won Games
            </Heading>
        );

        const heading = screen.getByRole('heading', { name: 'Won Games' });

        expect(heading).toHaveStyle({ borderLeft: `0.7rem solid ${theme.colors.primary}` });
        expect(heading).toHaveStyleRule('border-bottom', `0.5rem solid ${theme.colors.primary}`, { modifier: '::after' });
    });

    it('should render a heading with a secondary line color', () => {
        renderWithTheme(
            <Heading $lineColor="secondary" $lineLeft $lineBottom>
                Won Games
            </Heading>
        );

        const heading = screen.getByRole('heading', { name: 'Won Games' });

        expect(heading).toHaveStyle({ borderLeft: `0.7rem solid ${theme.colors.secondary}` });
        expect(heading).toHaveStyleRule('border-bottom', `0.5rem solid ${theme.colors.secondary}`, { modifier: '::after' });
    });
});
