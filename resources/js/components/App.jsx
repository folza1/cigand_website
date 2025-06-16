import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Header from "./header/Header";
import "./app_component.css";
import SlideShow from "./slideshow/SlideShow";
import Navbar from "./navbar/Navbar";
import MainContent from "./main_content/MainContent";
import { scrollToOutlet } from "./utils/scrollToOutlet";
import Footer from "./footer/Footer";
import Koszonto from "./contents/koszonto_conts/Koszonto";
import Fooldal from "./contents/fooldal_conts/Fooldal";
import News from "./contents/news_conts/News";
import Foldrajz from "./contents/foldrajz_conts/Foldrajz";
import Tortenete from "./contents/tortenete_conts/Tortenete";
import Heraldika from "./contents/heraldika_conts/Heraldika";
import Allas from "./contents/allas_conts/Allas";
import Haziorvosok from "./contents/haziorvosok_conts/Haziorvosok";
import Fogorvos from "./contents/fogorvos_conts/Fogorvos";
import OrvosiUgyelet from "./contents/orvosi_ugyelet_conts/OrvosiUgyelet";
import VedonoiSzolgalat from "./contents/vedonoi_szolgalat/VedonoiSzolgalat";
import Ambulancia from "./contents/ambulancia_conts/Ambulancia";
import Muzeumporta from "./contents/muzeumporta_conts/Muzeumporta";
import MuvelodesiHaz from "./contents/muvelodesi_haz_conts/MuvelodesiHaz";
import Konyvtar from "./contents/konyvtar_conts/Konyvtar";
import Polgarmester from "./contents/polgarmester_conts/Polgarmester";
import Jegyzo from "./contents/jegyzo_conts/Jegyzo";
import Alpolgarmester from "./contents/alpolgarmester_conts/Alpolgarmester";
import Titkarsag from "./contents/titkarsag_conts/Titkarsag";
import HatosagiIgazgatasi from "./contents/hatosagi_ig_osztaly_conts/HatosagiIgazgatasi";
import Varosfejlesztesi from "./contents/varosfejlesztesi_conts/Varosfejlesztesi";
import PenzugyiOsztaly from "./contents/penzugyi_osztaly_conts/PenzugyiOsztaly";
import Kepviselok from "./contents/kepviselok_conts/Kepviselok";
import RendeletTervezetek from "./contents/rendelet_tervezetek_conts/RendeletTervezetek";
import Iskolakonyha from "./contents/iskolakonyha_conts/Iskolakonyha";
import TestuletiUlesek from "./contents/testuleti_ulesek_conts/TestuletiUlesek";
import HVIHatarozatok from "./contents/helyi_valasztasi_iroda_conts/HVIHatarozatok";
import HatarozatokRendeletek from "./contents/hatarozatok_rendeletek_conts/HatarozatokRendeletek";
import RNO from "./contents/rno_conts/RNO";
import Ovodamuzeum from "./contents/ovodamuzeum_conts/Ovodamuzeum";
import Telefonszamok from "./contents/telefonszamok_conts/Telefonszamok";
import Vadaszat from "./contents/vadaszat_conts/Vadaszat";
import Turazas from "./contents/turazas_conts/Turazas";
import AltalanosIskola from "./contents/altalanos_iskola_conts/AltalanosIskola";
import Ovoda from "./contents/ovoda_conts/Ovoda";
import ZemplenagardOktatas from "./contents/zemplenagard_oktatas_conts/ZemplenagardOktatas";
import RevleanyvarOktatas from "./contents/revleanyvar_oktatas_conts/RevleanyvarOktatas";
import Horgaszat from "./contents/horgaszat_conts/Horgaszat";
import Reformatus from "./contents/reformatus_conts/Reformatus";
import Katolikus from "./contents/katolikus_conts/Katolikus";
import Tajhaz from "./contents/tajhaz_conts/Tajhaz";
import Szabadidokozpont from "./contents/szabadidokozpont_conts/Szabadidokozpont";
import Kismufuves from "./contents/kis_mufuves_conts/Kismufuves";
import Nagymufuves from "./contents/nagymufuves_conts/Nagymufuves";
import Labdarugo from "./contents/labdarugo_conts/Labdarugo";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div id="app_component">
                            <Header />
                            <Navbar />
                            <SlideShow />
                            <MainContent />
                            <Footer />
                        </div>
                    }
                >
                    {/* Itt rendeljük hozzá a különböző aloldalakat */}
                    <Route path="/news" element={<News />} />
                    <Route path="/" element={<Fooldal />} />

                    <Route path="/koszonto" element={<Koszonto />} />
                    <Route path="/foldrajz" element={<Foldrajz />} />
                    <Route path="/tortenete" element={<Tortenete />} />
                    <Route path="/heraldika" element={<Heraldika />} />
                    <Route path="/allas" element={<Allas />} />

                    <Route path="/haziorvosok" element={<Haziorvosok />} />
                    <Route path="/fogorvos" element={<Fogorvos />} />
                    <Route path="/orvosi_ugyelet" element={<OrvosiUgyelet />} />
                    <Route
                        path="/vedonoi_szolgalat"
                        element={<VedonoiSzolgalat />}
                    />
                    <Route path="/ambulancia" element={<Ambulancia />} />

                    {/* Kultúra */}
                    <Route path="/muzeumporta" element={<Muzeumporta />} />
                    <Route path="/muvelodesi_haz" element={<MuvelodesiHaz />} />
                    <Route path="/konyvtar" element={<Konyvtar />} />
                    <Route path="/ovodamuzeum" element={<Ovodamuzeum />} />
                    <Route path="/tajhaz" element={<Tajhaz />} />

                    {/* Sport */}
                    <Route
                        path="/szabadidokozpont"
                        element={<Szabadidokozpont />}
                    />
                    <Route path="/kismufuves" element={<Kismufuves />} />
                    <Route path="/nagymufuves" element={<Nagymufuves />} />
                    <Route path="/labdarugo" element={<Labdarugo />} />

                    <Route path="/polgarmester" element={<Polgarmester />} />
                    <Route path="/jegyzo" element={<Jegyzo />} />
                    <Route
                        path="/alpolgarmester"
                        element={<Alpolgarmester />}
                    />
                    <Route path="/titkarsag" element={<Titkarsag />} />
                    <Route
                        path="/hatosagi_igazgatasi"
                        element={<HatosagiIgazgatasi />}
                    />

                    <Route
                        path="/varosfejlesztesi"
                        element={<Varosfejlesztesi />}
                    />

                    <Route
                        path="/penzugyi_osztaly"
                        element={<PenzugyiOsztaly />}
                    />

                    {/* Képviselő Testület */}
                    <Route path="/kepviselok" element={<Kepviselok />} />
                    <Route
                        path="/testuleti_ulesek"
                        element={<TestuletiUlesek />}
                    />
                    <Route
                        path="/rendelet_tervezetek"
                        element={<RendeletTervezetek />}
                    />
                    <Route
                        path="/hatarozatok_rendeletek"
                        element={<HatarozatokRendeletek />}
                    />

                    {/* Oktatás */}
                    <Route
                        path="/zemplenagard_oktatas"
                        element={<ZemplenagardOktatas />}
                    />

                    <Route
                        path="/revleanyvar_oktatas"
                        element={<RevleanyvarOktatas />}
                    />

                    <Route path="/ovoda" element={<Ovoda />} />

                    <Route path="/iskolakonyha" element={<Iskolakonyha />} />
                    <Route
                        path="/altalanos_iskola"
                        element={<AltalanosIskola />}
                    />

                    {/* Egyéb */}
                    <Route
                        path="/hvi_hatarozatok"
                        element={<HVIHatarozatok />}
                    />
                    <Route path="/telefonszamok" element={<Telefonszamok />} />

                    <Route path="/rno" element={<RNO />} />

                    {/* Szabadidő */}
                    <Route path="/vadaszat" element={<Vadaszat />} />
                    <Route path="/turazas" element={<Turazas />} />
                    <Route path="/horgaszat" element={<Horgaszat />} />
                    <Route path="/reformatus" element={<Reformatus />} />
                    <Route path="/katolikus" element={<Katolikus />} />

                    <Route
                        path="/szechenyi2020"
                        element={
                            <div>
                                <Link onClick={scrollToOutlet} to="/projekt1">
                                    Projekt Link
                                </Link>
                            </div>
                        }
                    />
                    <Route
                        path="/projekt1"
                        element={
                            <div>
                                <Link onClick={scrollToOutlet} to="/projekt1.1">
                                    Projekt 1.1
                                </Link>
                            </div>
                        }
                    />
                    <Route
                        path="/projekt1.1"
                        element={<div>Projekt 1.1</div>}
                    />
                    {/* Más aloldalak, ha szükséges */}
                </Route>
            </Routes>
        </Router>
    );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
