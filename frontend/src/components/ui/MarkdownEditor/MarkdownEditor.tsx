import React, { Dispatch, SetStateAction } from 'react';
import { TextEditor } from '../TextEditor';
import { MarkdownPreview } from './MarkdownPreview';

export interface MarkdownEditorProps extends React.HTMLAttributes<HTMLDivElement> {
    previewLabel?: string;
    editorContent: string;
    setEditorContent: Dispatch<SetStateAction<string>>;
    setPreviewContent: Dispatch<SetStateAction<string>>;
}

const MarkdownEditor = React.forwardRef<HTMLDivElement, MarkdownEditorProps>(
    ({ previewLabel, editorContent, setEditorContent, setPreviewContent }, ref) => {
        return (
            <div ref={ref} className="flex flex-col sm:flex-row w-full gap-4">
                <TextEditor
                    className="w-full sm:w-1/2 h-[300px]"
                    language="markdown"
                    theme="vs-dark"
                    setContent={setEditorContent}
                    content={editorContent}
                />
                <MarkdownPreview
                    className="w-full sm:w-1/2"
                    previewContent={editorContent}
                    setPreviewContent={setPreviewContent}
                    label={previewLabel}
                />
            </div>
        );
    }
);

export { MarkdownEditor };
