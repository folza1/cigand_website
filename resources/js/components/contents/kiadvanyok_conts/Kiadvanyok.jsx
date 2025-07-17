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
                    <p className="bold align-center margin_top_kiadvanyok uppercase">
                        Viga Gyula (szerk.)
                    </p>
                    <p className="align-center bold">
                        Újabb tanulmányok Cigánd múltjából
                    </p>
                    <div className="kiadvanyok_img">
                        <img
                            src="/images/middle_content_pics/kiadvanyok_pics/kiadvanyok5_ujabb_tanulmanyok.jpg"
                            alt="Feketés zöld árnyalatú borító, rajta régi cigándi lakosok."
                        />
                    </div>
                    <p>
                        Cigánd Önkormányzata az 1990-es évektől számos kiadványt
                        jelentetett meg a település múltjával, a mai cigándiak
                        közös kulturális örökségével kapcsolatban. Ezek változó
                        céllal és igénnyel készültek, de akár ismeretterjesztő
                        feladatot láttak el, akár megfelelnek a tudományos
                        igényeknek, egyaránt haszonnal szolgálták Cigánd
                        megismerését és megismertetését. 2014-ben jelent meg az
                        a többszerzős tanulmánykötet, ami a hagyományos népi
                        kultúra több területét is bemutatja, természetesen, nem
                        a teljesség igényével. Azóta azonban újabb kéziratok
                        születtek. A most megjelent kötet három dolgozatot
                        tartalmaz. Takács Péter: Cigánd története /1720-1914/,
                        Fodor Katalin: Cigánd nyelvjárása, Páll István: Cigánd
                        hagyományos építészete.
                    </p>
                    <p className="bold">Ára: 1500,- Ft</p>
                    <DownloadFile
                        file="/documents_files/kiadvanyok/kiadvany_megrendelo_lap.doc"
                        extension_file="word.png"
                        size="0.04 MB"
                    >
                        Megrendelő lap
                    </DownloadFile>
                    <p className="bold align-center margin_top_kiadvanyok uppercase">
                        Fejős Zoltán
                    </p>
                    <p className="align-center bold">
                        "Mert abban az időben lehetett vándorolni"
                    </p>
                    <div className="kiadvanyok_img">
                        <img
                            src="/images/middle_content_pics/kiadvanyok_pics/kiadvanyok6_mert_abban_az_idoben.jpg"
                            alt="Mintha egy régi fekete-fehér útlevél lenne, rajta Fejős Zoltán fényképével és aláírásával."
                        />
                    </div>
                    <p>
                        Ez a könyv az Egyesült Államokba irányuló magyarországi
                        kivándorlásnak egy helyi történetét mutatja be. A 19. és
                        20. század fordulójára jellemző interkontinentális
                        migrációt „alulról”, a résztvevők szemszögéből
                        tárgyalja. Fő célja, hogy a mai cigándiakat
                        megismertesse múltjuk egy elfeledett darabjával.
                        Kiscigánd és Nagycigánd példáján azoknak a
                        vándormunkásoknak, cselédlányoknak és asszonyoknak az
                        életét és sorsának alakulását tárja elénk, akik nem
                        rettentek vissza a rájuk váró ismeretlentől, és a
                        tengerentúlon keresték boldogulásukat.
                    </p>
                    <p>
                        Szép számmal voltak olyanok, akik többször is útra
                        keltek, oda-vissza vándoroltak, vállalták ennek minden
                        nehézségét, kihasználva az ebben rejlő szabadság
                        lehetőségét. De nem mindenki járt sikerrel.
                    </p>
                    <p>
                        A vándormozgalom a „két Cigánd” egész lakosságára
                        kiterjedt, illetve közvetve vagy közvetlenül majd
                        mindenkit érintett. Mindenki persze nem vált
                        kivándorlóvá vagy idegenben próbálkozó időleges
                        vándormunkássá. Lényeges, hogy a migrációban nemcsak a
                        törzsökös lakosság vett részt, hanem a 19. század végén
                        kialakult uradalmi majorok és tanyák népe is.
                        Közigazgatásilag és apránként társadalmilag ők is
                        cigándiak lettek, a kettős településhez tartoztak,
                        miként a betelepült zsidóság is. Hivatalosan, a kor jogi
                        nyelvén a községi illetőség mindenkire vonatkozott, aki
                        állandó jelleggel legalább két éve itt lakott,
                        függetlenül attól, hogy hol volt szülőhelye.
                    </p>
                    <p>
                        Ez a könyv példát szeretne mutatni arra, hogy az
                        Egyesült Államokba irányuló „régi” kivándorlás múltja
                        megismerésre érdemes. Leginkább azért ajánlatos kiemelni
                        a feledés homályából, hogy megértsük, mit jelent az,
                        amikor valaki idegenben kénytelen boldogulni.
                    </p>
                    <p>
                        Remélhetőleg hozzájárul ahhoz, hogy a ki- és
                        visszavándorlások története, a múlt változatos
                        gyakorlata ezáltal is a magyar történeti emlékezet
                        részévé váljon.
                    </p>
                    <p>
                        A kötet Cigánd Város Önkormányzatának gondozásában
                        jelent meg a Nemzeti Kulturális Alap támogatásával.
                    </p>
                    <p className="bold">Ára: 2000,- Ft</p>
                    <DownloadFile
                        file="/documents_files/kiadvanyok/kiadvany_megrendelo_lap.doc"
                        extension_file="word.png"
                        size="0.04 MB"
                    >
                        Megrendelő lap
                    </DownloadFile>
                    <p className="bold align-center margin_top_kiadvanyok uppercase">
                        Nagy István
                    </p>
                    <p className="align-center bold">Azok az '50-es évek...</p>
                    <div className="kiadvanyok_img">
                        <img
                            src="/images/middle_content_pics/kiadvanyok_pics/kiadvanyok7_azok_az_50-es_evek.jpg"
                            alt="A borítón egy valószínűleg 50-es évekbeli olvasólámpa világít."
                        />
                    </div>
                    <p>
                        Cigánd Város Önkormányzata a Magyar Kultúra Hete
                        rendezvénysorozata keretében jelentette meg a legújabb
                        helytörténeti témájú könyvet az{" "}
                        <span className="italic">Azok az ' 50-es évek...</span>
                        címmel.
                    </p>
                    <p>A szerző, Nagy István gondolatai következnek:</p>
                    <p className="italic">
                        „Régóta érlelődött bennem a gondolat, hogy felszínre
                        kellene hozni az 1950-es évek cigándi világát,
                        történéseit, szegmenseit. Azt a miliőt, melyben 60 évvel
                        ezelőtt éltek e településen. S addig tenni ezt, amíg még
                        nem késő: amíg élnek hiteles tanuk, hiteles
                        adatszolgáltatók. A gondolatot tett követte, így
                        született meg az „Azok az ' 50-es évek…” című
                        összeállítás. Sokan voltak visszaemlékezők. Olyanok
                        akiknek gyermekkorát vagy ifjúságát jelentették ezek az
                        évek, vagy szüleiktől hallottak e kemény időkről.
                    </p>
                    <p className="italic">
                        Mindenesetre sok őszinte – sokszor keserű -
                        megnyilatkozás látott napvilágot, s ezek a nyilatkozatok
                        kendőzetlenül kerültek be a kötetbe. De példák sora
                        mutatja azt is, hogyan gyúrták át akkor a 13-14 éves
                        fiatalok gondolkodását, hogyan manipulálták a történelmi
                        egyházakat, milyen nehézségekkel küzdött az egészségügy,
                        vagy mennyire kezdetleges volt a szolgáltatás a mai
                        viszonyokhoz képest.
                    </p>
                    <p className="italic">
                        Ajánlom a könyv forgatását minden közelmúltunk iránt
                        érdeklődő fiatalnak és idősebbnek.
                    </p>
                    <p className="italic">
                        Köszönöm a közreműködő cigándiak és elszármazottak
                        hasznos segítségét!”
                    </p>
                    <p>
                        A könyv 2017. január 22-től érhető el a városi
                        könyvtárban. A könyv megjelenését Cigánd Város
                        Önkormányzata és a „Mansfeld Péter” pályázat kiírója az
                        1956-os Emlékbizottság, az 1956-os forradalom és
                        szabadságharc 60. évfordulójára létrehozott
                        Emlékbizottság támogatta.
                    </p>
                    <p className="bold">Ára: 2000,- Ft</p>
                    <DownloadFile
                        file="/documents_files/kiadvanyok/kiadvany_megrendelo_lap.doc"
                        extension_file="word.png"
                        size="0.04 MB"
                    >
                        Megrendelő lap
                    </DownloadFile>
                    <p className="bold align-center margin_top_kiadvanyok uppercase">
                        Virágot bont a zsenge ág
                    </p>
                    <div className="kiadvanyok_img">
                        <img
                            src="/images/middle_content_pics/kiadvanyok_pics/kiadvanyok8_viragot_bont.jpg"
                            alt="A borítón egy asztal hímzett terítővel, motívumok a könyv sarkainál."
                        />
                    </div>
                    <p>
                        „A cigándi bokréta legzsengébb ága című játékgyűjtemény
                        (szerk. Németh Károlyné, Téglás Dezsőné óvónők) 2.
                        módosított, átdolgozott kiadását tartja a kezében az
                        olvasó.
                    </p>
                    <p>
                        Az <span className="italic">„átörökítők”</span>{" "}
                        szeretettel és az itt élő emberek iránti tisztelettel
                        szerkesztették az anyagot, bízva abban, hogy küldetést
                        teljesítenek: Kántor Mihály tanító úr örökül hagyott
                        intelmét követve a{" "}
                        <span className="italic">
                            „...tündérek és lidércek hazájában”
                        </span>{" "}
                        folytatják a kincsek mentését. Büszkeség tölthette a
                        település apraját és nagyját, neves elöljáróit, hogy a
                        Bodrogköz gazdag hagyományvilágát is felölelő
                        gyermekjáték-gyűjtemény erősítette Cigánd hírnevét
                        határon innen és tengerentúl egyaránt.
                    </p>
                    <p>
                        Kívánjuk, hogy a Kedves Olvasó az eredeti tartalmat
                        megőrző és a hagyomány folytatói által kiegészítéssel
                        módosított kiadást is használja, leljen örömére benne.”
                    </p>
                    <p>
                        Részlet a Virágot bont a zsenge ág című kötet köszöntő
                        szövegéből
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
                        Sőregi János
                    </p>
                    <p className="bold align-center">Kék könyv</p>
                    <div className="kiadvanyok_img">
                        <img
                            src="/images/middle_content_pics/kiadvanyok_pics/kiadvanyok9_kek_konyv.jpg"
                            alt="Egyszerű kék borító, rajta Sőregi János neve és a Kék könyv felirat."
                        />
                    </div>
                    <p>Mi akart lenni az én „Kék könyvem”?</p>
                    <p>
                        Hogy nagy nehezen átvergődtem az érettségi vizsgán, szép
                        remények, ábrándképek szálltak felém pillangóként. Sokat
                        tépelődtem gondolkodtam. Néha örömrepesve, néha
                        elbúsulva. Mi is lesz hát belőlem, merre is menjek hát,
                        én édes Istenem? Megvallva, már akkor is áhítoztam a
                        dicsőség, hírnév után mintegy eltökéltem magamban, hogy
                        nemes célt akarok életemben szolgálni, egy szép és
                        boldogító lesz az én életem. Rajongtam a természetért:
                        leszek valami természetbúvár. Rajongtam a magyar
                        népéletért és művészetért: kifürkésszem, összegyűjtöm
                        ezeket! Mikor én érett lettem, ez a cél uralta lelkemet.
                        Mivel töltöm el tehát a vakációt? Így tervezgettem:
                        először is csináltatok egy olyan könyvet, amelybe én
                        fogom gyűjteni a magyar nép művészetét, lerajzolva,
                        lefestve azokat. Ezenfelül még természeti megfigyeléseim
                        is bekerülnek, a madarakról különösen. Elkészült a
                        könyv, az én „Kék könyvem”. És mi van benne? Kis marék
                        az életemből, elbeszélések, leírások, apró történetek.
                        Egy-egy szerény versecske is meghúzódik benne. Hogy
                        miért nem az eredeti céljára használtam fel, magam sem
                        tudom. Most pedig már ott vagyok, hogy az irodalom és a
                        képzőművészet egyedüli két mennyországom! Minden pénzem
                        könyvekre költöm. És mégis, mégis Bársony István, Herman
                        Ottó bácsi van az én eszemben! Szeretnék menni Pestre,
                        ez az egyedüli vágyam mai nap, ahol tanulni, látni
                        akarok minden szépet. Tanulni, mentől többet, minél
                        szebbet, nemesebbet: ez egyedüli célom. Tanulok is,
                        olvasok is. Te meg édes kék könyvem, őrizd meg az én
                        ifjúságom boldog óráit.
                    </p>
                    <p>1912. február 11 vasárnap délután 3-4.</p>
                    <p className="bold">Ára: 2000,- Ft</p>
                    <DownloadFile
                        file="/documents_files/kiadvanyok/kiadvany_megrendelo_lap.doc"
                        extension_file="word.png"
                        size="0.04 MB"
                    >
                        Megrendelő lap
                    </DownloadFile>
                    <p className="bold align-center margin_top_kiadvanyok uppercase">
                        Mező László
                    </p>
                    <p className="bold align-center">Cigándi futballkrónika</p>
                    <div className="kiadvanyok_img">
                        <img
                            src="/images/middle_content_pics/kiadvanyok_pics/kiadvanyok10_futballkronika.jpg"
                            alt="Gyepzöld borító, rajta egy régi fekete-fehér fénykép, rajta régi futballcipő és egy régi és egy új focilabda, plusz Cigánd SE címer."
                        />
                    </div>
                    <p>
                        A szerző könyvében egészen a kezdetektől napjainkig ír a
                        cigándi labdarúgás helyzetéről.
                    </p>
                    <p>
                        Megszólalnak benne volt és jelenlegi játékosok, egykori
                        edzők, támogatók. Rengeteg emlék kerül felszínre, melyek
                        az olvasó számára is felidézhetik a régmúlt és a mostani
                        mérkőzések körüli miliőt.
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
                        Fejezetek Cigánd néprajzából
                    </p>
                    <p className="bold align-center">
                        Szerkesztette: Viga Gyula
                    </p>
                    <div className="kiadvanyok_img">
                        <img
                            src="/images/middle_content_pics/kiadvanyok_pics/kiadvanyok11_cigand_neprajzabol.jpg"
                            alt="Sötét borító, rajta négy ember díszes ruhában."
                        />
                    </div>
                    <p>
                        A könyv fejezetekben bontja ki Cigánd néphagyományait,
                        annak változásait egészen a 13. századtól.
                        Megismerhetjük benne a cigándi emberek gazdálkodását,
                        öltözködését, táncalkalmait, valamint az élet nagy
                        fordulópontjaihoz köthető (születés, házasság, halál)
                        események szokásait. Rengeteg kutatómunka előzte meg e
                        könyv megszületését, de az az olvasó, aki kezébe veszi
                        ezt a művet egy csodában fog részesülni.
                    </p>
                    <p className="bold">Ára: 2500,- Ft</p>
                    <DownloadFile
                        file="/documents_files/kiadvanyok/kiadvany_megrendelo_lap.doc"
                        extension_file="word.png"
                        size="0.04 MB"
                    >
                        Megrendelő lap
                    </DownloadFile>
                    <p className="bold align-center margin_top_kiadvanyok uppercase">
                        Kútvölgyi Mihály - Viga Gyula
                    </p>
                    <p className="bold align-center">Kincses Bodrogköz</p>
                    <div className="kiadvanyok_img">
                        <img
                            src="/images/middle_content_pics/kiadvanyok_pics/kiadvanyok12_kincses_bodrogkoz.jpg"
                            alt="Gyerekek népviseletben játszanak a falumúzeum udvaránál."
                        />
                    </div>
                    <p>
                        A Bodrogköz három folyó által közrefogott történeti táj:
                        a Tisza, a Bodrog és a Latorca vize határolja.Az első
                        világháborút követő határmegvonás ezt a vidéket két
                        ország - Magyarország és Csehszlovákia- részévé tette, a
                        két évtizede történt kettéválást követően
                        Északkelet-Magyarország és Délkelet - Szlovákia osztozik
                        a Bodrogköz területén. A Felső - Bodrogközbe 30, az Alsó
                        - Bodrogközbe 22 település került a határmegvonással. Ez
                        a kötet a holtággá vált Karcsa medrétől délre eső,
                        magyarországi ( Alsó - ) Bodrogköz kincseivel, a
                        bodrogközi nép kulturális örökségével ismerteti meg az
                        érdeklődő olvasót.
                    </p>
                    <p className="bold">Ára: 3500,- Ft</p>
                    <DownloadFile
                        file="/documents_files/kiadvanyok/kiadvany_megrendelo_lap.doc"
                        extension_file="word.png"
                        size="0.04 MB"
                    >
                        Megrendelő lap
                    </DownloadFile>
                    <p className="bold align-center margin_top_kiadvanyok uppercase">
                        Nagy István
                    </p>
                    <p className="align-center bold">
                        Fakuló emlékek nyomában : A cigándi zsidóságról
                        töredékesen
                    </p>
                    <div className="kiadvanyok_img">
                        <img
                            src="/images/middle_content_pics/kiadvanyok_pics/kiadvanyok13_fakulo_emlekek.jpg"
                            alt="A borítón egy festmény egy fűzfáról a vízparton."
                        />
                    </div>
                    <p>
                        Ebben a kiadványban egy kis ízelítőt kap az olvasó a
                        Cigándon élő zsidóság életéről. Betekintést nyerhet a
                        mindennapokba, s arról is tudomást szerezhet az olvasó,
                        hogy milyen körülmények között kellett a Cigándon élő
                        zsidó embereknek szembesülniük azzal a gyűlölettel, ami
                        ellenük irányult. Ez ahhoz vezetett, hogy a második
                        világháborúban több százezer zsidó embert deportáljanak,
                        és végezzenek ki az auschwitzi megsemmisítő táborban.
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
                        Nagy István
                    </p>
                    <p className="align-center bold">Cigánd öröksége</p>
                    <div className="kiadvanyok_img">
                        <img
                            src="/images/middle_content_pics/kiadvanyok_pics/kiadvanyok14_cigand_oroksege.jpg"
                            alt="A könyvborítón egy fekete fehér képen egy cigándi család a házuk előtt."
                        />
                    </div>
                    <p>
                        A szerző szülei emlékének ajánlja a kötetet, de minden
                        cigándi ember szülője, nagyszülője emlékének adózik
                        ezzel. Kántor Mihály életműve, a gazdag és páratlan
                        néphagyomány kincs és kultúra Cigánd óriási, anyagiakban
                        nem mérhető értéke, melynek őrzése és ápolása,
                        továbbvitele nekünk, ma élő cigándiaknak is nemes
                        kötelezettségünk. Ez a kiadvány nem csak Cigánd
                        öröksége, hanem valamennyiünk öröksége, hiszen ezt a
                        könyvet őseink élete tölti meg tartalommal. Egyben
                        üzenet is a jövőnek, mert megszépíti jelenünket, s
                        távlatot nyit a jövőnkhöz.
                    </p>
                    <p className="bold">Ára: 2000,- Ft</p>
                    <DownloadFile
                        file="/documents_files/kiadvanyok/kiadvany_megrendelo_lap.doc"
                        extension_file="word.png"
                        size="0.04 MB"
                    >
                        Megrendelő lap
                    </DownloadFile>

                    <p className="bold align-center margin_top_kiadvanyok uppercase">
                        Kántor Mihály
                    </p>
                    <p className="align-center bold">
                        Bodrogközi len-és kendermunkák, szőttesek
                    </p>
                    <div className="kiadvanyok_img">
                        <img
                            src="/images/middle_content_pics/kiadvanyok_pics/kiadvanyok15_len_es_kendermunkak.jpg"
                            alt="Piros fehér madár motívum a borítón."
                        />
                    </div>
                    <p>
                        A szerző neve ismerősen cseng nem csak a szűkebb pátria
                        - Cigánd és Bodrogköz- közegében, de szerte az
                        országban, ahol helytörténetről, néphagyományról,
                        népművészetről esik szó. Méltán, mert Kántor Mihály
                        olyan szellemi örökséget hagyott ránk, melynek
                        kisugárzása túlmutat egy emberöltőn. A kiadványban a
                        Bodrogköz len-és kender munkáit, valamint szőtteseit
                        mutatja be. Aprólékosan, a kezetektől a kész termékig
                        követheti figyelemmel a munkafolyamatot a kedves olvasó.
                    </p>
                    <p className="bold">Ára: 1500,- Ft</p>
                    <DownloadFile
                        file="/documents_files/kiadvanyok/kiadvany_megrendelo_lap.doc"
                        extension_file="word.png"
                        size="0.04 MB"
                    >
                        Megrendelő lap
                    </DownloadFile>

                    <p className="bold align-center margin_top_kiadvanyok uppercase">
                        Nagy István
                    </p>
                    <p className="align-center bold">
                        Az iskolaügy évszázadai Cigándon
                    </p>
                    <div className="kiadvanyok_img">
                        <img
                            src="/images/middle_content_pics/kiadvanyok_pics/kiadvanyok16_iskolaugy_evszazadai.jpg"
                            alt="Egy fehér lapon kézzel írott levélszerűség lehet a borítón."
                        />
                    </div>
                    <p>
                        A XVII. századtól egészen az 1970-es évekig mutatja be
                        Cigánd oktatási intézményeinek történetét. Emellett a
                        Cigándhoz tartozó tanyák iskoláinak történetét is
                        feldolgozza, kiemelve az ott tanító pedagógusok missziói
                        szolgálatát. Értékesek azok az interjúk, amelyekben a
                        községből elszármazottak felvillantják emlékeiket
                        gyermekkorukról, iskolás életükről. Megható a válasz,
                        bármerre sodorta őket az élet, mégis cigándinak vallják
                        magukat.
                    </p>
                    <p className="bold">Ára: 2000,- Ft</p>
                    <DownloadFile
                        file="/documents_files/kiadvanyok/kiadvany_megrendelo_lap.doc"
                        extension_file="word.png"
                        size="0.04 MB"
                    >
                        Megrendelő lap
                    </DownloadFile>

                    <p className="bold align-center margin_top_kiadvanyok uppercase">
                        Nagy István
                    </p>
                    <p className="align-center bold">Gyermektáncközelben</p>
                    <div className="kiadvanyok_img">
                        <img
                            src="/images/middle_content_pics/kiadvanyok_pics/kiadvanyok17_gyermektanckozelben.jpg"
                            alt="Gyerekek májusjáráskor népviseletben a borítón."
                        />
                    </div>
                    <p>
                        Ebben a kiadványban az olvasó betekintést nyerhet Cigánd
                        táncéletébe. A XX. század elejétől a 2000-es évekig
                        olvashat arról, hogy miként jutott el a cigándi
                        néphagyomány a világhírig. A könyvben korszakokra bontva
                        találják meg a néptánc alakulását a településen.
                    </p>
                    <p className="bold">Ára: 2000,- Ft</p>
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
