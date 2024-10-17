import { PropsWithChildren } from 'react';

import { GlobalStyles } from '@/styles/global';

export function Providers({ children }: PropsWithChildren): JSX.Element {
    return (
        <>
            <GlobalStyles />
            {children}
        </>
    );
}
