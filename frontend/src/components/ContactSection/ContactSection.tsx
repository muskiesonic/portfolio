import { SectionHeader } from '../ui/SectionHeader';
import { ContactForm } from './ContactForm';

function ContactSection() {
    return (
        <section className="px-4 md:w-[80%] m-auto">
            <SectionHeader
                title="Let's get in touch!"
                subtitle="Hit me up with the form below and I will be in touch ASAP 🍻"
            />
            <div className="m-auto w-full max-w-[1400px] pt-10 md:w-[80%] md:pt-20">
                <ContactForm />
            </div>
        </section>
    );
}

export { ContactSection };
