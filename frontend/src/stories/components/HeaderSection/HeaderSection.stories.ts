import type { Meta, StoryObj } from '@storybook/react';

import { HeaderSection } from '@/components/HeaderSection';

const meta = {
    title: 'HeaderSection/HeaderSection',
    component: HeaderSection,
    parameters: {
        layout: 'fullscreen'
    }
} satisfies Meta<typeof HeaderSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
