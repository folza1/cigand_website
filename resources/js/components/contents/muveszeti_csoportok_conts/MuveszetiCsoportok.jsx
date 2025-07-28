import ContentContainer from "../modules/ContentContainer";
import HeaderModule from "../modules/HeaderModule";
import "./muveszeti_csoportok.css";

export default function MuveszetiCsoportok() {
    return (
        <>
            <HeaderModule
                breadcrumb={["Kultúra", "Kultúra", "Művészeti Csoportok"]}
            >
                Művészeti Csoportok
            </HeaderModule>
            <ContentContainer>
                <div className="revleanyvar_oktatas_container">
                    <div className="muveszeti_csoportok_img">
                        <img
                            src="/images/middle_content_pics/muveszeti_csoportok_pics/muveszeti1_balett.jpg"
                            alt="Balerina tánc közben, szürke hárttérrel."
                        />
                    </div>
                    <p>
                        Cigándon 2011-től szeptemberétől működik klasszikus
                        balett és modern tánc csoport Oláhné Fojdl Adrienn
                        táncpedagógus vezetésével.
                    </p>
                    <p>
                        A csoportok a Sárospataki Alapfokú Művészeti Iskola
                        kihelyezett tagozatai.
                    </p>
                    <p>
                        A gyerekek minden évben sikeresen szerepelnek országos
                        klasszikus balett és modern tánc versenyen.
                    </p>
                    <p>
                        Részt vesznek folyamatosan helyi és a térségben
                        rendezett különböző rendezvényeken, ki-mit-tud-on,
                        fesztiválon.
                    </p>
                    <p className="bold margin_top_muveszeti_csoportok">
                        Sárospataki Alapfokú Művészeti Iskola cigándi klasszikus
                        balett tagozat eredményei:
                    </p>
                    <ul className="muveszeti_csoportok_ul">
                        <li>2016. április 16 -17 , Mezőtúr:</li>
                    </ul>
                    <p>
                        III. Mezőtour klasszikus balett és modern tánc fesztivál
                        és IV. Koreográfusi verseny:
                    </p>
                    <p>Szepesy Judit : ezüst minősítés</p>
                    <p>Klasszikus balett csoport: bronz minősítés</p>

                    <p className="bold margin_top_muveszeti_csoportok">
                        Sárospataki Alapfokú Művészeti Iskola cigándi modern
                        tánc tagozat eredményei:
                    </p>
                    <ul className="muveszeti_csoportok_ul">
                        <li>2016. április 16 -17 , Mezőtúr:</li>
                    </ul>
                    <p>
                        III. Mezőtour klasszikus balett és modern tánc fesztivál
                        és IV. Koreográfusi verseny:
                    </p>
                    <p>Modern tánc csoport: ezüst minősítés</p>
                    <p>
                        Czinke Vanda, Markovics Annabella, Oláh Ajsa: bronz
                        minősítés
                    </p>
                    <p>Oláh Ajsa: ezüst minősítés</p>

                    <ul className="muveszeti_csoportok_ul">
                        <li>2016 április 25. Bodroghalom, Általános Iskola:</li>
                    </ul>

                    <p>Ki-Mit-Tud</p>
                    <p>Modern tánc csoport :Kiemelkedő díj</p>

                    <p className="margin_top_muveszeti_csoportok">
                        2015. április 18-19 , Mezőtúr:
                    </p>
                    <p>
                        II. Mezőtour klasszikus balett és modern tánc fesztivál
                        és III. Koreográfusi verseny:
                    </p>
                    <p>Modern tánc csoport: arany minősítés</p>

                    <ul className="muveszeti_csoportok_ul">
                        <li>2015.március, Ricse:</li>
                    </ul>

                    <p className="margin_top_muveszeti_csoportok">
                        Rákóczi Ferenc Kulturális találkozó:
                    </p>
                    <p>Modern tánc csoport: arany minősítés</p>

                    <p className="margin_top_muveszeti_csoportok">
                        Felkészítő pedagógus : Oláhné Fojdl Adrienn, klasszikus
                        balett pedagógus.
                    </p>
                </div>
            </ContentContainer>
        </>
    );
}
