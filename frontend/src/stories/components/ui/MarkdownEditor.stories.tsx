import type { Meta, StoryObj } from '@storybook/react';

import { MarkdownEditor } from '@/components/ui/MarkdownEditor';

const meta = {
    title: 'Elements/MarkdownEditor',
    component: MarkdownEditor,
    parameters: {
        layout: 'padded'
    }
} satisfies Meta<typeof MarkdownEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        previewLabel: 'Markdown Preview',
        editorContent: '',
        setEditorContent: () => {},
        setPreviewContent: () => {}
    }
};
