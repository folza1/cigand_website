import HeaderModule from "../modules/HeaderModule";
import ContentContainer from "../modules/ContentContainer";
import "./penzugyi_osztaly.css";

export default function PenzugyiOsztaly() {
    return (
        <>
            <HeaderModule
                breadcrumb={[
                    "Önkormányzat",
                    "Közös Önk. Hivatal",
                    "Pénzügyi Osztály",
                ]}
            >
                Pénzügyi Osztály
            </HeaderModule>
            <ContentContainer>
                <div className="penzugyi_osztaly_container">
                    <p className="bold">Cigándi Közös Önkormányzati Hivatal</p>
                    <p>Pénzügyi Osztály</p>
                    <p>3973 Cigánd Fő utca 80.</p>
                    <p>Tel.: 47/534-400</p>
                    <p>penzugy@cigand.hu</p>

                    <div className="penzugyi_osztaly_img">
                        <img
                            src="/images/middle_content_pics/titkarsag_pics/titkarsag.svg"
                            alt="Pénzügyi Osztály osztályvezető fantomkép"
                        />
                    </div>

                    <p className="bold">Illés Lászlóné</p>
                    <p>osztályvezető</p>
                    <p>Tel: 47/534-405</p>

                    <div className="penzugyi_osztaly_img">
                        <img
                            src="/images/middle_content_pics/titkarsag_pics/titkarsag.svg"
                            alt="Pénzügyi Osztály ügyintéző fantomkép"
                        />
                    </div>

                    <p className="bold">Csákiné Barnóczki Márta</p>
                    <p>Tel: 47/534-405</p>

                    <div className="penzugyi_osztaly_img">
                        <img
                            src="/images/middle_content_pics/titkarsag_pics/titkarsag.svg"
                            alt="Pénzügyi Osztály ügyintéző fantomkép"
                        />
                    </div>

                    <p className="bold">Göncziné Tóth Renáta</p>
                    <p>Tel: 47/534-405</p>

                    <div className="penzugyi_osztaly_img">
                        <img
                            src="/images/middle_content_pics/titkarsag_pics/titkarsag.svg"
                            alt="Pénzügyi Osztály ügyintéző fantomkép"
                        />
                    </div>

                    <p className="bold">Nagyné Fodor Anita</p>
                    <p>Tel: 47/534-405</p>

                    <div className="penzugyi_osztaly_img">
                        <img
                            src="/images/middle_content_pics/titkarsag_pics/titkarsag.svg"
                            alt="Pénzügyi Osztály ügyintéző fantomkép"
                        />
                    </div>

                    <p className="bold">Varga Lászlóné</p>
                    <p>Tel: 47/534-405</p>

                    <div className="penzugyi_osztaly_img">
                        <img
                            src="/images/middle_content_pics/titkarsag_pics/titkarsag.svg"
                            alt="Pénzügyi Osztály helyi adóügyi ügyintéző fantomkép"
                        />
                    </div>

                    <p className="bold">Timári Dóra</p>
                    <p>adóügyintézés</p>
                    <p>Tel: 47/534-406</p>
                    <p>helyiado@cigand.hu</p>

                    <div className="penzugyi_osztaly_img">
                        <img
                            src="/images/middle_content_pics/titkarsag_pics/titkarsag.svg"
                            alt="Pénzügyi Osztály közfoglalkoztatás és munkaügyi ügyintéző fantomkép"
                        />
                    </div>

                    <p className="bold">Illés Józsefné</p>
                    <p>Közfoglalkoztatás és munkaügy</p>
                    <p>Tel: 47/534-422</p>

                    <div className="penzugyi_osztaly_img">
                        <img
                            src="/images/middle_content_pics/titkarsag_pics/titkarsag.svg"
                            alt="Pénzügyi Osztály közfoglalkoztatás és munkaügyi ügyintéző fantomkép"
                        />
                    </div>

                    <p className="bold">Csákiné Szilágyi Erika</p>
                    <p>Közfoglalkoztatás és munkaügy</p>
                    <p className="margin-bottom-penzugyi">Tel: 47/534-422</p>

                    <p className="bold uppercase">Ügyfélfogadás</p>

                    <div className="penzugyi_fogadas">
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

                        <hr />
                    </div>
                </div>
            </ContentContainer>
        </>
    );
}
