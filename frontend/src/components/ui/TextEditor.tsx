import { cn } from '@/lib/utils';
import { Editor } from '@monaco-editor/react';

export interface TextEditorProps {
    className?: string;
    onContentChange: (value: string) => void;
    language: string;
    theme: string;
}

function TextEditor({ className, onContentChange, language, theme = 'vs-dark' }: TextEditorProps) {
    function handleEditorChange(value: string | undefined): void {
        onContentChange(value || '');
    }

    return (
        <div className={cn(className)}>
            <Editor defaultLanguage={language} theme={theme} onChange={handleEditorChange} />
        </div>
    );
}

export { TextEditor };
