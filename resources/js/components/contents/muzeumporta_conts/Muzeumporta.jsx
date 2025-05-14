import HeaderModule from '../modules/HeaderModule';
import ContentContainer from '../modules/ContentContainer';
import './muzeumporta.css';

export default function Muzeumporta() {
    return (
        <>
            <HeaderModule breadcrumb={["Kultúra", "Kultúra", "Múzeumporta"]}>
                Járóbeteg Szakellátó
            </HeaderModule>
            <ContentContainer>
                <div className="muzeumporta_container">
                    <div className='muzeumporta_img margin_bottom_img'>
                        <img src="/images/middle_content_pics/muzeumporta_pics/muzeumporta1.jpg" alt="Múzeumporta nyitvatartás és belépőjegy árak" />
                    </div>
                    <div className='muzeumporta_img'>
                        <img src="/images/middle_content_pics/muzeumporta_pics/muzeumporta2.jpg" alt="Múzeumporta belépőjegy árak" />
                    </div>
                </div>
            </ContentContainer>
        </>
    );
};