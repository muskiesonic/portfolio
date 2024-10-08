import type { Meta, StoryObj } from '@storybook/react';

import { HeroSection } from '@/components/HeroSection';

const meta = {
    title: 'HeroSection/HeroSection',
    component: HeroSection,
    parameters: {
        layout: 'fullscreen'
    }
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
