import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/Form';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { MarkdownEditor } from '../ui/MarkdownEditor';
import { cn } from '@/lib/utils';
import { useContactForm } from './hooks/useContactForm';

export interface ContactFormProps {
    className?: string;
}

function ContactForm({ className }: ContactFormProps) {
    const { form, onSubmit, editorContent, setEditorContent, setPreviewContent } = useContactForm();

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
                                        editorContent={editorContent}
                                        setEditorContent={setEditorContent}
                                        setPreviewContent={setPreviewContent}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">
                        {form.formState.isSubmitting ? (
                            <div className="h-8 w-8 animate-spin rounded-full border-4 border-muted-foreground border-t-violet-600" />
                        ) : (
                            'Send Message'
                        )}
                    </Button>
                </form>
            </Form>
        </div>
    );
}

export { ContactForm };
