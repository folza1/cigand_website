import HeaderModule from '../modules/HeaderModule';
import ContentContainer from '../modules/ContentContainer';
import './vedonoi_szolgalat.css';

export default function VedonoiSzolgalat() {
    return (
        <>
            <HeaderModule breadcrumb={["Városunk", "Egészségügy", "Védőnői Szolgálat"]}>
                Védőnői Szolgálat
            </HeaderModule>
            <ContentContainer>
                <div className='vedonoi_szolgalat_container'>
                    <p className='bold align-center'>Bodrogközi Kistérségi Járóbeteg Szakellátó Központ</p>
                    <p className='align-center'>3973 Cigánd, Fő u. 43.</p>
                    <p className='align-center'>Tel.: 47/534-439</p>
                    <div className='vedonoi_szolgalat_img'>
                        <img src="/images/middle_content_pics/haziorvosok_pics/jarobeteg_szakellato.jpg" alt="Járóbeteg Szakellátó Ambulancia" />
                    </div>
                    <p className='bold align-center'>Védőnői fogadóóra:</p>

                    <div className='vedonoi_szolgalat_img'>
                        <img className='width-30' src="/images/middle_content_pics/vedonoi_szolgalat_pics/vedono.png" alt="Védőnő fantomrajz" />
                    </div>

                    <p className='align-center'>Király Ilona</p>
                    <p className='align-center'>hétfő: <span className='bold'>8.00-9.00</span></p>
                    <p className='align-center margin-bottom-extra'>péntek: <span className='bold'>8.00-9.00</span></p>

                    <div className='vedonoi_szolgalat_img'>
                        <img className='width-30' src="/images/middle_content_pics/vedonoi_szolgalat_pics/vedono.png" alt="Védőnő fantomrajz" />
                    </div>

                    <p className='align-center'>Dócsné Kelemen Erzsébet</p>
                    <p className='align-center'>kedd: <span className='bold'>8.00-9.00</span></p>
                    <p className='align-center'>szerda: <span className='bold'>8.00-9.00</span></p>

                    <hr />
                    <p className='bold align-center margin-bottom-extra_sm'>Tanácsadások Cigánd I-II körzetben:</p>

                    <p className='bold'>Tanácsadás várandós anyák részére:</p>
                    <p>- védőnői tanácsadás: csütörtök <span className='bold'>8.00-10.00</span></p>
                    <p className='margin-bottom-extra_sm'>- MSZSZ tanácsadás: minden hónap harmadik hétfőjén: <span className='bold'>10.00-12.00</span></p>

                    <p className='bold'>Tanácsadás csecsemők és gyermekek részére:</p>
                    <p>- védőnői tanácsadás: csütörtök <span className='bold'>10.00-12.00</span></p>
                    <p>- orvossal tartott tanácsadás: csütörtök <span className='bold'>11.00-12.00</span></p>
                    <p>- MSZSZ tanácsadás: minden hónap negyedik csütörtök <span className='bold'>11.00-12.00</span></p>
                </div>
            </ContentContainer>
        </>
    );
};