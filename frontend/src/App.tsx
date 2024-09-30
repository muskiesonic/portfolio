import { Toaster } from './components/ui/Toaster';
import { ContactSection } from './components/ContactSection';
import { HeaderSection } from './components/HeaderSection/HeaderSection';
import { HeroSection } from './components/HeroSection';

function App() {
    return (
        <>
            <main>
                <HeaderSection />
                <HeroSection />
                <ContactSection />
            </main>
            <Toaster />
        </>
    );
}

export default App;
