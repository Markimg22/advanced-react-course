import { StoryObj, Meta } from '@storybook/react';

import { MediaMatch, MediaMatchProps } from '@/components/MediaMatch';

export default {
    title: 'MediaMatch',
    component: MediaMatch
} as Meta<MediaMatchProps>;

export const Desktop: StoryObj<typeof MediaMatch> = {
    render: () => <MediaMatch $greaterThan="medium">Only on Desktop</MediaMatch>,
    parameters: {
        viewport: {
            defaultViewport: 'desktop'
        }
    }
};

export const Mobile: StoryObj<typeof MediaMatch> = {
    render: () => <MediaMatch $lessThan="medium">Only on Mobile</MediaMatch>,
    parameters: {
        viewport: {
            defaultViewport: 'mobile1'
        }
    }
};
