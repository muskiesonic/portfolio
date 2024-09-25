import { Toaster } from './components/ui/Toaster';
import { ContactSection } from './components/ContactSection/ContactSection';

function App() {
    return (
        <>
            <main>
                <ContactSection />
            </main>
            <Toaster />
        </>
    );
}

export default App;
