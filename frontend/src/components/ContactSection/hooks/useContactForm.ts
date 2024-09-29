import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { contactFormSchema } from '@shared/types';

const useContactForm = () => {
    const [editorContent, setEditorContent] = useState<string>('');
    const [previewContent, setPreviewContent] = useState<string>('');

    const form = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: '',
            email: '',
            message: ''
        }
    });

    useEffect(() => {
        form.setValue('message', previewContent, {
            shouldValidate: form.formState.isSubmitted && !form.formState.isSubmitSuccessful,
            shouldDirty: true
        });
    }, [previewContent, form]);

    const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
        try {
            const response = await fetch('/api/email', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Failed to send email');
            }
            form.reset();
            toast({
                title: 'Message Sent!',
                description: "I'll be in touch ASAP 🥳"
            });
            setEditorContent('');
            setPreviewContent('');
        } catch (error) {
            console.error(error);
        }
    };

    return {
        form,
        onSubmit,
        editorContent,
        setEditorContent,
        previewContent,
        setPreviewContent
    };
};

export { useContactForm };
