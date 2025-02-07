import { Container } from '@/components/Container';
import { renderWithTheme } from '@/utils/tests/helpers';
import theme from '@/styles/theme';

describe('<Container />', () => {
    it('should render correctly', () => {
        const { container } = renderWithTheme(
            <Container>
                <span>Won Games</span>
            </Container>
        );

        expect(container.firstChild).toHaveStyleRule('max-width', theme.grid.container);
        expect(container.firstChild).toMatchSnapshot();
    });
});
