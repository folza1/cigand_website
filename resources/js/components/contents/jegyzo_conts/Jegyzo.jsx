import HeaderModule from '../modules/HeaderModule';
import ContentContainer from '../modules/ContentContainer';
import './jegyzo.css';

export default function Jegyzo() {
    return (
        <>
            <HeaderModule breadcrumb={["Önkormányzat", "Közös Önk. Hivatal", "Jegyző"]}>
                Jegyző
            </HeaderModule>
            <ContentContainer>
                <div className="jegyzo_container">
                    <p className='bold align-center'>Cigándi Közös Önkormányzati Hivatal</p>
                    <p className='align-center'>3973 Cigánd Fő utca 80.</p>

                    <p className='align-center'>Tel.: 47/534-403</p>
                    <p className='align-center'>E-mail: jegyzo@cigand.hu</p>

                    <div className='jegyzo_img'>
                        <img src="/images/middle_content_pics/jegyzo_pics/jegyzo.png" alt="Cigánd jegyzője fantomkép" />
                    </div>

                    <p className='align-center bold'>Szepesy Márk Zoltán</p>

                    <p className='align-center'>jegyző</p>
                </div>
            </ContentContainer>
        </>
    );
};