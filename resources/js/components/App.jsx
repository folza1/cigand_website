import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Header from "./header/Header";
import './app_component.css';
import SlideShow from "./slideshow/SlideShow";
import Navbar from "./navbar/Navbar";
import MainContent from "./main_content/MainContent";
import { scrollToOutlet } from './utils/scrollToOutlet';
import Footer from './footer/Footer';
import Koszonto from './contents/koszonto_conts/Koszonto';
import Fooldal from './contents/fooldal_conts/Fooldal';
import News from './contents/news_conts/News';
import Foldrajz from './contents/foldrajz_conts/Foldrajz';
import Tortenete from './contents/tortenete_conts/Tortenete';
import Heraldika from './contents/heraldika_conts/Heraldika';
import Allas from './contents/allas_conts/Allas';

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div id="app_component">
            <Header />
            <Navbar />
            <SlideShow />
            <MainContent />
            <Footer />
          </div>
        }>
          {/* Itt rendeljük hozzá a különböző aloldalakat */}
          <Route path="/news" element={<News />} />
          <Route path="/" element={<Fooldal />} />
          <Route path="/koszonto" element={<Koszonto />} />
          <Route path="/foldrajz" element={<Foldrajz />} />
          <Route path="/tortenete" element={<Tortenete />} />
          <Route path="/heraldika" element={<Heraldika />} />
          <Route path="/allas" element={<Allas />} />
          <Route path="/szechenyi2020" element={<div><Link onClick={scrollToOutlet} to="/projekt1">Projekt Link</Link></div>} />
          <Route path="/projekt1" element={<div><Link onClick={scrollToOutlet} to="/projekt1.1" >Projekt 1.1</Link></div>} />
          <Route path="/projekt1.1" element={<div>Projekt 1.1</div>} />
          {/* Más aloldalak, ha szükséges */}
        </Route>
      </Routes>
    </Router>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
