import React from "react";
import { createRoot } from 'react-dom/client';
import Header from "./header/Header";
import './app_component.css';
export default function App(){
    return(
        <div id="app_component">
            < Header />
        </div>
    );
};
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);