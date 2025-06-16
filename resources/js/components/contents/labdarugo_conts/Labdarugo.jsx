import ContentContainer from "../modules/ContentContainer";
import HeaderModule from "../modules/HeaderModule";
import "./labdarugo.css";

export default function Labdarugo() {
    return (
        <>
            <HeaderModule breadcrumb={["Kultúra", "Sport", "Labdarúgó pálya"]}>
                Labdarúgó pálya
            </HeaderModule>
            <ContentContainer>
                <div className="labdarugo_container">
                    <div className="labdarugo_img">
                        <img
                            src="/images/middle_content_pics/labdarugo_pics/labdarugo1.jpg"
                            alt=""
                        />
                    </div>
                    <div className="labdarugo_img margin-top-labdarugo">
                        <img
                            src="/images/middle_content_pics/labdarugo_pics/labdarugo2.jpg"
                            alt="Sportpálya bejárata."
                        />
                    </div>
                    <div className="labdarugo_img margin-top-labdarugo">
                        <img
                            src="/images/middle_content_pics/labdarugo_pics/labdarugo3.jpg"
                            alt="Sportpálya oldalról, másik oldalon lelátó."
                        />
                    </div>
                    <div className="labdarugo_img margin-top-labdarugo">
                        <img
                            src="/images/middle_content_pics/labdarugo_pics/labdarugo4.jpg"
                            alt="Sportpálya oldalról és az utca felőli lelátó."
                        />
                    </div>
                    <div className="labdarugo_img margin-top-labdarugo">
                        <img
                            src="/images/middle_content_pics/labdarugo_pics/labdarugo5.jpg"
                            alt="Sportpálya épülete."
                        />
                    </div>
                    <div className="labdarugo_img margin-top-labdarugo">
                        <img
                            src="/images/middle_content_pics/labdarugo_pics/labdarugo6.jpg"
                            alt="Kispadok."
                        />
                    </div>
                    <div className="labdarugo_img margin-top-labdarugo">
                        <img
                            src="/images/middle_content_pics/labdarugo_pics/labdarugo7.jpg"
                            alt="Lelátó közelről."
                        />
                    </div>
                </div>
            </ContentContainer>
        </>
    );
}
