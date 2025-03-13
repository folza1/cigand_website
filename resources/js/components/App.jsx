import React from "react";
import { createRoot } from 'react-dom/client';
export default function App(){
    return(
        <div>
            Hello React! Builded! It is working automatically!
        </div>
    );
};
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);