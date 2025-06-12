import ContentContainer from "../modules/ContentContainer";
import HeaderModule from "../modules/HeaderModule";
import "./tajhaz.css";

export default function Tajhaz() {
    return (
        <>
            <HeaderModule breadcrumb={["Kultúra", "Kultúra", "Tájház"]}>
                Tájház
            </HeaderModule>
            <ContentContainer>
                <div className="tajhaz_container">
                    <div className="tajhaz_img">
                        <img
                            src="/images/middle_content_pics/tajhaz_pics/tajhaz1.jpg"
                            alt="A Bíró Háza."
                        />
                    </div>
                    <p>
                        Cigánd legmagasabb pontján, nyugodt, falusias
                        környezetben fekszik az egykori bíró háza. A cigándi
                        Tájház várja mindazon kikapcsolódni vágyó csoportokat,
                        családokat, akiket vonz a falusi csend, az igényes
                        környezet és a friss, tiszta levegő. Mindenki
                        megtalálhatja szabadidejének hasznos eltöltését mind a
                        településen, mind a történelmi Bodrogköz és a közeli
                        Zempléni-hegység tájain.
                    </p>
                    <p className="bold no_margin_bottom">Szobák:</p>
                    <p className="no_margin_top">
                        2 x 6 ágyas szobák, 1 nappali-társalgó helyiség műholdas
                        televízióval, internettel (Wi-Fi), felszerelt konyha, 2
                        fürdőszoba, bogrács és szalonnasütő hely, kemencében
                        való sütési lehetőség. Nagyobb csoportok részére
                        sátorhely biztosított.
                    </p>

                    <p className="bold no_margin_bottom">Étkezés:</p>
                    <p className="no_margin_top">
                        Önellátó, valamint egyeztetés alapján menü rendelése is
                        igénybe vehető
                    </p>

                    <p className="bold no_margin_bottom">Árak:</p>
                    <p className="paragraph_between">
                        <span>Nyári szezon (április 01 – szeptember 30.):</span>
                        <span className="bold">6.000 Ft/éj/fő</span>
                    </p>
                    <p className="paragraph_between">
                        <span>Téli szezon (október 01 – március 31.):</span>
                        <span className="bold">7.000 Ft/éj/fő</span>
                    </p>
                    <p className="align-center bold">
                        6 fő fölött 1.000 Ft/fő kedvezmény!
                    </p>
                    <p className="paragraph_between">
                        <span>Idegenforgalmi adó (IFA):</span>
                        <span className="bold">300 Ft/éj/fő</span>
                    </p>
                    <p className="align-center bold">
                        Gyermekeknek a szállás 6 éves korig ingyenes.
                    </p>

                    <p className="paragraph_between">
                        <span>Sátorhely biztosítása egységesen:</span>
                        <span className="bold">1000 Ft/éj/fő</span>
                    </p>
                    <p>
                        (ez magában foglalja a kinti mellékhelyiségek
                        használatát.)
                    </p>
                    <p className="margin_top_tajhaz">
                        Rendezvényeknek is szívesen biztosítunk helyet, melynek
                        díja:
                    </p>
                    <p className="bold align-center">
                        40.000 Ft/nap (szállás nélkül).
                    </p>
                    <p className="bold align-center">
                        Az árak tartalmazzák az ÁFÁ-t!
                    </p>
                    <div className="tajhaz_img">
                        <img
                            src="/images/middle_content_pics/tajhaz_pics/tajhaz2.jpg"
                            alt="A Bíró Háza bejárat oldalról."
                        />
                    </div>
                    <div className="tajhaz_img">
                        <img
                            src="/images/middle_content_pics/tajhaz_pics/tajhaz3.jpg"
                            alt="A Bíró Háza távolabbról."
                        />
                    </div>
                    <div className="tajhaz_img">
                        <img
                            src="/images/middle_content_pics/tajhaz_pics/tajhaz4.jpg"
                            alt="Szoba belülről, két ablak ágyakkal."
                        />
                    </div>
                    <div className="tajhaz_img">
                        <img
                            src="/images/middle_content_pics/tajhaz_pics/tajhaz5.jpg"
                            alt="A Bíró Háza konyha felszerelve."
                        />
                    </div>
                    <div className="tajhaz_img">
                        <img
                            src="/images/middle_content_pics/tajhaz_pics/tajhaz6.jpg"
                            alt="A Bíró Háza bejárat távolabbról, faléc kerítéssel."
                        />
                    </div>
                    <div className="tajhaz_img">
                        <img
                            src="/images/middle_content_pics/tajhaz_pics/tajhaz7.jpg"
                            alt="A Bíró Háza zuhanyzó, mosdó és WC."
                        />
                    </div>
                </div>
            </ContentContainer>
        </>
    );
}
