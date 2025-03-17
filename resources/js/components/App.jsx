import React from "react";
import { createRoot } from 'react-dom/client';
import Header from "./header/Header";
import './app_component.css';
import SlideShow from "./slideshow/SlideShow";
export default function App(){
    return(
        <div id="app_component">
            < Header />
            < SlideShow />
        </div>
    );
};
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);