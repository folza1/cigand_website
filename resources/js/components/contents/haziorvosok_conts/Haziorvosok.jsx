import './haziorvosok.css';
import HeaderModule from '../modules/HeaderModule';
import ContentContainer from '../modules/ContentContainer';
export default function Haziorvosok() {
    return (
        <>
            <HeaderModule breadcrumb={["Városunk", "Egészségügy", "Háziorvosok"]}>
                Háziorvosok
            </HeaderModule>
            <ContentContainer>
                <div className='haziorvosok_container'>
                    <p className='bold'>Bodrogközi Kistérségi Járóbeteg Szakellátó Központ</p>
                    <p>3973 Cigánd, Fő u. 43.</p>
                    <div className='haziorvosok_img'>
                        <img src="/images/middle_content_pics/haziorvosok_pics/jarobeteg_szakellato.jpg" alt="Járóbeteg Szakellátó Ambulancia" />
                    </div>
                    <p className='bold'>Cigánd I. sz. vegyes háziorvosi körzet</p>
                    <p>Dr. Petricska Miklós</p>
                    <p>Tel.: 47/534-432</p>
                    <div className='haziorvosok_img'>
                        <img style={{ width: '35%' }} src="/images/middle_content_pics/haziorvosok_pics/petricska.png" alt="Férfi orvos" />
                    </div>
                    <p>Rendelési idő:</p>

                    <p>hétfő-kedd-szerda:</p>
                    <p>8.00 - 11.30</p>
                    <p>csütörtök-péntek:</p>
                    <p>13.00 - 16.00</p>
                    <hr />

                    <p className='bold'>Cigánd II. sz. vegyes háziorvosi körzet</p>
                    <p>Dr. Miskolczi Ivett</p>
                    <p>Tel.: 47/534-433</p>
                    <div className='haziorvosok_img'>
                        <img style={{ width: '35%' }} src="/images/middle_content_pics/haziorvosok_pics/miskolczi.png" alt="Nő orvos" />
                    </div>
                    <p>Rendelési idő:</p>

                    <p>hétfő-kedd-szerda:</p>
                    <p>13.00 - 16.00</p>
                    <p>csütörtök-péntek:</p>
                    <p>8.00 - 11.30</p>
                </div>
            </ContentContainer>
        </>
    );
};