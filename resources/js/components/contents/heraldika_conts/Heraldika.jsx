import HeaderModule from '../modules/HeaderModule';
import ContentContainer from '../modules/ContentContainer';
import './heraldika.css';

export default function Heraldika() {
    return (
        <>
            <HeaderModule breadcrumb={["Városunk", "Információk", "Heraldika"]}>
                Heraldika
            </HeaderModule>
            <ContentContainer>
                <div className='heraldika_container'>
                    <p>Álló, háromszögletű, ezüsttel és kékkel hasított, az alapjában hullámvonallal vágott katonai pajzs, amelynek (heraldikailag) jobb oldali, ezüst mezejében egy kékbe öltöztetett, botot és pipát tartó, a hátán fejszét viselő férfialak lebeg kissé balra fordulva, a (heraldikailag) bal oldali, kék mezejében pedig egymást keresztező ezüst vasvilla, gereblye és kasza. A pajzson bíborral bélelt, nyitott (rostélyos) katonai sisak, rajta háromlevelű arany korona, amelyből jobbra forduló, növekvő arany szarvas emelkedik ki. A foszlányok színe mindkét oldalon vörös és arany. A pajzs alatt egy szalag lebeg CIGÁND felirattal.</p>
                    <div className='heraldika_img'>
                        <img src="/images/middle_content_pics/heraldika_pics/heraldika.jpg" alt="Cigánd címere" />
                    </div>
                    <p>(A címer fő eleme, a pajzs a régi Nagycigánd és Kiscigánd községeknek a pecsétábrán megőrzött jelképeit tartalmazza, amelynek a pajzson való elhelyezkedése a két község egyesítésére utal. A pajzs talpát vágó hullámvonal a Tisza folyót jelképezi. Az oromdíszként szereplő szarvas egyaránt utal a táj természeti adottságaira, illetve a községek életében nagy szerepet játszó birtokos Sennyey és Vay családokra.)</p>
                </div>
            </ContentContainer>
        </>
    );
};