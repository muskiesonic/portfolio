import { Dispatch, MutableRefObject, SetStateAction, useEffect, useRef } from 'react';
import Markdown from 'marked-react';
import { cn } from '@/lib/utils';

export interface MarkdownEditorProps {
    className?: string;
    previewContent: string;
    setPreviewContent: Dispatch<SetStateAction<string>>;
    label?: string;
}

function MarkdownPreview({ className, previewContent, setPreviewContent, label }: MarkdownEditorProps) {
    const contentRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            const content = contentRef.current.innerHTML;
            setPreviewContent(content);
        }
    }, [previewContent, setPreviewContent]);

    return (
        <div className={cn(className)}>
            {label ? <h3>{label}</h3> : ''}
            <div ref={contentRef}>
                <Markdown value={previewContent} />
            </div>
        </div>
    );
}

export { MarkdownPreview };
