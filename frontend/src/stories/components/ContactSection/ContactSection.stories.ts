import type { Meta, StoryObj } from '@storybook/react';

import { ContactSection } from '@/components/ContactSection/ContactSection';

const meta = {
    title: 'ContactSection/ContactSection',
    component: ContactSection,
    parameters: {
        layout: 'padded'
    }
} satisfies Meta<typeof ContactSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
