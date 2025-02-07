import '@testing-library/jest-dom';
import 'jest-styled-components';

import React from 'react';

// Mock Next Image
jest.mock('next/image', () => ({
    __esModule: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    default: (props: any) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { objectFit, ...rest } = props;
        return React.createElement('img', rest);
    }
}));
