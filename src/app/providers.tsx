'use client';

import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '@/styles/global';
import theme from '@/styles/theme';

export function Providers({ children }: PropsWithChildren): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    );
}
