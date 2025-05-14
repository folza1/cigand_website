import HeaderModule from '../modules/HeaderModule';
import ContentContainer from '../modules/ContentContainer';
import './muvelodesi_haz.css';

export default function MuvelodesiHaz() {
    return (
        <>
            <HeaderModule breadcrumb={["Kultúra", "Kultúra", "Művelődési Ház"]}>
                Művelődési Ház
            </HeaderModule>
            <ContentContainer>
                <div className="muvelodesi_haz_container">
                    <p className='bold align-center'>Nagy Dezső Művelődési Ház</p>

                    <p className='align-center'>3973 Cigánd, Fő utca 38.</p>

                    <p className='align-center'>Tel.: 47/534-418</p>

                    <p className='align-center'>e-mail: muvhazcigand@gmail.com</p>

                    <div className='muvelodesi_haz_img'>
                        <img src="/images/middle_content_pics/muvelodesi_haz_pics/muvelodesi_haz1.jpg" alt="Cigándi Művelődési Ház szemből bejárat" />
                    </div>

                    <p>A kultúra mindig is kiemelt jelentőségű volt a cigándi önkormányzat feladatai között, s jelenleg is az.</p>
                    <p>Cigándon a növekvő igények miatt elengedhetetlenül szükségessé vált egy kultúrház építése, melyet 1950-ben adtak át. Volt benne olvasóterem, színpaddal rendelkező nagy bálterem, ami egyúttal filmvetítésre is alkalmas volt. Intézményes keretek között működő kulturális életről azóta beszélhetünk. A 60-as évek közepétől igazi művelődési központtá fejlődött az intézmény. A neves fővárosi művészek közreműködésével tartott rendszeres előadásokat a Bodrogköz több településéről, de még Szabolcs megyéből is látogatták. A sokszínűséget igazolja, hogy a Déryné Színház évente 10 alkalommal tartott előadást, író-olvasó találkozókon megfordult itt Jókai Anna, Baranyi Ferenc, neves képzőművészek kiállításaiban gyönyörködhetett a közönség (Vasarely, Jolán Goss Bettelheim, Robert Cope), rendhagyó irodalom órákat tartott Lukács Sándor, Bánffy György.</p>
                    <p>A kor neves fővárosi művészei közül láthatta többek között Latabár Kálmánt, Besenyei Ferencet, Kabos Gyulát, Hofi Gézát a cigándi és a bodrogközi közönség. Az ország legjelentősebb zenekarai is adtak itt hangversenyeket könnyűzenei műfajban. Ebben az időben 250-300 hivatásos előadóművész fordult meg évente a Művelődési Házban, Kiváló Ifjúsági Klub, Színjátszó Kör működött, itt tartották próbáikat a tánccsoportok, itt működött a mozi is.</p>
                    
                    <div className='muvelodesi_haz_img'>
                        <img src="/images/middle_content_pics/muvelodesi_haz_pics/muvelodesi_haz2.jpeg" alt="A névadó Nagy Dezső szobor" />
                    </div>

                    <p>Az időközben korszerűtlenné vált 50 éves Művelődési Ház teljes körű felújítását, átépítését határozta el a képviselő-testület, melynek anyagi hátterét 2000. tavaszára meg is teremtette. Az áprilisban még vendégeket fogadó művelődési ház augusztus 20-án már megszépült, átalakult környezetben fogadta a látogatókat. Az átalakítással sikerült elérni, hogy a Bodrogköz legnagyobb befogadóképességű színházterme, mely konferenciák rendezésére is alkalmas Cigándon valósult meg. A felújított Művelődési Ház az ünnepélyes avatáskor Nagy Dezső nevét vette fel.</p>
                    <p>A cigándi Nagy Dezső Művelődési Ház és Könyvtár tevékenységével meghatározó szerepet tölt be a Cigánd és a Bodrogköz településeinek közművelődési életében. Alkalmazkodik közvetlen környezete művelődési igényeihez, elvárásaihoz és kielégíti a lakosság művelődési igényeit. Tartalmi munkája igen sokrétű és változatos. Programokat, rendezvényeket szervez kiemelten kezelve a rétegművelődést és felvállalva a kulturált szórakozást. Nagy hangsúlyt fektet a hagyományok ápolására és azok kibővítésére, megújítására.</p>
                    <p>Műsorstruktúrájában a már meglévő hagyományokra építő és a folyamatosan fellépő új igényekhez alkalmazkodó, a helyi sajátosságokat is figyelembe vevő programok és formák jelennek meg:
                        - nemzeti ünnepek, évfordulók méltó megünneplése
                        - korosztályi művelődést szolgáló rendezvények, programok (gyermek, ifjúsági, felnőtt műsorok, játszóházak, vetélkedők).
                        - zenés-táncos estek, könnyűzenei koncertek, falunapok, fesztiválok, regionális rendezvények.
                        - magasabb művészeteket közvetítő előadások, komolyzenei koncertek, kiállítások,
                        - egyéb formák, a más szervezetek rendezvényeinek befogadása, kiszolgálása
                        - teljes körűen kiszolgálja a körzet andragógiai és közművelődési igényeit.
                        - közművelődési tevékenységében tág teret ad a helyi, amatőr és fiatal művészeti kezdeményezéseknek, az alapfokú művészetoktatási intézményekkel jó kapcsolatot ápol.
                        - támogatja az intézmény mikrokörnyezetének közösségépítő kezdeményezésit
                        - széles körű együttműködést épít ki a település közintézményeivel, civil szervezeteivel.
                        - közösségi portálok segítségével gyors és hatékony kommunikációt tart az érdeklődőkkel.
                        E célok megvalósításában tudatosan támaszkodunk a helyi társadalom közművelődési igényeire, kulturális fogyasztási szokásaira, a hagyományok ápolására. Ehhez a legkorszerűbb módszertani és technikai lehetőségeket igyekszünk használni.
                        A Nagy Dezső Művelődési Ház és Könyvtár valóban a kultúra háza, a közösségek igazi színtere</p>

                </div>
            </ContentContainer>
        </>
    );
};