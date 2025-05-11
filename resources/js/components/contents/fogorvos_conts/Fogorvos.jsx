import ContentContainer from '../modules/ContentContainer';
import HeaderModule from '../modules/HeaderModule';
import './fogorvos.css';

export default function Fogorvos() {
    return (
        <>
            <HeaderModule breadcrumb={["Városunk", "Egészségügy", "Fogorvos"]}>
                Fogorvos
            </HeaderModule>
            <ContentContainer>
                <div className='fogorvos_container'>
                    <p className='bold'>Bodrogközi Kistérségi Járóbeteg Szakellátó Központ</p>
                    <p>3973 Cigánd, Fő u. 43.</p>
                    <p>Fogorvosi Rendelő</p>
                    <div className='fogorvos_img'>
                        <img src="/images/middle_content_pics/haziorvosok_pics/jarobeteg_szakellato.jpg" alt="Járóbeteg Szakellátó Ambulancia" />
                    </div>
                    <p className='bold'>Dr. Dolhai Gréta</p>
                    <p>fogszakorvos</p>
                    <p>Tel.: 47/534-430</p>

                    <div className='fogorvos_img'>
                        <img style={{ width: '35%' }} src="/images/middle_content_pics/fogorvos_pics/fogorvos.jpeg" alt="Egészséges csillogó fog" />
                    </div>

                    <p className='bold'>Rendelési idő:</p>
                    <p>hétfő: 	 13.00 - 19.00</p>
                    <p>kedd: 	 14.30 - 17.00</p>
                    <p>szerda: 	 14.30 - 19.00</p>
                    <p>csütörtök: 	 -</p>
                    <p>péntek: 	 10.00 - 17.00</p>

                    <p className='bold uppercase'>Kedden iskolafogászat!</p>
                </div>
            </ContentContainer>
        </>
    );
};