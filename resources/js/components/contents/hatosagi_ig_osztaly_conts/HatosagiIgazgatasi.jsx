import HeaderModule from "../modules/HeaderModule";
import ContentContainer from "../modules/ContentContainer";
import "./hatosagi_igazgatasi.css";
import DownloadFile from "../modules/DownloadFile";

export default function HatosagiIgazgatasi() {
    return (
        <>
            <HeaderModule
                breadcrumb={[
                    "Önkormányzat",
                    "Közös Önk. Hivatal",
                    "Hatósági Igazgatási Osztály",
                ]}
            >
                Hatósági Igazgatási Osztály
            </HeaderModule>
            <ContentContainer>
                <div className="hatosagi_igazgatasi_container">
                    <p className="bold align-center">
                        Cigándi Közös Önkormányzati Hivatal
                    </p>
                    <p>Hatósági Igazgatási Osztály</p>
                    <p>3973 Cigánd Fő utca 80.</p>
                    <p>Tel.: 47/534-400</p>
                    <p>cigand@cigand.hu</p>
                    <div className="hatosagi_igazgatasi_img">
                        <img
                            src="/images/middle_content_pics/jegyzo_pics/jegyzo.png"
                            alt="Cigándi jegyző fantomkép"
                        />
                    </div>

                    <p>Dr. Szepesy Márk Zoltán</p>
                    <p>jegyző</p>
                    <p>kereskedelmi ügyintézés</p>
                    <p>Tel: 47/534-403</p>
                    <p className="margin-bottom-hatosagi">jegyzo@cigand.hu</p>
                    <div className="hatosagi_igazgatasi_img">
                        <img
                            src="/images/middle_content_pics/titkarsag_pics/titkarsag.svg"
                            alt="Cigánd hatósági igazgatási osztály anyakönyvvezető fantomképe"
                        />
                    </div>

                    <p className="bold">Nagyné Bodnár Beatrix</p>
                    <p>anyakönyvvezető</p>
                    <p>hagyatéki eljárások</p>
                    <p>temetési segély</p>
                    <p>termőfölddel kapcsolatos ügyek</p>
                    <p>Tel: 47/534-421</p>
                    <p className="margin-bottom-hatosagi">
                        anyakonyvvezeto@cigand.hu
                    </p>

                    <div className="hatosagi_igazgatasi_img">
                        <img
                            src="/images/middle_content_pics/titkarsag_pics/titkarsag.svg"
                            alt="Cigánd hatósági igazgatási osztály szociális ügyintéző fantomkép"
                        />
                    </div>

                    <p className="bold">Dócsné Tóth Evelin</p>
                    <p>szociális ügyintézés</p>
                    <p>lakásfenntartási támogatások</p>
                    <p>rendszeres gyermekvédelmi támogatások</p>
                    <p>szociális támogatások</p>
                    <p>Tel: 47/534-417</p>
                    <p className="margin-bottom-hatosagi">
                        toth.evelin@cigand.hu
                    </p>

                    <p className="bold uppercase">Ügyfélfogadás</p>

                    <div className="hatosagi_fogadas">
                        <div>
                            <p>Hétfőn:</p>
                            <p>nincsen</p>
                        </div>

                        <hr />

                        <div>
                            <p>Kedd:</p> <p>08.00-12.00</p>
                        </div>

                        <hr />

                        <div>
                            <p>Szerda:</p> <p>08.00-12.00 és 13.00-16.00</p>
                        </div>

                        <hr />

                        <div>
                            <p>Csütörtök:</p> <p>08.00-14.00</p>
                        </div>

                        <hr />

                        <div>
                            <p>Péntek:</p> <p>08.00-12.00</p>
                        </div>

                        <hr />

                        <div>
                            <p>Szombat:</p> <p>nincsen</p>
                        </div>

                        <hr />

                        <div>
                            <p>Vasárnap:</p>
                            <p>nincsen</p>
                        </div>
                    </div>

                    <hr className="margin-bottom-hatosagi" />

                    <p className="bold">Kereskedelmi egységek nyilvántartása</p>

                    <DownloadFile file="/documents_files/hatosagi_osztaly/2016_kereskedelmi_egysegek_nyitvatartasa.xls">
                        2016-os nyilvántartás
                    </DownloadFile>

                    <DownloadFile file="/documents_files/hatosagi_osztaly/2018_kereskedelmi_egysegek_nyilvantartasa.xlsx">
                        2018-as nyilvántartás
                    </DownloadFile>
                </div>
            </ContentContainer>
        </>
    );
}
