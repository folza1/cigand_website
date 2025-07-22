import HeaderModule from "../modules/HeaderModule";
import ContentContainer from "../modules/ContentContainer";
import "./civil_szervezetek.css";

export default function CivilSzervezetek() {
    return (
        <>
            <HeaderModule
                breadcrumb={["Városunk", "Információk", "Civil Szervezetek"]}
            >
                Civil Szervezetek
            </HeaderModule>
            <ContentContainer>
                <div className="civil_szervezetek_container">
                    <div className="civil_szervezetek_img">
                        <img
                            src="/images/middle_content_pics/civil_szervezetek_pics/civil1_tajmuzeum.jpg"
                            alt="Egy régi díszszekér a múzeumban"
                        />
                    </div>
                    <p className="bold uppercase align-center">
                        A „Bodrogköz Tájmúzeumáért” Alapítvány
                    </p>
                    <p>
                        2000. december hó 19. napján jött létre, és 2001.
                        október 24-től kiemelkedően közhasznú szervezet. Célunk
                        a Bodrogközi tájegységre jellemző népi építészet,
                        kultúra, hagyományok fenntartása, megismertetése.
                    </p>
                    <p>
                        A meglévő Falumúzeum köré tájmúzeum létesítését
                        tervezzük, amely gyűjti, rendszerezi és bemutatja a
                        falusi emberek életéhez kapcsolódó tárgyakat, a
                        tájegységre jellemző hagyományokat és népszokásokat.
                    </p>
                    <p>
                        Ezeket ifjúsági szabadidős programok (kézműves táborok,
                        játszóházak, jeles napokhoz kapcsolódó fesztiválok),
                        kiállítások, bemutatók, néprajzi előadások segítségével
                        igyekszünk megvalósítani.
                    </p>
                    <p>
                        Munkánkat lelkes önkéntesek, cégek, vállalkozók
                        támogatják anyagi és természetbeni juttatásokkal. Az
                        elmúlt években működésünkhöz egyre nagyobb mértékben
                        használunk fel pályázati pénzeket is.
                    </p>
                    <p>
                        Legfontosabb eredményeink közé sorolható a táncpajta és
                        a gazdasági épület megépülése. Ehhez elengedhetetlen
                        volt a településközpont rekonstrukciós látványtervének
                        elkészíttetése, amely beépült az önkormányzat
                        városrendezési tervébe. Berendeztük a közösségi szobát,
                        az udvart, megépült a tájegységre jellemző kemence,
                        amelyben rendezvényeken helyi ételek készülnek.
                    </p>
                    <p>
                        Jelentősen gyarapodott időközben a múzeum gyűjteménye
                        is. A XIX. századra jellemző használati és dísztárgyakat
                        demonstrációs eszközként használjuk népszokásaink
                        felelevenítéséhez. Munkánk során megállapítottuk, hogy a
                        térségben a szövés leginkább élő hagyomány. Az elszórt
                        forma és motívumkincs, a mesterfogások
                        továbbörökítéséhez szükség van azok egy csokorba
                        gyűjtésére. Ezt a munkát végezte el a hatvanas években
                        Kántor Mihály „A Bodrogközi len- és kendermunkák,
                        szőttesek” című művében. Alapítványunk 2002.-ben ezer
                        példányban újra kiadta a könyvet, amely nélkülözhetetlen
                        szakirodalom a kutatók és a téma iránt érdeklődők
                        számára.
                    </p>
                    <p>
                        Ebben az évben Cigándon került megrendelkezésre a
                        Regionális Tájháztalálkozó, ahol az alapítvány
                        előterjesztette a népi hagyományok megelevenítésére
                        szolgáló középtávú tervét. Ebben jeles napokhoz
                        kapcsolódó, évente változó témájú néprajzi bemutatók és
                        állandó rendezvények szerepeltek. Az előbbiekre példa a
                        Húsvéti Játszó, a Zöldágjárás, Kukoricafesztivál,
                        állandó rendezvényeink a Múzeumi Évadnyitó, a nyári
                        Kézműves Tábor és a Kézműves kör.
                    </p>
                    <p>
                        Programjaink az ország minden tájáról vonzanak
                        látogatókat. Tapasztalataink alapján elmondhatjuk, hogy
                        egyre nagyobb az igény a népi kultúra megismerésére. A
                        jövőben szeretnénk újabb épületekkel bővíteni a
                        múzeumfaluvá fejleszteni a tájmúzeumot, hogy
                        szélesíthessük tevékenységi körünket, ezzel is
                        elősegítve a népi kultúra továbbélését.
                    </p>
                    <p>
                        Munkánkat 2011 márciusában „A Megye Kultúrájáért” díjjal
                        jutalmazta a megye önkormányzata.
                    </p>
                    <p className="align-center">
                        Szakmai vezetője:{" "}
                        <span className="bold">Csáki Balázsné</span>
                    </p>
                    <p className="align-center">
                        3973 Cigánd, Fő út 54, tel: 70/626 8280
                    </p>
                    <p className="align-center">
                        e-mail: muvhazcigand@gmail.com, abta@citromail.hu
                    </p>
                    <div className="civil_szervezetek_img margin_top_civil_szervezetek">
                        <img
                            src="/images/middle_content_pics/civil_szervezetek_pics/civil2_ovodasokert.jpg"
                            alt="Egy régi díszszekér a múzeumban"
                        />
                    </div>
                    <p className="align-center bold uppercase">
                        A "Cigándi Óvodásokért" Alapítvány
                    </p>
                    <p className="bold">
                        A cigándi óvoda nevelőtestülete a 80-as évek végétől
                        kötelezte el magát a néphagyományok ápolása iránt.
                    </p>
                    <p>
                        Azt a sok szépet, szellemiséget, amit összegyűjtöttek a
                        nagyszülők, dédszülők, nem hagytuk elveszni. A régmúlt
                        használati eszközeit az óvodában beépítettük az apró
                        gyerekek mindennapi életébe, és évről évre
                        megismertetjük a gyerekekkel. Az óvodánkba lépőt egy
                        igazi falusi környezet fogadja. Minden csoportszobában
                        fellelhetők a paraszti kultúra tárgyi eszközei, amelyek
                        a gyermekek számára elérhetőek. A szövés - fonás tárgyi
                        emlékei az itt élő nép szépség igényéről és díszítő
                        fantáziájáról tanúskodnak.
                    </p>
                    <p>
                        De nemcsak a tárgyi világot kapták emlékül, hanem a sok
                        szép dalt, köszöntőt, mesét, játékot is, amelyek ma már
                        a cigándi óvodások mindennapjait átszövik.
                    </p>
                    <p>
                        A gyermekeket ebben a légkörben neveljük, amely
                        óhatatlanul a szülőföld szeretetére, hagyományaink
                        ápolására nevel. Munkánkban kiemelten fontosak a jeles
                        napok, ünnepek, amelyik mindegyike valamilyen népszokást
                        takar: cigándi lakodalmas, zöldágjárás, csúfolódó,
                        Bodrogközi gyermekjátékok, pásztorjáték (betlehemezés),
                        vásári hívogatók, farsangi szokások, farsangi ételek
                        receptjei, katonásdi, botos játék, kanásztánc, húsvéti
                        szokások (locsolkodás, tojás díszítés népi
                        motívumokkal).
                    </p>
                    <p>
                        1999-ben felfigyeltünk egy Országos Egyesületre, akik
                        hasonlóképpen gondolkodtak ez a „Néphagyományőrző
                        Egyesület.” Azóta együttgondolkodva dolgozunk és
                        ápoljuk, éltetjük a népi hagyományokat. Ez az Egyesület
                        évről-évre egyre jobban növekszik.
                    </p>
                    <p>
                        Az Egyesület fennállásának 10. évfordulója alkalmából
                        „Mester Óvoda” címet adományozott a néphagyomány éltetés
                        területén élenjáró óvodáknak. Ennek a kitüntetett
                        elismerésnek lehettünk részesei, Pécsett a X. országos
                        találkozón, ahol át vehettük a „Néphagyományőrző Mester
                        Óvoda” címet.
                    </p>
                    <p>
                        Cigándon ebből az alkalomból a „Zöldágjárást”
                        felelevenítve került leleplezésre az óvoda falára
                        helyezett népi motívumokkal díszített faragott tábla.
                    </p>
                    <p>
                        Neves és nagyra becsült elődeink közöttük Kántor Mihály
                        néptanító úr munkásságát, szellemiségét igyekszünk hűen
                        ápolni, éltetni, aki így emlékszik vissza arra a tájra,
                        ahol mi élünk és neveljük szeretett óvodánkban a
                        gyermekeket. „Tündérek és lidércek hazája a Bodrogköz,
                        ahol értelmes nyelven dalol a madár, lelke van a
                        virágnak és hitvallás erejével élnek a mesék. Ha
                        megállsz e földön, tündérregét mond a vizek lilioma. Ha
                        beszélsz a néppel, mely itt honos, a szíved egyszerre
                        gyorsabban veri vérütéseit.”
                    </p>
                    <p>
                        Ezek a gondolatok örök érvényűek számunkra és reméljük,
                        hogy gyermekeink szívében, lelkében is tovább élnek
                        majd.
                    </p>
                    <p className="align-center">
                        Szakmai vezetője:{" "}
                        <span className="bold">
                            Terjék Károlyné óvodavezető
                        </span>
                    </p>
                    <p className="align-center">
                        <span className="bold">
                            Cigándi Tündérkert Óvoda és Bölcsőde
                        </span>{" "}
                    </p>
                    <p className="align-center">3973 Cigánd, Iskola út 10.</p>
                    <p className="align-center">Tel: 47/534-415, 47/534-416</p>
                    <p className="align-center">
                        e-mail: cigandovoda@freemail.hu
                    </p>

                    <div className="civil_szervezetek_img margin_top_civil_szervezetek">
                        <img
                            className="civil_szervezetek_img_majorette"
                            src="/images/middle_content_pics/civil_szervezetek_pics/civil3_majorette_fuvos.jpg"
                            alt="Egy fekete majorette táncos alak, fehér háttérrel"
                        />
                    </div>
                    <p className="align-center bold uppercase">
                        Cigándi Majorette és Fúvószenekar Alapítvány
                    </p>
                    <p>
                        A cigándi Majorette Alapítvány 1993-tól működik töretlen
                        lelkesedéssel. Az alapítvány célja az együttzenélés és a
                        moderntánc hagyományainak megteremtése Cigándon
                    </p>
                    <p>
                        A tánccsoport 1996-tól - TriAngel Majorette Tánccsoport
                        néven működik. A közel 50 táncost számláló együttes
                        három korcsoportban dolgozik.
                    </p>
                    <p className="bold uppercase margin_top_civil_szervezetek">
                        Föbb eredményeik:
                    </p>
                    <p>1995 -- III. Országos Majorette Táncverseny</p>
                    <p>
                        1996 -- IV. Országos Majorette Táncverseny - összetett
                        III. hely
                    </p>
                    <p>Kömlőd színpadi IV. hely</p>
                    <p>menet III. hely</p>
                    <hr />
                    <p className="margin_top_civil_szervezetek2">
                        1998 -- VI. Országos Majorette Táncverseny - összetett
                        II. hely
                    </p>

                    <p>Kömlőd színpadi II. hely</p>

                    <p>
                        2000 -- VII. Országos Majorette Táncverseny - összetett
                        II. hely
                    </p>

                    <p>Kömlőd színpadi II. hely</p>

                    <p>menet II. hely</p>
                    <hr />
                    <p className="margin_top_civil_szervezetek2">
                        1997 -- Diákok Formációs Táncversenye - III. hely
                    </p>

                    <p>Miskolc</p>
                    <hr />
                    <p className="margin_top_civil_szervezetek2">
                        1998 -- Diákok Formációs Táncversenye - I. hely
                    </p>

                    <p>Miskolc különdíj: Fügeczki Róbert emlékére</p>

                    <p>Legjobb jelmez</p>

                    <p>menet II. hely</p>
                    <hr />
                    <p className="margin_top_civil_szervezetek2">
                        Magyar Majorette Bajnokság 2002 Ráckeve. - I. helyezés
                    </p>
                    <hr />
                    <p className="margin_top_civil_szervezetek2">
                        2002. szeptemberében a cigándi lányok Majorette Európa
                        Bajnokságon képviselték országunkat a lengyelországi
                        Opole városában
                    </p>
                    <hr />
                    <p className="margin_top_civil_szervezetek2">
                        Észak-Magyarországi Moderntáncverseny, 2005, Miskolc -
                        III. helyezés
                    </p>
                    <hr />
                    <p className="margin_top_civil_szervezetek2">
                        Tagjai a Magyar Majorette Szövetségnek valamint 2002-töl
                        az EMÁ-nak az Európai Majorette Szövetségnek és az
                        IMA-nak a Nemzetközi Majorette Szövetségnek is..
                    </p>
                    <hr />
                    <p className="margin_top_civil_szervezetek2">
                        A 2006 év Magyar Majorette Bajnokságán négy I. helyezés
                        büszke nyertesei, valamint a junior korcsoport Országos
                        Moderntánc Fesztivál győztesei.
                    </p>
                    <hr />
                    <p className="margin_top_civil_szervezetek2">
                        2008-ban a II. nyírbátori majorette fesztivál két
                        különdíját tudhatja magáénak.
                    </p>

                    <p className="bold align-center">
                        A cigándi majorettek vezetője és koreográfusa:
                    </p>

                    <p className="align-center">
                        <span className="bold">Némethy Viktória</span> - zene,
                        tánc és dráma pedagógus
                    </p>
                    <p className="align-center">tel: 70/533-2585</p>
                    <p className="align-center">triangelgroup@gmail.com</p>

                    <div className="civil_szervezetek_img margin_top_civil_szervezetek">
                        <img
                            src="/images/middle_content_pics/civil_szervezetek_pics/civil4_mozgaskorlatozottak.png"
                            alt="Az egyesület logója, egy kerekesszékes emberrel és zöld hegyekkel a háttérben és egy kék folyó lentebb."
                        />
                    </div>
                    <p className="align-center bold uppercase">
                        Mozgáskorlátozottak Sárospataki és Zemplén Térségi
                        Egyesülete
                    </p>
                    <p>
                        A mozgáskorlátozottságból eredő sajátos érdekek
                        feltárása, megfogalmazása, egyeztetése más csoportok
                        érdekeivel, e sajátos érdekek képviselete, védelme,
                        érvényesítése, különösen a jogalkotás befolyásolására
                        irányuló munkában. A mozgássérült emberek számára
                        hiányzó munka-, oktatási-, kulturális-, sport-,
                        szabadidős és egyéb lehetőségek megteremtéséhez
                        segítségnyújtás, módszerek kidolgozása. Hiányzó
                        szolgáltatások minta értékű megvalósítása és
                        elterjesztése, például speciális személyi segítő,
                        szállító, sorstársi tanácsadó és információs szolgálat
                        működtetésével Közreműködés az állam által nyújtott, a
                        mozgáskorlátozottságból eredő egyes hátrányok
                        kiegyenlítését szolgáló támogatásoknak a jogosultakhoz
                        való juttatásában, például a lakás akadálymentesítési
                        támogatás és a közlekedési támogatás odaítélése során. A
                        mozgássérülti lét átéléséből táplálkozó sajátos ismertek
                        és a tanult szakértelem alapján szakértői tevékenység
                        kifejtése mind a jogalkotás, mind a jogalkalmazás
                        legkülönbözőbb területein.
                    </p>
                    <p className="align-center">
                        Cigándi csoport vezetője:{" "}
                        <span className="bold">Oláh István</span>
                    </p>
                    <p className="align-center">3973 Cigánd, Kertköz u. 20.</p>
                    <p className="align-center">Tel: 47/334-151</p>

                    <div className="civil_szervezetek_img margin_top_civil_szervezetek">
                        <img
                            src="/images/middle_content_pics/civil_szervezetek_pics/civil5_iskolasokert_alapitvany.jpg"
                            alt="Egy zöld krétatábla a háttérben, előtérben asztalon könyvek és íróeszközök egy pohárban."
                        />
                    </div>
                    <p className="align-center bold uppercase">
                        Cigándi Általános Iskola Tanulóiért Alapítvány
                    </p>
                    <p>Alapítva: 2014.12.17.</p>
                    <p>
                        I.1./ Az Alapítvány neve: Cigándi Általános Iskola
                        Tanulóiért Alapítvány
                    </p>
                    <p>
                        I.2./ Az Alapítvány székhelye: 3973 Cigánd, Iskola utca
                        12/A.
                    </p>
                    <p>
                        I.3./ Az Alapítvány időtartama: az Alapítvány
                        határozatlan időtartamra jön létre.
                    </p>
                    <p>II. Az Alapítvány céljai:</p>
                    <p>
                        1./ Az alapítvány létrehozásának célja a cigándi
                        székhelyű Kántor Mihály Általános Iskola tanulóinak
                        anyagi támogatása, a művelődéshez, kultúrához való jog
                        gyakorlásához szükséges feltételek megteremtése, az
                        esélyegyenlőség biztosítása. Az alapítvány ilyen irányú
                        működéséhez az anyagi, szellemi feltételek előteremtése,
                        összefogása az alábbi tevékenységek által:
                    </p>
                    <ul className="ul_civil_szervezetek">
                        <li>
                            Sport, tanulmányi versenyek, szabadidős programok
                            lebonyolítása, díjazása, egyéb költségeinek viselése
                            (pl: utazás, étkezés)
                        </li>
                        <li>
                            Tehetséggondozó foglalkozások szervezése, díjazása
                        </li>
                        <li>
                            Kiemelt teljesítményű tanulók fejlesztése,
                            felzárkóztatása
                        </li>
                        <li>Iskola eszközállomány fejlesztése</li>
                        <li>Gyermekbarát tantermek kialakítása</li>
                        <li>
                            Tanulmányi kirándulások szervezése, (gyerekek,
                            pedagógusok)
                        </li>
                        <li>
                            Partnerkapcsolatok ápolásának járulékos költségei
                        </li>
                        <li>Nyári táborozások szervezése</li>
                        <li>
                            Szabadidős képességfejlesztő kül- és beltéri
                            eszközök, játékok beszerzése
                        </li>
                        <li>
                            Bevétellel járó iskolai rendezvények
                            anyagköltségének megelőlegezése
                        </li>
                        <li>
                            Külföldi és belföldi testvériskolai kapcsolatok
                            ápolása
                        </li>
                        <li>
                            Hátrányos helyzetű gyerekek életkörülményeiből adódó
                            hátrányok csökkentése
                        </li>
                        <li>mentálhigiéniés gondozás.</li>
                    </ul>
                    <p className="align-center">
                        A kuratórium elnöke:{" "}
                        <span className="bold">Némethné Szendrei Csilla</span>
                    </p>
                    <p className="align-center">tel: +36 47 534 000</p>
                    <p className="align-center">
                        e-mail: km-iskola@t-online.hu
                    </p>

                    <div className="civil_szervezetek_img margin_top_civil_szervezetek">
                        <img
                            src="/images/middle_content_pics/civil_szervezetek_pics/civil6_lovas_egyesulet.jpg"
                            alt="Egy barna színű ló, háttérben zöld sövény és fák lombja."
                        />
                    </div>
                    <p className="align-center bold uppercase">
                        Etele Hagyományőrző Lovas és Szabadidősport Egyesület
                    </p>
                    <p className="bold margin_top_civil_szervezetek2">
                        Céljai és feladatai:
                    </p>
                    <p>Hobbilovasok felkarolása, összefogása.</p>
                    <p>
                        A magyar lovas és íjász hagyományok életben és tudatban
                        tartása, népszerűsítése.
                    </p>
                    <p>
                        A magyar lovas kultúra hagyományainak megőrzése,
                        elsajátítása.
                    </p>
                    <p>
                        A lovak és a lovaglás adta élmények megismertetése és
                        megszerettetése elsősorban a gyermek és
                        fiatalkorosztállyal.
                    </p>
                    <p>
                        Gyógyászati jelleggel lovagoltatás valamint
                        készségfejlesztő lovas oktatás.
                    </p>
                    <p>
                        A hagyományos népi-paraszti kultúra és gazdálkodás
                        népszerűsítése.
                    </p>
                    <p>
                        A hagyományos magyar állatfajták megismertetése,
                        tartásának népszerűsítése.
                    </p>
                    <p className="bold margin_top_civil_szervezetek2">
                        Tevékenységeink:
                    </p>
                    <p>Szabadidő hasznos eltöltése sport programokkal.</p>
                    <p>
                        Táborok, szakkörök, rendezvények szervezése,
                        lebonyolítása.
                    </p>
                    <p>
                        Tevékenységeink közé tartozik továbbá kulturális és
                        közművelődési feladatok ellátása is.
                    </p>
                    <p>Elérhetőségeink:</p>
                    <p>Címünk: 3973 Cigánd, Petőfi u. 111.</p>

                    <p className="bold align-center margin_top_civil_szervezetek2">
                        Szabóné Horváth Eszter
                    </p>
                    <p className="align-center">az egyesület elnöke</p>
                    <p className="align-center">Tel: 20/238-4005</p>
                    <p className="align-center">
                        E-mail: etele.egyesulet@gmail.com
                    </p>

                    <div className="civil_szervezetek_img margin_top_civil_szervezetek">
                        <img
                            src="/images/middle_content_pics/civil_szervezetek_pics/civil7_ifjusagi.jpeg"
                            alt="Sportlabdák fehér háttéren."
                        />
                    </div>
                    <p className="align-center bold uppercase">
                        Cigándi Innovációs és Ifjúsági Sportegyesület
                    </p>
                    <p>
                        A Cigándi Innovációs és Ifjúsági Sportegyesület
                        utánpótlás nevelése 2006 tavaszától fordult komollyá.
                    </p>
                    <p>
                        Csapataink ezalatt a 10 év alatt szépen fejlődtek, akik
                        közöl 4 korosztály már NB-s osztályban szerepel. Már
                        óvodás kortól edzük a gyerekeket és az ifjúsági
                        csapatból kiöregedő tehetséget is próbáljuk megtartani.
                    </p>
                    <p>
                        Ezen időszak alatt 7 utánpótlás korú játékosunk került
                        NB I-es különböző korosztályos csapataihoz, akik
                        Cigándon kezdték a labdarúgást.
                    </p>
                    <p>
                        Infrastruktúránk folyamatosan fejlődik, hiszen idén
                        tavasszal 2 nagyméretű pályánk is készül. 1 db műfüves
                        és 1 db élő füves. Emellett a 2016-ban a Stadion is
                        elkészült, ahol egy kisméretű műfüves pálya és egy
                        kisméretű edzőpálya is található.
                    </p>
                    <p>
                        Igazolt gyerekeink száma közel 200 fő, akik 27
                        településről érkeznek hozzánk, hogy magas színvonalon
                        tudjanak sportolni.
                    </p>
                    <p>
                        Ezen gyerekek szállítását, illetve utaztatási költségeit
                        a Cigánd SE 100%-ban állja, ami elég ritka más
                        sportegyesületek életében!
                    </p>
                    <p className="bold margin_top_civil_szervezetek2 align-center uppercase">
                        Csapatok
                    </p>
                    <p className="bold">Utánpótlás:</p>
                    <p className="bold margin_top_civil_szervezetek2">Fiú:</p>

                    <p>1. U-7</p>

                    <p>2. U-9</p>

                    <p>3. U-11</p>

                    <p>4. U-13</p>

                    <p>5. U-14</p>

                    <p>6. U-15</p>

                    <p>7. U-17</p>

                    <p>8. U-19</p>

                    <p className="bold margin_top_civil_szervezetek2">Leány:</p>

                    <p>1. U-15</p>

                    <p>2. U-18</p>

                    <p className="bold margin_top_civil_szervezetek2">
                        Felnőtt:
                    </p>

                    <p>1. Cigánd SE</p>

                    <p>2. Cigánd SE II.</p>

                    <p className="bold margin_top_civil_szervezetek2">
                        Elérhetőségeink:
                    </p>
                    <p>3973 Cigánd, Fő út 80.</p>
                    <p className="bold margin_top_civil_szervezetek2 align-center">
                        Nagy Gábor
                    </p>
                    <p className="align-center">az egyesület elnöke</p>

                    <p className="align-center">Tel: 70/371-67-23</p>

                    <p className="align-center">E-mail: spcigand@gmail.com</p>
                </div>
            </ContentContainer>
        </>
    );
}
