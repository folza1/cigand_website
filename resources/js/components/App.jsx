import React from "react";
import { createRoot } from 'react-dom/client';
export default function App(){
    return(
        <div>
            <h1>Hello React! Builded! It is working automatically!</h1>
        </div>
    );
};
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);