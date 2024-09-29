import { cn } from '@/lib/utils';
import { Editor } from '@monaco-editor/react';
import { Dispatch, SetStateAction } from 'react';

export interface TextEditorProps {
    className?: string;
    content: string;
    setContent: Dispatch<SetStateAction<string>>;
    language: string;
    theme: string;
}

function TextEditor({ className, content, setContent, language, theme = 'vs-dark' }: TextEditorProps) {
    function handleEditorChange(value: string | undefined): void {
        setContent(value || '');
    }

    return (
        <div className={cn(className)}>
            <Editor defaultLanguage={language} theme={theme} onChange={handleEditorChange} value={content} />
        </div>
    );
}

export { TextEditor };
