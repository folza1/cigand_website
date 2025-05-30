import './tortenete.css';
import HeaderModule from '../modules/HeaderModule';
import ContentContainer from '../modules/ContentContainer';

export default function Tortenete() {
    return (
        <>
            <HeaderModule breadcrumb={["Városunk", "Információk", "Története"]}>
                Városunk Története
            </HeaderModule>
            <ContentContainer>
                <div className='tortenete_container'>
                    <p>Cigánd első írásos említése 1289-ből való. De Anonymus írásából tudjuk, hogy már a honfoglaló magyarok is megjelentek ezen a tájon, s ezt bizonyítják a Bodrogköz településein talált honfoglalás-kori temetők. Nem lehet pontosan tudni, hogy kiket találtak itt, de az ásatások során szláv és avar leletek kerültek felszínre, ugyancsak a szlávok jelenlétére utal néhány település neve. Így feltételezhető tehát, hogy Cigánd őseink megjelenése előtt már lakott település volt. Nevének eredete is vitatott. A név hallatán sokan azt gondolják, hogy cigányok lakta község, és nevét is ezekre vezetik vissza. Így volt ez a múlt század közepén is annak ellenére, hogy első okleveles említésekor a cigány törzseknek még hírük-hamvuk sem volt hazánkban, de még Európában sem. A feljegyzések a cigányok megjelenését először 1416-ban említik, és nem cigányoknak, hanem "Egyiptomból érkezett menekülteknek" nevezték őket. Van olyan feltételezés, mely szerint a "zug" szóból, a helybeliek szerint a "szigony" szóból származik a falu neve. Hogy mi az igazság? Sosem fogjuk megtudni. De a cigándiak számára a legelfogadhatóbb magyarázat Anonymus feljegyzéseiből levezethető névmagyarázat, amelynek alapja a következő : "Az Úr megtestesülésének 937. esztendejében Árpád vezér elküldvén seregeit, az egész földet, mely a Tisza és a Bodrog közé esik, Ugocsáig minden lakójával együtt elfoglalta. Mialatt több napon át ott időztek, a vezér és az övéi látták a föld termékenységét, mindenféle vad bőségét, meg azt, hogy milyen gazdag halban a Tisza és a Bodrog folyam, ezért a földet kimondhatatlanul megszerették." Tehát letelepedtek itt és a földet törzsek szerint felosztották. Életmódjuk az maradt, amit megszoktak: a mozgó legeltetés és a téli szállások nyújtotta állandóság, melyek a későbbi falvak magjai lettek. A szállásokat családokról, illetve foglalkozásokról nevezték el. Cigánd esetében tehát egy feltehetően Árpád-kori török-magyar személynévről van szó, s a község neve innen eredeztethető. Cigánd évszázadokon át a Tisza, a Bodrog és a Karcsa folyók szorításában élő, néhány dombtetőre épült település volt. Az állandó áradás következtében szinte átgázolhatatlan mocsaras, lápos területek vették körül. A lápok között csak télen és meleg nyarakon voltak járható utak, az őszi-tavaszi áradáskor sajkákkal lehetett közlekedni, melyek egyetlen fatörzsből készített lélekvesztők voltak.</p>
                    <div className='tortenete_img'>
                        <img src="/images/middle_content_pics/tortenete_pics/tortenete1.jpg" alt="Cigándi tavacska" />
                    </div>
                    <p>Termőföld nem volt, a megélhetést a halászat, vadászat, harmatkása- és sulyomszedés, gyékényszövés jelentette. Nyáron átmentek a szomszéd Szabolcsba aratni és nyomtatni. 1327-1377 között bizonyíthatóan a Tomaj nemzetség Henei-ágának birtokában volt. Az 1347-ig egységes birtokként említett települést egy birtokosztályos per szakította ketté. Ekkor nevezték el a Tisza melletti területet Nagycigándnak, az ettől távolabbi részt Kiscigándnak.</p>
                    <div className='tortenete_img'>
                        <img src="/images/middle_content_pics/tortenete_pics/tortenete2.jpg" alt="Cigándi Petőfi utca, háttérben Református templom" />
                    </div>
                    <p>Az iratok tanúsága szerint Cigánd tulajdonosai, földbirtokosai voltak többek között a Berencsi, Losonczy, Serédy, Anárcsy, Sennyei, Vay és Ibrányi családok. A Tisza hosszú ideig meghatározta az itt élő emberek életét. A folyó szabályozását hosszas huzavona után 1857-ben kezdték meg, és két év alatt elkészítették a tiszai és a bodrogi töltéseket Tokajig. A folyóktól elhódított településeken megkezdődhetett a mezőgazdasági termelés. A földterület nagysága 9887 holdra emelkedett. Az évszázadok alatt lerakódott szerves anyagok tápértéke miatt rendkívül jó termőföldek voltak. A parasztság nem ragaszkodott a régi, megszokott dolgokhoz, mert minden újat, ami hasznosnak látszott kipróbált, és ha jónak találták, átvették. Ennek a kísérletező kedvnek az eredménye, hogy a múlt század közepe után a burgonya termesztésének mestereivé váltak, sőt az a hír járja, hogy a korai újkrumplinak a felfedezése is az ő nevükhöz fűződik. Hasonlóan szép eredményeket értek el a lótenyésztésben is. Ez idő tájt telepedtek le itt az iparosok (ácsok, csizmadiák, kovácsok, kötélverők, molnárok, stb.), kereskedők és kocsmárosok.</p>
                    <div className='tortenete_img'>
                        <img src="/images/middle_content_pics/tortenete_pics/tortenete3.jpg" alt="Cigándi utca, házak, lovaskocsi" />
                    </div>
                    <p>A 20. században már Cigánd volt a Bodrogköz legnagyobb települése. Ebben a században látványos fejlődésen ment át a falu. 1922-ben Kis- és Nagycigánd vezetése az egyesülés mellett döntöttek, megalkották az új községi szabályrendeletet, és több infrastrukturális döntést hoztak. Ekkor határoztak a körorvosi állás megszervezéséről, vásártartási jog kérelmezéséről, a közútfejlesztéshez való hozzájárulásról és elvi döntés született a villanyvilágításról, amelynek gyakorlati megvalósítására 1950-es években került sor. 1934-ben már két orvos gyógyított Cigándon, s megszervezték a védőnői szolgálatot. 1972 óta vízvezeték hálózat szolgáltatja az ivóvizet.</p>
                    <p className='bold align-right'>Forrás:</p>
                    <p className='bold align-right'>Hajdú Imre: Cigánd története 1289-1972</p>
                </div>
            </ContentContainer>
        </>
    );
};