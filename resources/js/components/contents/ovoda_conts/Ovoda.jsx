import "./ovoda.css";
import HeaderModule from "../modules/HeaderModule";
import ContentContainer from "../modules/ContentContainer";
import DownloadFile from "../modules/DownloadFile";

export default function Ovoda() {
    return (
        <>
            <HeaderModule
                breadcrumb={["Városunk", "Oktatás", "Óvoda és Bölcsőde"]}
            >
                Óvoda és Bölcsőde
            </HeaderModule>
            <ContentContainer>
                <div className="ovoda_container">
                    <p className="bold align-center uppercase">
                        Cigándi Tündérkert Óvoda és Bölcsőde
                    </p>
                    <p className="align-center">3973 Cigánd, Iskola utca 10.</p>
                    <p className="align-center">Tel.: 47/534-415</p>
                    <p className="align-center">
                        E-mail: cigandovoda@gmail.com
                    </p>

                    <p className="bold align-center uppercase">
                        Bodrogköz Kincsei Bölcsőde
                    </p>
                    <p className="align-center">3973 Cigánd, Fő u. 38.</p>
                    <p className="align-center">
                        <a href="http://bolcsode.cigand.hu" target="_blank">
                            Web: bolcsode.cigand.hu
                        </a>
                    </p>
                    <p className="align-center">Tel: 47/534-416</p>

                    <div className="ovoda_img">
                        <img
                            src="/images/middle_content_pics/ovoda_pics/ovoda1.jpg"
                            alt="Óvoda épülete bejárat"
                        />
                    </div>

                    <p>
                        6 csoportos óvodánkban 135 gyerek nevelésével
                        foglalkozunk. Cigánd nagyon gazdag néphagyománnyal
                        rendelkezik. Pedagógiai Programunk a helyi népi
                        hagyományokon alapul. A cigándi óvoda nevelőtestülete a
                        80-as évek végétől – kötelezte el magát a néphagyományok
                        ápolása iránt.
                    </p>
                    <p>
                        Azt a sok szépet, szellemiséget, amit összegyűjtöttek a
                        nagyszülők, dédszülők, nem hagytuk elveszni. A régmúlt
                        használati eszközeit az óvodában beépítettük az apró
                        gyerekek mindennapi életébe, és évről évre
                        megismertetjük a gyerekekkel.
                    </p>
                    <p>
                        Az óvodánkba lépőt egy igazi falusi környezet fogadja.
                        Minden csoportszobában fellelhetők a paraszti kultúra
                        tárgyi eszközei, amelyek a gyermekek számára elérhetőek.
                        A szövés – fonás tárgyi emlékei az itt élő nép szépség
                        igényéről és díszítő fantáziájáról tanúskodnak.
                    </p>
                    <div className="ovoda_img">
                        <img
                            src="/images/middle_content_pics/ovoda_pics/ovoda2.jpg"
                            alt="Óvoda épülete játszóudvarral"
                        />
                    </div>
                    <p>
                        De nem csak a tárgyi világot kapták emlékül, hanem a sok
                        szép dalt, köszöntőt, mesét, játékot, amelyek ma már a
                        cigándi óvodások mindennapjait átszövik.
                    </p>
                    <p>
                        A gyermekeket ebben a légkörben neveljük, amely
                        óhatatlanul a szülőföld szeretetére, hagyományaink
                        ápolására nevel. Munkánkban nagy fontosságot kapnak a
                        jeles napok, ünnepek, amelyik mindegyike valamilyen
                        népszokást takar.
                    </p>
                    <p>
                        - cigándi lakodalmas, zöldágjárás, csúfolódó, bodrogközi
                        gyermekjátékok, pásztorjáték (betlehemezés), vásári
                        hívogatók, farsangi szokások, farsangi ételek receptjei,
                        katonásdi, botos játék, kanásztánc, húsvéti szokások
                        (locsolkodás, tojásdíszítés népi motívumokkal).
                    </p>
                    <p>
                        1999-ben felfigyeltünk egy Országos Egyesületre, akik
                        hasonlóképpen gondolkodtak ez a „Néphagyományőrző
                        Egyesület.” Azóta együttgondolkodva dolgozunk és
                        ápoljuk, éltetjük a népi hagyományokat. Ez az Egyesület
                        évről-évre egyre jobban növekszik.
                    </p>
                    <div className="ovoda_img">
                        <img
                            src="/images/middle_content_pics/ovoda_pics/ovoda3.jpg"
                            alt="Óvoda épülete játszóudvarral, napelemekkel felszerelt tető"
                        />
                    </div>
                    <p>
                        Az Egyesület fennállásának 10. évfordulója alkalmából
                        „Mester Óvoda” címet adományozott a néphagyomány éltetés
                        területén élenjáró óvodáknak. Ennek a kitüntetett
                        elismerésnek lehettünk részesei, Pécsett a X. országos
                        találkozón, ahol átvehettük a „Néphagyományőrző Mester
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
                        virágnak és hitvallás erejével élnek a mesék. Ha meg
                        állsz e földön, tündérregét mond a vizek lilioma. Ha
                        beszélsz a néppel, mely itt honos, a szíved egyszerre
                        gyorsabban veri vérütéseit.”
                    </p>
                    <p>
                        Ezek a gondolatok örökérvényűek számunkra és reméljük,
                        hogy gyermekeink szívében, lelkében is tovább élnek
                        majd.
                    </p>

                    <div className="ovoda_csoportok">
                        <p className="align-right bold">
                            Szűcs Erika intézményvezető
                        </p>
                        <p className="align-right">
                            1.csoport : Katica csoport, Lehóczki Sándorné
                            csoportvezető
                        </p>
                        <p className="align-right">
                            2.csoport: Pillangó csoport, Gönczi Zoltánné
                            csoportvezető
                        </p>
                        <p className="align-right">
                            3.csoport: Hóvirág csoport, Kovács Lászlóné
                            csoportvezető
                        </p>
                        <p className="align-right">
                            4.csoport: Napsugár csoport, Timári Zoltánné
                            csoportvezető
                        </p>
                        <p className="align-right">
                            5.csoport: Süni csoport, Fodor Éva csoportvezető
                        </p>
                        <p className="align-right">
                            6.csoport: Tulipán csoport, Kántor Éva csoportvezető
                        </p>
                    </div>

                    <DownloadFile
                        file="/documents_files/ovoda/kozzeteteli_lista_ovoda_2009.pdf"
                        extension_file="pdf.png"
                        size="0.1 MB"
                    >
                        Közzétételi lista 2009.
                    </DownloadFile>
                </div>
            </ContentContainer>
        </>
    );
}
