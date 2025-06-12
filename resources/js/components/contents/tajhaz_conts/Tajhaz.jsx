import ContentContainer from "../modules/ContentContainer";
import HeaderModule from "../modules/HeaderModule";
import "./tajhaz.css";

export default function Tajhaz() {
    return (
        <>
            <HeaderModule breadcrumb={["Kultúra", "Kultúra", "Tájház"]}>
                Tájház Teszt
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
                    <p className="paragraph_between no_margin_top">
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

                    <p className="bold margin_top_tajhaz">Elérhetőség:</p>
                    <p>cigand@cigand.hu</p>
                    <p>muvhazcigand@gmail.com</p>

                    <p>
                        vezetékes telefon csak hétköznapokon:
                        <span className="bold"> +36/47-534-418</span>
                    </p>
                    <p>
                        mobil: Némethy András
                        <span className="bold"> +36/70 595 7822</span>
                    </p>
                    <div className="tajhaz_img">
                        <img
                            src="/images/middle_content_pics/tajhaz_pics/tajhaz2.jpg"
                            alt="A Bíró Háza bejárat oldalról."
                        />
                    </div>
                    <p className="bold">Látnivalók a környéken:</p>
                    <ul className="tajhaz_ul">
                        <li>
                            Bodrogközi Múzeumporta, Sőregi-Ház, MúltKor Háza,
                            Tanítóház - tárlatvezetés, kemencében sült „bélesek”
                            kóstolója. További információ:
                            http://www.muzeumporta.hu
                        </li>
                        <li>
                            Pácin: Reneszánsz Mágóchy Várkastély és Báró-kert
                            (15km)
                        </li>
                        <li>Karcsa: Árpád-kori templom (20 km)</li>
                        <li>Nagykövesd (Szlovákia): Várrom (20 km)</li>
                        <li>
                            Karos: Nemzeti sírkert (24 km) Magyarország
                            leggazdagabb Honfoglalás-kori temetője
                        </li>
                        <li>
                            Borsi (Szlovákia): Rákóczi Szülőháza, kastély (26
                            km)
                        </li>
                        <li>Sárospatak: Rákóczi Vár, tengerszem (30 km)</li>
                        <li>
                            Hercegkút: Világörökség részét képező pincesor (35
                            km)
                        </li>
                        <li>
                            Sátoraljaújhely: Közép-Európa leghosszabb bob
                            pályája (35 km)
                        </li>
                        <li>
                            Sátoraljaújhely-Széphalom: A Magyar Nyelv Múzeuma
                            (42 km)
                        </li>
                    </ul>
                    <div className="tajhaz_img">
                        <img
                            src="/images/middle_content_pics/tajhaz_pics/tajhaz3.jpg"
                            alt="A Bíró Háza távolabbról."
                        />
                    </div>
                    <p className="bold">Strandok:</p>
                    <ul className="tajhaz_ul">
                        <li>
                            <span className="bold">Cigánd Tisza-part:</span>{" "}
                            szabad strand (homoklapály), nem kijelölt fürdőhely
                            (2 km)
                        </li>
                        <li>
                            <span className="bold">Kisvárda:</span> Termál
                            élmény és gyógyfürdő (15km)
                        </li>
                        <li>
                            <span className="bold">Sárospatak:</span> Termál
                            gyógyfürdő (30 km)
                        </li>
                    </ul>
                    <div className="tajhaz_img">
                        <img
                            src="/images/middle_content_pics/tajhaz_pics/tajhaz4.jpg"
                            alt="Szoba belülről, két ablak ágyakkal."
                        />
                    </div>
                    <p className="bold">Horgászat:</p>
                    <p>
                        A horgászni vágyókat számos izgalmas hely várja a
                        környéken:
                    </p>
                    <p>
                        Tisza (1 km), Pácini Karcsa (13 km), Tisza holtágak (6
                        km), Ricse horgásztó (10 km), Alsóberecki, Bodrog és
                        Holt-Bodrog (27 km), Vajdácska horgásztó (22 km)
                    </p>
                    <p className="bold">Horgászjegyekről tájékoztatás:</p>
                    <p>
                        Cigándi Tiszavirág Horgász Egyesület 3973 Cigánd, Hajnal
                        u. 39.
                    </p>
                    <p className="bold align-center">Boros Géza elnök</p>
                    <p className="align-center">+36 47/534-034</p>
                    <div className="tajhaz_img">
                        <img
                            src="/images/middle_content_pics/tajhaz_pics/tajhaz5.jpg"
                            alt="A Bíró Háza konyha felszerelve."
                        />
                    </div>
                    <p className="bold">Aktív pihenés:</p>
                    <ul className="tajhaz_ul">
                        <li>
                            <span className="bold">Cigándon:</span> Műfüves
                            pálya, kerékpáros "pumpapálya", játszótér,
                            Szabadidőközpont 20*40 méteres játéktér,
                            konditeremmel, Járási Tanuszoda.
                        </li>
                        <li>
                            <span className="bold">Kerékpár:</span> 26 km
                            összefüggő kerékpárút Cigándról indulva a cigándi
                            Árapasztó vésztározó töltésén és a Tisza töltésén,
                            kerékpár-kölcsönzési lehetőséget biztosítunk a
                            Bodrogközi Múzeumportán.
                        </li>
                        <li>
                            <span className="bold">
                                Magashegyi Sportcentrum Sátoraljaújhely (35 km):
                            </span>{" "}
                            Közép-Európa leghosszabb bob pályája, Magyarország
                            leghosszabb libegője, téli-nyári sípálya,
                            kalandpark, turistaútvonalak.
                        </li>
                    </ul>
                    <div className="tajhaz_img">
                        <img
                            src="/images/middle_content_pics/tajhaz_pics/tajhaz6.jpg"
                            alt="A Bíró Háza bejárat távolabbról, faléc kerítéssel."
                        />
                    </div>
                    <div className="tajhaz_img margin_top_tajhaz">
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
