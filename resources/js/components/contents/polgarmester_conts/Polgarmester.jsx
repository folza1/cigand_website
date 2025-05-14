import HeaderModule from '../modules/HeaderModule';
import ContentContainer from '../modules/ContentContainer';
import './polgarmester.css';

export default function Polgarmester() {
    return (
        <>
            <HeaderModule breadcrumb={["Önkormányzat", "Közös Önk. Hivatal", "Polgármester"]}>
                Polgármester
            </HeaderModule>
            <ContentContainer>
                <div className="polgarmester_container">
                    <p className='bold align-center'>Cigándi Közös Önkormányzati Hivatal</p>
                    <p className='align-center'>3973 Cigánd Fő utca 80.</p>

                    <p className='align-center'>Tel.: 47/534-401</p>
                    <p className='align-center'>E-mail: polgarmester@cigand.hu</p>

                    <p className='align-center'>Másodlagos e-mail: cigand@cigand.hu</p>

                    <div className='polgarmester_img'>
                        <img src="/images/middle_content_pics/polgarmester_pics/polgarmester.jpg" alt="Cigánd polgármestere Oláh Krisztián" />
                    </div>

                    <p className='align-center bold'>Oláh Krisztián</p>

                    <p className='align-center'>polgármester</p>
                </div>
            </ContentContainer>
        </>
    );
};