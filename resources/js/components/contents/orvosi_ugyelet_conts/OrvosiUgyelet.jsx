import HeaderModule from '../modules/HeaderModule';
import ContentContainer from '../modules/ContentContainer';
import './orvosi_ugyelet.css';

export default function OrvosiUgyelet() {
    return (
        <>
            <HeaderModule breadcrumb={["Városunk", "Egészségügy", "Orvosi Ügyelet"]}>
                Orvosi Ügyelet
            </HeaderModule>
            <ContentContainer>
                <div className='orvosi_ugyelet_container'>
                    <p>Az ügyeleti alapellátást 2023. április 1-től térségünkben is az Országos Mentőszolgálat látja el, egységes, két elemből álló, betegközpontú rendszer (háziorvosi ügyeleti ellátás és sürgősségi ügyelet) működtetésével.</p>

                    <p className='bold align-center'>Az egységes ügyeleti telefonszám április 1-től: 1830</p>

                    <div className='orvosi_ugyelet_img'>
                        <img src="/images/middle_content_pics/orvosi_ugyelet_pics/orvosi_ugyelet.jpg" alt="Orvosi Ügyelet Szalag" />
                    </div>

                    <p className='align-center uppercase bold'>HÁZIORVOSI ÜGYELETI ELLÁTÁS</p>

                    <p>A háziorvosi ügyelet a sürgős - a következő rendelési időig nem halasztható - orvosi tevékenységek elvégzése céljából szervezett ellátás., az alábbi időpontokban vehető igénybe:</p>

                    <p className='bold align-center'>hétköznap 16:00-22:00 között</p>
                    <p className='bold align-center'>hétvégén, ünnepnapon 08:00-14:00 között</p>

                    <hr />

                    <p className='bold align-center uppercase'>Elérhetőségek:</p>

                    <hr />

                    <p className='bold align-center'>Nappali és éjszakai orvosi ügyelet - Sátoraljaújhely</p>
                    <p>Cím: 3980 Sátoraljaújhely, Mártírok u. 14.</p>
                    <p>Telefonszám: 1830</p>
                    <p>Nyitvatartás: 16.00-08.00 (hétvégén, ill. ünnepnapon: 08.00-14.00)</p>

                    <hr />

                    <p className='bold align-center'>Nappali orvosi ügyelet - Sárospatak</p>
                    <p>Cím: 3950 Sárospatak, Comenius u. 16.</p>
                    <p>Telefonszám: 1830</p>
                    <p>Nyitvatartás: 16.00-22.00 (hétvégén, ill. ünnepnapon: 08.00-14.00)</p>

                    <hr />

                    <p className='bold align-center'>Nappali és éjszakai orvosi ügyelet - Kisvárda</p>
                    <p>Telefonszám: 1830</p>
                    <p>Cím: 4600 Kisvárda, Árpád u. 26. (Szent Damján Görögkatolikus Kórház)</p>
                    <p>Nyitvatartás: 16.00-08.00 (hétvégén, ill. ünnepnapon: 08.00-14.00)</p>

                    <hr />

                    <p className='align-center uppercase bold'>SÜRGŐSSÉGI ÜGYELETI VAGY MENTŐELLÁTÁS</p>

                    <p>Központi ügyeleti telefonszám: 1830</p>

                    <p>Az ügyeleti időben hirtelen jelentkező, illetve súlyos egészségügyi problémák esetére nyújt magas szakmai színvonalú és biztonságos megoldást:</p>

                    <p className='bold align-center'>hétköznap 22:00-08:00 között</p>
                    <p className='bold align-center'>hétvégén, ünnepnapon 14:00-08:00 között</p>

                    <p>A beteg a központi telefonszám hívásával: szakszerű tanácsot kap, szükség esetén a tartózkodási helyére sürgősségi ügyeleti autót, vagy életveszély esetén azonnali mentőt küldenek, a vármegye bármely településén is tartózkodjon az ellátásra szoruló.</p>

                    <p>A telefonszám a teljes ügyeleti időszakban, hétköznap 16:00-08:00 között, hétvégén, ünnepnapon egész nap hívható.</p>

                    <p>Azok számára, akik személyesen keresnék fel az ügyeletet, az alábbi telephelyen erre hétköznap 22:00-08:00 között, hétvégén és ünnepnapon 14:00-08:00 között is van lehetőség:</p>

                    <p className='bold'>Cím: 3980 Sátoraljaújhely, Mártírok u. 14.</p>
                </div>
            </ContentContainer>

        </>
    );
};