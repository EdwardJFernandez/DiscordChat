import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "../public/index.css"

const rootElement = document.getElementById("root");

const root = createRoot(rootElement!);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
)

function App() {
    return (
        <main>
            <p>Hello Eddie!</p>
            <p>Hello amor ❤️</p>
            <p>☹️</p>
            <div className="h-[200px] bg-lime-500"></div>
        </main>
    )
};

export default App;