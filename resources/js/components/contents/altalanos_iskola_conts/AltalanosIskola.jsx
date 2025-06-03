import ContentContainer from "../modules/ContentContainer";
import HeaderModule from "../modules/HeaderModule";
import "./altalanos_iskola.css";

export default function AltalanosIskola() {
    return (
        <>
            <HeaderModule
                breadcrumb={["Városunk", "Oktatás", "Általános Iskola Cigánd"]}
            >
                Általános Iskola Cigánd
            </HeaderModule>
            <ContentContainer>
                <div className="altalanos_iskola_container">
                    <p className="bold align-center uppercase">
                        Kántor Mihály Általános Iskola
                    </p>
                    <p className="align-center">3973 Cigánd, Iskola utca 8.</p>
                    <p className="align-center">cigandiskola@gmail.com</p>
                    <p className="align-center">
                        <a href="https://www.kmiskola.hu/" target="_blank">
                            www.kmiskola.hu
                        </a>
                    </p>
                    <div className="altalanos_iskola_img">
                        <img
                            src="/images/middle_content_pics/altalanos_iskola_pics/altalanos_iskola1.jpeg"
                            alt="Cigándi Kántor Mihály Általános Iskola épülete mellette a sportpálya"
                        />
                    </div>
                    <div className="altalanos_iskola_igazgato_img">
                        <img
                            src="/images/middle_content_pics/titkarsag_pics/titkarsag.svg"
                            alt="Iskolaigazgató női fantomkép"
                        />
                    </div>
                    <p className="bold align-center">
                        Némethné Szendrei Csilla
                    </p>
                    <p className="align-center">iskolaigazgató</p>
                    <p className="align-center">Tel: 47/534-000</p>

                    <div className="altalanos_iskola_titkar_img">
                        <img
                            src="/images/middle_content_pics/titkarsag_pics/titkarsag.svg"
                            alt="Iskolatitkár nőifantomkép"
                        />
                    </div>

                    <p className="bold align-center">Titkárság:</p>
                    <p className="align-center">Csercsáné Oláh Anita</p>
                    <p className="align-center">Tel/Fax: 47/534-000</p>
                </div>
            </ContentContainer>
        </>
    );
}
