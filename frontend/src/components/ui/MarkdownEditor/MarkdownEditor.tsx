import { useState } from 'react';
import { TextEditor } from '../TextEditor';
import { MarkdownPreview } from './MarkdownPreview';

export interface MarkdownEditorProps {
    previewLabel?: string;
    onEditorChange?: (value: string | undefined) => void;
}

function MarkdownEditor({ previewLabel, onEditorChange }: MarkdownEditorProps) {
    const [previewContent, setPreviewContent] = useState<string>('');

    function handleEditorChange(value: string | undefined): void {
        setPreviewContent(value || '');
    }

    function handlePreviewChange(value: string | undefined): void {
        if (onEditorChange) {
            onEditorChange(value || '');
        }
    }

    return (
        <div className="flex flex-col sm:flex-row w-full px-4 gap-4">
            <TextEditor
                className="w-full sm:w-1/2 h-[300px]"
                language="markdown"
                theme="vs-dark"
                onContentChange={handleEditorChange}
            />
            <MarkdownPreview
                className="w-full sm:w-1/2"
                content={previewContent}
                onContentChange={handlePreviewChange}
                label={previewLabel}
            />
        </div>
    );
}

export { MarkdownEditor };
