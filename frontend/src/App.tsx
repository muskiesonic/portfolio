import { useState } from 'react';
import { Button } from '@/components/ui/button';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="flex flex-col bg-background max-w-md m-auto gap-y-5">
                <Button size="sm" onClick={() => setCount((count) => count + 1)}>
                    up
                </Button>
                <Button size="lg" variant="secondary" onClick={() => setCount((count) => count - 1)}>
                    down
                </Button>
                <p>{count}</p>
            </div>
        </>
    );
}

export default App;
