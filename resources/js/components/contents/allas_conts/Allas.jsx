import './allas.css';
import HeaderModule from '../modules/HeaderModule';
import ContentContainer from '../modules/ContentContainer';

export default function Allas() {
    return (
        <>
            <HeaderModule breadcrumb={["Városunk", "Információk", "Állás"]}>
                Állásajánlatok
            </HeaderModule>
            <ContentContainer>
                <div className='allas_container'>
                    <p className='bold'>„Tisztelt Álláskeresők!</p>
                    <div className='allas_img'>
                        <img src="/images/middle_content_pics/allas_pics/allas.png" alt="Állásajánlat tábla" />
                    </div>
                    <p>Cigánd Város Önkormányzata szívesen várja azon (elsősorban Cigándon élő, vagy letelepülni vágyó) álláskeresők, kiemelten a fiatalok jelentkezését, akik Cigándon képzelik el jövőjüket! Büszkén mondhatjuk el, hogy mind többen bíznak Cigándban, bíznak abban, hogy van jövőjük településünkön, köszönhetően fáradhatatlan törekvéseinknek! Szeretnénk, ha minél többen keresnének meg minket személyesen, vagy önéletrajzukkal, hiszen számtalan lehetőség adódik hosszabb-rövidebb munkavégzésre! Ezen lehetőségeket akkor tudjuk a legjobban kihasználni, ha nem csupán az adott pillanatban cselekszünk, hanem ismerve és nyilvántartva a szándékokat, erőforrásokat időben tudunk tervezni, van miből meríteni, és a kapacitásokat figyelembe vesszük fejlesztési elképzeléseink tervezésénél is!</p>
                    <p>Várjuk Önöket akár személyesen, akár fényképes, szakmai önéletrajzukkal is a Polgármesteri Hivatalban, illetve a cigand@cigand.hu e-mail címen!</p>
                    <p className='bold align-right'>Cigánd Város Önkormányzata”</p>
                </div>
            </ContentContainer>
        </>
    );
};