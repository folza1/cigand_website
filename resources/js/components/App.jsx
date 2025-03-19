import { createRoot } from 'react-dom/client';
import Header from "./header/Header";
import './app_component.css';
import SlideShow from "./slideshow/SlideShow";
import Navbar from "./navbar/Navbar";

export default function App() {

  return (
    <div id="app_component">
      <Header />
      <Navbar />
      <SlideShow />
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
