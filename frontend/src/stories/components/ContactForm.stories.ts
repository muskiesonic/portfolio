import type { Meta, StoryObj } from '@storybook/react';

import { ContactForm } from '@/components/ContactForm';

const meta = {
    title: 'Components/ContactForm',
    component: ContactForm,
    parameters: {
        layout: 'padded'
    }
} satisfies Meta<typeof ContactForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
