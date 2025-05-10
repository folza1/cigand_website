import './koszonto.css';
import HeaderModule from '../modules/HeaderModule';
import ContentContainer from '../modules/ContentContainer';

export default function Koszonto() {
    return (
        <>
            <HeaderModule breadcrumb={["Városunk", "Információk", "Köszöntő"]}>
                Köszöntő
            </HeaderModule>
            <ContentContainer>
                <div className='koszonto_container'>
                    <p>Barátsággal és szeretettel köszöntöm Önt Cigánd város hivatalos honlapján! Örömmel üdvözlöm Önt, aki tájékozódni szeretne a mindennapok történéseivel kapcsolatban, és eligazodni a helyi szolgáltatások terén; Önt, aki internet-böngészőként oldalunkra tévedt, vagy országjáróként érdeklődik településünk és térségünk iránt; s végül, de nem utolsó sorban, Önt, akinek cége régiónkban találta meg - vagy éppen most keresi - gazdasági számításait!
                    </p>
                    <div className='koszonto_img'>
                        <img src="/images/middle_content_pics/koszonto_pics/polgarmester.jpg" />
                    </div>
                    <p>
                        A Tisza- Bodrog-Latorca folyók ölelésében élte évszázadok során napjait Cigánd,sok más Bodrogközi településsel együtt. Ez az ölelés áldásos is volt, mert távol tartott tőlünk tatárt, törököt, de sokszor szenvedni kellett a túlcsordult szeretettől, ha kiléptek a medrükből, s meglátogatták őseink földjeit, házait. Helységünk néveredete nem teljesen tisztázott.
                    </p>
                    <p>
                        Legvalószínűbb egy honfoglalás kori birtokosunknak a személyneve. Mindenesetre már 1289-ben oklevél örökítette meg nevét, sőt az 1923-ban történt egyesülésig két Cigándot/Kis és Nagycigánd/ tartottak számon. A letűnt idők küzdelmeiben bőven kivették a részüket az itt lakók, de nem hiába! A láp és a mocsár helyére olyan termőföldet varázsoltak, hogy később a közeli piacokat ők látták el jó minőségű burgonyával, káposztával. Megélhetésünket azonban nem mindig biztosította e föld. Sokan rajzottak ki Amerikába a XIX. század elején a könnyebb megélhetés reményében. Ugyanez a kiáramlás kezdődött meg az 1950-es 60'as évek végén,csak már nem a tengerentúlra, hanem Miskolcra, Ózdra, Budapestre. A Cigándi ember soha nem adta fel hitét, reménységét, bizakodását. Megtartotta az apáról fiúra szálló szellemi örökséget. Hogyan is maradhatott volna fenn e nélkül az a számtalan sok népdal, mese, népballada, a Cigándi keménycsárdás, az egyszerűségében is lelket gyönyörködtető Cigándi szőttesek kavalkádja? E kincsek, értékek összegyűjtésére olyan országos hírű néprajzosok, folkloristák jöttek el ide, mint Lajtha László, Gönyey Sándor, Vass Lajos, Kaposi Edit vagy Vásárhelyi László. Mi is adtunk országunknak jeles Cigándinkat: Sőregi Mártont, Kántor Mihályt, Román Sándort. S bár nincs régi kastélyunk, várunk, de településünk közepén ékesedik református templomunk, mely alapköveit jóval a reformáció előtt rakták s melynek keleti szárnyát még a husziták építették. Mende-monda kering arról, hogy Kossuth Lajos itt lovagolt át egyszer a Tisza túloldalára! Két miniszterelnököt láthattak a szerencsésebb Cigándiak: a híres Gömbös Gyulát, sokkal később pedig Lázár Györgyöt. Az országgyűlés egykori elnöke Szabad György viszont 1992-ben avatta fel a II: világháborús emlékművünket. Az idők során többször is változott járási székhelyünk. Tartoztunk Királyhelmechez (a mai Szlovákia területén helyezkedik el) Ricséhez, Sátoraljaújhelyhez. Most hozzánk tartoznak az alsó -bodrogközi települések. Mai szóhasználattal élve Cigánd a Bodrogközi Kistérség központja. 2004. július 1-jén megkaptuk a városi rangunkat. A múlt példáiból erőt merítve élhetővé és élvezhetővé kell tenni jelenünket, s perspektívát nyújtani a jövő generációjának. Szeretnénk, ha meglátogatja városunkat, akkor ön is megismerkedne méltán híres „apró bélesünkkel”, átélje a tiszavirágzást, meglátogatná korhű falumúzeumunkat és élvezné a messze földön híres Cigándi vendégszeretetünket.
                    </p>
                    <p className='bold'>
                        Tiszta szívvel várjuk Önt szeretett városunkban,
                    </p>
                    <p className='bold align-right'>Oláh Krisztián</p>

                    <p className='align-right'>Cigánd város polgármestere</p>

                    <p className='align-right'>A Bodrogközi Többcélú Kistérségi Társulás Elnöke</p>
                </div>
            </ContentContainer>
        </>
    );
};