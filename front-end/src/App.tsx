import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "../public/index.css"
import ServerChannels from './components/server-channels';
import FriendsList from './components/friends-list';

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
            <div className='h-screen bg-[#313338] flex flex-row'>
                <ServerChannels></ServerChannels>
                <FriendsList></FriendsList>

                
                
            </div> 
        </main>
    )
};

export default App;