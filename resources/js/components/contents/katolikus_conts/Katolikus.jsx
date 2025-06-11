import ContentContainer from "../modules/ContentContainer";
import HeaderModule from "../modules/HeaderModule";
import "./katolikus.css";

export default function Katolikus() {
    return (
        <>
            <HeaderModule
                breadcrumb={["Kultúra", "Szabadidő", "Katolikus Egyházközség"]}
            >
                Katolikus Egyházközség
            </HeaderModule>
            <ContentContainer>
                <div className="katolikus_container">
                    <div className="katolikus_img">
                        <img
                            src="/images/middle_content_pics/katolikus_pics/katolikus1.jpg"
                            alt="Katolikus Gyümölcsoltó Boldogasszony Kápolna oldalról nézve"
                        />
                    </div>
                    <p className="bold align-center uppercase">
                        Cigándi Római Katolikus Egyházközség
                    </p>
                    <p className="bold align-center">
                        Gyümölcsoltó Boldogasszony Kápolna
                    </p>
                    <p className="align-center">3973 Cigánd Hősök tere</p>
                    <p className="align-center">
                        Tiszacsermely Római Katolikus Plébánia Filiája
                    </p>
                    <p className="align-center">47/334-233</p>

                    <p className="align-center">
                        <a
                            href="http://www.eger.egyhazmegye.hu"
                            target="_blank"
                        >
                            www.eger.egyhazmegye.hu
                        </a>
                    </p>
                    <div className="katolikus_img margin_bottom_katolikus">
                        <img
                            src="/images/middle_content_pics/katolikus_pics/katolikus2.jpg"
                            alt="Katolikus Gyümölcsoltó Boldogasszony Kápolna bejárata"
                        />
                    </div>
                    <div className="katolikus_img">
                        <img
                            src="/images/middle_content_pics/katolikus_pics/katolikus3.jpg"
                            alt="Katolikus Gyümölcsoltó Boldogasszony Kápolna elölről nézve"
                        />
                    </div>
                </div>
            </ContentContainer>
        </>
    );
}
