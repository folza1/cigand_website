import ContentContainer from "../modules/ContentContainer";
import HeaderModule from "../modules/HeaderModule";
import DownloadFile from "../modules/DownloadFile";
import "./kiadvanyok.css";

export default function Kiadvanyok() {
    return (
        <>
            <HeaderModule
                breadcrumb={["Városunk", "Információk", "Kiadványaink"]}
            >
                Kiadványaink
            </HeaderModule>
            <ContentContainer>
                <div className="kiadvanyok_container">
                    <p>
                        Tájékoztatjuk az érdeklődőket, hogy az alább látható
                        könyveket megvásárolhatják a{" "}
                        <span className="bold">
                            Cigánd Városi Művelődési Központban
                        </span>{" "}
                        3973 Cigánd, Fő utca 38. szám alatt a helyszínen vagy
                        e-mailben a megrendelő szóra kattintva a feltüntetett
                        árakon. Egyéb vásárlási feltételekkel kapcsolatban
                        keresse a művelődési ház dolgozóit a{" "}
                        <span className="bold">+36-47/534-419</span>{" "}
                        telefonszámon vagy a{" "}
                        <span className="bold">varosikonyvtar@cigand.hu</span>{" "}
                        e-mail címen!
                    </p>

                    <p className="bold align-center margin_top_kiadvanyok uppercase">
                        Nagy István
                    </p>
                    <p className="align-center bold">A keskeny úton járva</p>
                    <div className="kiadvanyok_img">
                        <img
                            src="/images/middle_content_pics/kiadvanyok_pics/kiadvanyok1.jpg"
                            alt="A keskeny úton járva című könyv borítója a Református templommal, közben fényesen ragyog a Nap."
                        />
                    </div>
                    <p>
                        A reformáció 500. évfordulójára, valamint a magyar
                        református egyház megalakulásának 450. jubileumi évére
                        készült{" "}
                        <span className="italic">
                            Nagy István: A keskeny úton járva
                        </span>{" "}
                        című kiadványa.
                    </p>
                    <p>
                        A cím Jézus egyik példázatára utal: úton járó emberek
                        vagyunk mindnyájan. A széles út az Isten nélküli élet,
                        sokan járnak ezen. A keskeny út, Krisztus követésének,
                        az Istennel való járásnak az útja.
                    </p>
                    <p>
                        A szerző nem összefüggő folyamatot, eseménysort tár az
                        olvasó elé, hanem egy-egy fontos üzenetet rögzít az
                        évszázadok történéseiből, az egyház szolgálatában állt
                        személyek munkásságából. Célja, hogy a múlt ködéből
                        előhozza a cigándi egyházközség életének fontosabb
                        mozzanatait, hogy közel kerüljenek az emberekhez azok a
                        küzdelmek, az életigenlés, mely a cigándi református
                        egyházat jellemezte az idők folyamán.
                    </p>
                    <p>
                        Mindenekelőtt a templomot, mint épületet mutatja be az
                        előkerült dokumentumok alapján. Jelezve a renoválásokkal
                        járó változásokat is az épületen belül és kívül. Sajnos
                        nem maradt fenn hiteles adat az első építkezésről, annak
                        időpontjáról, így csupán következtetni lehet, hogy a
                        templomépítés ideje visszanyúlik a magyar történelem
                        kezdeti századaira.
                    </p>
                    <p>
                        A cigándiak összefogásának, közös akaratának megfelelően
                        jöhetett létre mai formája. Mindezek mellett a
                        helybeliek vallásos érzülete, kitartó hite jellemezte e
                        népes eklézsiát, amit a fennmaradt egyházlátogatói
                        jegyzőkönyvek rögzítenek és bizonyítanak.
                    </p>
                    <p>
                        A reformáció nagy vívmánya, a magyar írásbeliség
                        megjelenése, valamint az iskolák létrejötte is tetten
                        érhető a fennmaradt írásos anyagokban. Már a XIX. század
                        második felében híres és erős népiskolával
                        büszkélkedhetett Cigánd. Az egyház fontosnak tartotta,
                        anyagi erejéhez mérten támogatta az iskola működését, de
                        nem feledkezett el az ifjak iskolán kívüli neveléséről,
                        művelődéséről sem. Ezt bizonyítják a XX. század első
                        évtizedeiben működő különböző egyesületek, ifjúsági
                        szervezetek a református egyház szervezésében.
                    </p>
                    <p>
                        A kiadvány foglalkozik az itt szolgálatot teljesítő
                        prédikátorok, papok életútjával, küzdelmes munkájával,
                        erőfeszítéseivel.
                    </p>
                    <p>
                        A cigándi egyházközösség felbecsülhetetlen értékű tárgyi
                        emlékekkel, kegytárgyakkal is rendelkezik. A hívek
                        adományából összegyűlt anyagot tételesen mutatja be a
                        kiadvány.
                    </p>
                    <p>
                        A közelmúlt és a mai állapotok közreadásához pedig a
                        helyi sajtóban megjelent idevonatkozó cikkek, riportok
                        adnak segítséget eligazítást.
                    </p>
                    <p>
                        Az összeállítás több mint 100 képet tartalmaz, mely
                        vélhetően sokak érdeklődését kelti majd fel.
                    </p>
                    <p>
                        A kötet a Cigándi Református Egyházközség kiadásában
                        jelent meg.
                    </p>
                    <p className="bold">Ára: 1000,- Ft</p>
                    <DownloadFile
                        file="/documents_files/kiadvanyok/kiadvany_megrendelo_lap.doc"
                        extension_file="word.png"
                        size="0.04 MB"
                    >
                        Megrendelő lap
                    </DownloadFile>

                    <p className="bold align-center margin_top_kiadvanyok uppercase">
                        Scholtz Róbert Gergely
                    </p>

                    <p className="align-center bold">Hegedűvel és puskával</p>

                    <p className="align-center">
                        A nagy háború elfeledett cigány katonái (1914-1918)
                    </p>

                    <div className="kiadvanyok_img">
                        <img
                            src="/images/middle_content_pics/kiadvanyok_pics/kiadvanyok2.jpg"
                            alt="Egy arany színű hegedű a borítón és katonák."
                        />
                    </div>
                    <p>
                        A Hangadó Egyesület az első világháború 100. évfordulója
                        alkalmából egy bolgár kutatókkal közös tudományos
                        ismeretterjesztő kiadvánnyal emlékezik meg a Nagy Háború
                        cigány katonáiról.
                    </p>
                    <p>
                        Minden népnek, minden közösségnek szüksége van
                        emlékeire, saját történetének rögzítésére,
                        továbbörökítésére. A magyarországi cigányoknak nincsenek
                        – feltáratlanok (!) – írásos emlékei. Nem voltak
                        történetíróik; a múlt homályába vesző történetük nem
                        külön történelem, hanem szorosan összefügg a befogadó
                        magyar nép történelmével.
                    </p>
                    <p>
                        Napjainkban a magyar általános iskolás diákok közel fele
                        cigány származású. Őseik történetének megőrzése,
                        továbbörökítése ezért különösen fontos feladat. A
                        gyakran mélyszegénységben élő, negatív jövőképpel
                        rendelkező cigány fiatalok számára az elfeledett cigány
                        katonák hazaszeretete, vitézsége, a legnehezebb
                        helyzetekben tanúsított kitartása példaértékű lehet,
                        hogy méltók lehessenek elődeikhez és példát mutassanak
                        az őket követőknek.
                    </p>
                    <p>
                        A magyar nagyközönség napjainkig nem tudja, hogy
                        1914-1918 között számos cigány katona – „füstös”,
                        „fáraó”, „fekete honvéd” – küzdött a világháború
                        harcterein, sőt „cigány-szerelem” fedőnévvel 1918 őszén
                        magyar csapatokat szállítottak az olasz frontról a
                        nyugati hadszíntérre. A Nagy Háború centenáriuma
                        alkalmából kötelességünknek érezzük, hogy összegyűjtsük
                        és bemutassuk történeteiket.
                    </p>
                    <p className="bold">Ára: 1000,- Ft</p>
                    <DownloadFile
                        file="/documents_files/kiadvanyok/kiadvany_megrendelo_lap.doc"
                        extension_file="word.png"
                        size="0.04 MB"
                    >
                        Megrendelő lap
                    </DownloadFile>

                    <p className="bold align-center margin_top_kiadvanyok uppercase">
                        Scholtz Róbert Gergely
                    </p>

                    <p className="align-center bold">
                        „Nekik nem volt választásuk”
                    </p>

                    <p className="align-center">Állatok a Nagy Háborúban</p>
                    <div className="kiadvanyok_img">
                        <img
                            src="/images/middle_content_pics/kiadvanyok_pics/kiadvanyok3_allatok_a_nagy_haboruban.jpg"
                            alt="Szöges kerítés, háttérben háziállatok."
                        />
                    </div>
                    <p>
                        Könyvünk egy kissé más nézőpontból közelíti meg a Nagy
                        Háború ezen jelentősnek mondható részét. AZ állatok sem
                        maradhattak ki a szörnyű katasztrófából, szerepük
                        többrétű volt: mint hírvivői, megmentői, vagy sokszor,
                        mint elesége a fáradt, kimerült katonáknak...
                    </p>
                    <p>
                        Ezzel a kötettel egyúttal szeretnénk emléket állítani
                        azoknak az állatoknak is, amelyeket az I. világháborúban
                        besoroztak, amelyekről oly kevés szó esett, mégis
                        kulcsfontosságú szereplőivé váltak akaratukon kívül is a
                        világot átformáló „daliás időknek.”
                    </p>
                    <p>Szerkesztette: Scholtz Róbert Gergely</p>
                    <p>
                        Kiadja: Etele Hagyományőrző, Lovas és Szabadidősport
                        Egyesület
                    </p>
                    <p className="bold">Ára: 1000,- Ft</p>
                    <DownloadFile
                        file="/documents_files/kiadvanyok/kiadvany_megrendelo_lap.doc"
                        extension_file="word.png"
                        size="0.04 MB"
                    >
                        Megrendelő lap
                    </DownloadFile>

                    <p className="bold align-center margin_top_kiadvanyok uppercase">
                        Scholtz Róbert Gergely
                    </p>

                    <p className="align-center bold">„Az Isten megőrzött!”</p>

                    <p className="align-center">
                        Sőregi János, egy cigándi polihisztor a Nagy Háborúban
                        (1914-1918)
                    </p>
                    <div className="kiadvanyok_img">
                        <img
                            src="/images/middle_content_pics/kiadvanyok_pics/kiadvanyok4_isten_megorzott.jpg"
                            alt="Egy fekete katona alak, narancssárga háttérrel, fehér címszöveggel."
                        />
                    </div>
                    <p>
                        A Sőregi család Cigándra betelepülésének 150 éves
                        évordulója valamint az első világháború befejezésének
                        centenáriuma alkalmából Cigánd Városi Művelődési Központ
                        „Az Isten megőrzött!” Sőregi János, egy cigándi
                        polihisztor a Nagy Háborúban (1914-1918) címen
                        „társadalom- és történettudományi munkák megjelentetése
                        céljából” pályázatot nyújtott be. Fő célja, hogy Cigánd
                        város neves szülöttének harctéri naplói alapján a Nagy
                        Háborút és a kapcsolódó történelmi eseményeket felidéző,
                        a hősöknek és áldozatoknak emléket állító könyvet
                        jelentessen meg, így az első világháborúval kapcsolatos
                        társadalmi emlékezet ébren tartásával hozzájáruljon a
                        közös értékeken, történelmen és kultúrán alapuló európai
                        identitás erősítéséhez.
                    </p>
                    <p className="bold">Ára: 1000,- Ft</p>
                    <DownloadFile
                        file="/documents_files/kiadvanyok/kiadvany_megrendelo_lap.doc"
                        extension_file="word.png"
                        size="0.04 MB"
                    >
                        Megrendelő lap
                    </DownloadFile>
                </div>
            </ContentContainer>
        </>
    );
}
