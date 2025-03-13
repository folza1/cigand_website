import React from "react";
import { createRoot } from 'react-dom/client';
export default function App(){
    return(
        <div className="container text-center">
            Hello React! Builded!
        </div>
    );
};
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);