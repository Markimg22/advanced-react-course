import { StoryObj, Meta } from '@storybook/react';

import { Ribbon, RibbonProps } from '@/components/Ribbon';

export default {
    title: 'Ribbon',
    component: Ribbon,
    argTypes: {
        children: {
            control: 'text'
        }
    },
    args: {
        color: 'primary',
        children: 'Any Text',
        size: 'normal'
    }
} as Meta<RibbonProps>;

export const Default: StoryObj<typeof Ribbon> = {
    decorators: [
        (Story) => (
            <div style={{ backgroundColor: '#888', width: '40rem', height: '25rem', position: 'relative' }}>
                <Story />
            </div>
        )
    ]
};
