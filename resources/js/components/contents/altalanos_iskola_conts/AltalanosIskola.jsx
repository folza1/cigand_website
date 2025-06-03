import ContentContainer from "../modules/ContentContainer";
import HeaderModule from "../modules/HeaderModule";
import "./altalanos_iskola.css";

export default function AltalanosIskola() {
    return (
        <>
            <HeaderModule
                breadcrumb={["Városunk", "Oktatás", "Általános Iskola Cigánd"]}
            >
                Általános Iskola Cigánd
            </HeaderModule>
            <ContentContainer>
                <div className="altalanos_iskola_container">
                    <p className="bold align-center uppercase">
                        Kántor Mihály Általános Iskola
                    </p>
                    <p className="align-center">3973 Cigánd, Iskola utca 8.</p>
                    <p className="align-center">cigandiskola@gmail.com</p>
                    <p className="align-center">
                        <a href="https://www.kmiskola.hu/" target="_blank">
                            www.kmiskola.hu
                        </a>
                    </p>
                    <div className="altalanos_iskola_img">
                        <img
                            src="/images/middle_content_pics/altalanos_iskola_pics/altalanos_iskola1.jpeg"
                            alt="Cigándi Kántor Mihály Általános Iskola épülete mellette a sportpálya"
                        />
                    </div>
                    <div className="altalanos_iskola_igazgato_img">
                        <img
                            src="/images/middle_content_pics/titkarsag_pics/titkarsag.svg"
                            alt="Iskolaigazgató női fantomkép"
                        />
                    </div>
                    <p className="bold align-center">
                        Némethné Szendrei Csilla
                    </p>
                    <p className="align-center">iskolaigazgató</p>
                    <p className="align-center">Tel: 47/534-000</p>

                    <div className="altalanos_iskola_titkar_img">
                        <img
                            src="/images/middle_content_pics/titkarsag_pics/titkarsag.svg"
                            alt="Iskolatitkár nőifantomkép"
                        />
                    </div>

                    <p className="bold align-center">Titkárság:</p>
                    <p className="align-center">Csercsáné Oláh Anita</p>
                    <p className="align-center">Tel/Fax: 47/534-000</p>

                    <p className="align-center uppercase margin_top_altalanos_iskola">
                        <a
                            href="https://kir2info.kir.hu/pub/Index/029178"
                            target="_blank"
                        >
                            KIR.HU Letölthető Dokumentumok
                        </a>
                    </p>

                    <p className="align-center uppercase margin_top_altalanos_iskola bold">
                        Névadónk
                    </p>

                    <p>
                        Iskolánk 1998. szeptember 1-jén vette fel Kántor Mihály,
                        a Bodrogköz amatőr néprajzkutatójának nevét, aki 1885.
                        január 31-én született a szomszédos Tiszakarádon.
                        Földműves szülei nem akarták tovább taníttatni, de
                        tanítója a, bodrogközi mondák és történetek
                        versbeöntője, Berecz Károly nemcsak néprajzi
                        érdeklődését keltette fel, de a sárospataki
                        tanítóképzőben való tanulását is lehetővé tette.
                    </p>
                    <p>
                        Annak elvégzése után, 1905-ben került előtanítónak
                        Cigándra, majd egy év múlva véglegesítették, később
                        igazgatótanítóként dolgozott, és itt is élt 1968.
                        szeptember 2-án bekövetkezett haláláig.
                    </p>
                    <p>
                        Közvetlen kapcsolat fűzte a néprajztudomány néhány
                        vezető egyéniségéhez: Bátkay Zsigmondhoz, Lajtha
                        Lászlóhoz és Gönyey Sándorhoz. Első néprajzi jellegű
                        dolgozata, Az ódalgazda 1909-ben jelent meg. Ezt követő
                        évben pedig a Bodrogközi szólásmódok című gyűjteménye.
                        15 év szünet után sorra jelentek meg tanulmányai,
                        részdolgozatai. 1926-ban Bodrogközi adatok a sarlós
                        aratáshoz, 1927-ben Hogyan készül a karikás?, még ebben
                        az évben Az ezeréves cigándi malom, 1929-ben a Cigándi
                        cigányok gyékénymunkája, 1932-ben a Bodrogköz című
                        kiadványa és 1940-ben Népművészet Zemplénben címmel
                        jelentek meg publikációi.
                    </p>
                    <p>
                        A közélet munkájában is néptanítóhoz híven aktívan részt
                        vett. 1911-ben megalapította a Keresztyén Ifjúság
                        Egyesületet. Szintén alpítója és egyben vezetője is volt
                        Leventeegyesületnek és a "Magyar búzavirág"
                        táncegyüttesnek, amely legnagyobb sikerét a cigándi
                        keménycsárdással érte el. Gyűjtötte a kender és len
                        feldolgozásával kapcsolatos adatokat, szőtteseket.
                        Gyűjtésének legszebb darabjaiból kiállítást rendezett,
                        amit Néprajzi Múzeum vezetői, köztük Győrffy István is
                        megtekintettek. A cigándiak kiemelkedően szép
                        szőtteseinek múltjával, jelenével és formakincsével
                        kapcsolatos gyűjteménye 1961-ben jelent meg, Bodrogközi
                        len- és kendermunkák című könyvecskéjében. A 18 színes
                        ábrát is tartalmazó kiadványban található szőttesmintát
                        keresztszemes öltéssel hímezni is lehet.
                    </p>
                    <p>
                        Kántor Mihályról elmondhatjuk, hogy nemcsak a jelenben
                        élt, hanem érdekelte és kutatta a múltat, gondolva a
                        jövőre is. "Ami a magyarságunkban szép volt a múltban,
                        átmenteni a jövő számára"- vallotta. Életének
                        alapgondolata volt adni és szolgálni. Ezt tette akkor
                        is, amikor a cigándi szövő-szövetkezet asszonyainak
                        munkáját állandó tanácsokkal segítette.
                    </p>
                    <p>
                        Személyét a saját maga által megfogalmazott sorokkal
                        jellemezhetjük: "Aki a népélettel foglalkozik, az nem
                        lehet rossz ember, mert a néppel csak az tud
                        foglalkozni, aki vele együtt érez. E nélkül az
                        együttérzés nélkül etnográfiával, néprajzzal foglalkozni
                        teljes lehetetlenség."
                    </p>
                    <p className="bold">
                        Forrás: Balassa Iván: Kántor Mihály (1885-1968)
                    </p>

                    <div className="altalanos_iskola_img">
                        <img
                            src="/images/middle_content_pics/altalanos_iskola_pics/altalanos_iskola2.jpg"
                            alt="Cigándi Kántor Mihály Általános Iskola felső tagozat épülete."
                        />
                    </div>

                    <p className="align-center uppercase margin_top_altalanos_iskola bold">
                        Iskolatörténet
                    </p>

                    <p>
                        Korabeli dokumentumok tanúsága szerint a református hit
                        felvétele óta biztos, hogy folyik oktatás a faluban.
                        Ebben az időben még csak a tanító személyét örökítették
                        meg, így bővebb információnk nincs az iskolai életről,
                        de azt tudjuk, hogy a kántori feladatokat is a tanító
                        látta el.
                    </p>
                    <p>
                        Az első igazi néptanító 1868-ban került Cigándra, abban
                        az évben, amikor az ősi iskolaépületet a Temető (mai
                        Iskola) utcában megépítették, ekkor még csak két
                        teremmel. Sőregi Márton nemcsak kitűnő tanító volt,
                        hanem házi gyógyszereivel és gyógymódjaival igen sok
                        betegen segített, mivel ekkor még a településen nem volt
                        orvosi ellátás.
                    </p>
                    <p>
                        A Tisza szabályozását követően, a jobb megélhetés
                        reményében sokan települtek be a faluba, s a lakosság
                        számának növekedésével nőtt az iskoláskorú gyerekek
                        száma is. Az 1900-ig osztatlan egytanítós iskolát
                        bővíteni kellett, ezért meghirdettek egy segédtanítói
                        állást.
                    </p>
                    <p>
                        1905-ben növekedett a tantermek száma is, megépült az
                        Iskola utcában egy új református iskola két tanítói
                        lakással. Ekkor már két kántortanítói állás és két
                        nőtanítói állás várt betöltésre. Az 1905/06-os tanévben
                        került Cigándra Kántor Mihály is, akit egy év után
                        véglegesítettek. A tantermek számát két lépcsőben,
                        1907-ben és 1912-ben tovább növelték egy-egy teremmel,
                        majd 1926-ban az ősi iskolaépület két tanteremmel
                        bővült. 1929-ben újabb tanítói állást szerveztek, s még
                        ebben az évben állami segélyből felépítettek három
                        tantermet és egy tanítói szolgálati lakást.
                    </p>

                    <div className="altalanos_iskola_img">
                        <img
                            src="/images/middle_content_pics/altalanos_iskola_pics/altalanos_iskola3.jpg"
                            alt="Cigándi Kántor Mihály Általános Iskola felső tagozat épülete bejárat."
                        />
                    </div>

                    <p>
                        Ennek szükségességét jól mutatja az iskolába beíratott
                        tanulók száma, amely 1904 és 1934 között 278-ról 572-re
                        emelkedett. Volt olyan osztály, ahol a létszám
                        meghaladta 80 főt. Az 1930-as években a reformátuson
                        kívül a faluban az izraelita népiskola, a községhez
                        tartozó Erzsébet- és Bélatanyán pedig egy-egy római
                        katolikus népiskola működött. 1939-ben két állami
                        iskolát szerveztek három tanteremmel. A tanköteles
                        tanulók száma ekkor már 750 volt. Az 1952/53-as tanévben
                        19 osztályban és 9 tanteremben szűkösködött a 768
                        tanuló. A pedagógusi munkát 17 nevelő látta el a
                        szükséges 22 helyett. Ilyen körülmények között nem
                        lehetett komoly és értékálló munkát végezni.
                    </p>
                    <p>
                        A tanyai iskolák körzetesítését követően 1963-ban 954
                        emelkedett a diákok száma, és 38 tanító, tanár
                        foglalkozott az oktatásukkal, nevelésükkel. A felső
                        tagozat szétszórtan, az alsó tagozat állandóan délután
                        járt iskolába. A Temető utcai (mai központi) iskolát
                        1963-ban emeletráépítéssel bővítették, ezáltal 6-ra
                        növekedett a tantermek száma. Itt működött 1964-68
                        között a cigándi gimnázium is.
                    </p>
                    <p>
                        1970-es évek elején tovább javult a tantermi ellátottság
                        helyzete. Ebben az időben épült meg a központi iskola
                        területén egy háromtantermes épületszárny és ettől
                        néhány méterre a kétszintes új iskola hat tanteremmel,
                        tornateremmel, korszerű vizes blokkal, az iskolai
                        könyvtárral és nevelői szobával. Ehhez kapcsolódott még
                        egy szolgálati lakás is, amit azóta tanteremmé
                        alakítottak át. Ezzel a nagy volumenű beruházással
                        megszünt a váltótanítás, jobb feltételek között
                        tanulhatnak a cigándi gyerekek.
                    </p>
                    <p className="bold">
                        Forrás: Hajdú Imre: Cigánd története 1289-1972
                    </p>
                </div>
            </ContentContainer>
        </>
    );
}
