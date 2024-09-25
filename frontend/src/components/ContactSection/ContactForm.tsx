import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/Form';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { MarkdownEditor } from '../ui/MarkdownEditor';
import { useEffect, useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const contactFormSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    message: z.string().min(3)
});

export interface ContactFormProps {
    className?: string;
}

function ContactForm({ className }: ContactFormProps) {
    const [message, setMessage] = useState<string>('');

    const form = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: '',
            email: '',
            message: ''
        }
    });

    useEffect(() => {
        form.setValue('message', message);
    }, [message, form]);

    function onMessageChange(message: string | undefined) {
        setMessage(message || '');
    }

    function onSubmit(values: z.infer<typeof contactFormSchema>) {
        console.log(values);
        toast({
            title: 'Success!',
            description: 'Email successfully sent.'
        });
    }

    return (
        <div className={cn(className)}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Name..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Email address..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <MarkdownEditor
                                        previewLabel="Email Preview"
                                        onEditorChange={onMessageChange}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Send Message</Button>
                </form>
            </Form>
        </div>
    );
}

export { ContactForm };
