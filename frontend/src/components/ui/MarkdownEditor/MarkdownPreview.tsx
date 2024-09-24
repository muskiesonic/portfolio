import { MutableRefObject, useEffect, useRef } from 'react';
import Markdown from 'marked-react';
import { cn } from '@/lib/utils';

export interface MarkdownEditorProps {
    className?: string;
    content: string;
    onContentChange: (value: string) => void;
    label?: string;
}

function MarkdownPreview({ className, content, onContentChange, label }: MarkdownEditorProps) {
    const contentRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            const content = contentRef.current.innerHTML;
            onContentChange(content);
        }
    }, [content, onContentChange]);

    return (
        <div className={cn(className)}>
            {label ? <h3>{label}</h3> : ''}
            <div ref={contentRef}>
                <Markdown value={content} />
            </div>
        </div>
    );
}

export { MarkdownPreview };
