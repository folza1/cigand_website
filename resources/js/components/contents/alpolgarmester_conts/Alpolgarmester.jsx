import HeaderModule from '../modules/HeaderModule';
import ContentContainer from '../modules/ContentContainer';
import './alpolgarmester.css';

export default function Alpolgarmester() {
    return (
        <>
            <HeaderModule breadcrumb={["Önkormányzat", "Közös Önk. Hivatal", "Alpolgármester"]}>
                Alpolgármester
            </HeaderModule>
            <ContentContainer>
                <div className="alpolgarmester_container">
                    <p className='bold align-center'>Cigándi Közös Önkormányzati Hivatal</p>
                    <p className='align-center'>3973 Cigánd Fő utca 80.</p>

                    <p className='align-center'>Tel.: 47/534-400</p>

                    <div className='alpolgarmester_img'>
                        <img src="/images/middle_content_pics/jegyzo_pics/jegyzo.png" alt="Cigánd alpolgármester fantomkép" />
                    </div>

                    <p className='align-center bold'>Főállású alpolgármester:</p>
                    <p className='align-center'>Németh Dániel</p>
                    <p className='align-center margin-bottom-alpolgarmester'>E-mail: nemeth.daniel@cigand.hu</p>

                    <div className='alpolgarmester_img'>
                        <img src="/images/middle_content_pics/jegyzo_pics/jegyzo.png" alt="Cigánd másik alpolgármester fantomkép" />
                    </div>

                    <p className='align-center bold'>Társadalmi megbizatású alpolgármester: </p>
                    <p className='align-center'>Ablonczy Dániel</p>
                    <p className='align-center'>E-mail: dani.ablonczy@gmail.com</p>
                </div>
            </ContentContainer>
        </>
    );
};