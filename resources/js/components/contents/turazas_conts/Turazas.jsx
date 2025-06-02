import HeaderModule from "../modules/HeaderModule";
import ContentContainer from "../modules/ContentContainer";
import "./turazas.css";

export default function Turazas() {
    return (
        <>
            <HeaderModule breadcrumb={["Kultúra", "Szabadidő", "Túrázás"]}>
                Túrázás
            </HeaderModule>
            <ContentContainer>
                <div className="turazas_container">
                    <div className="turazas_img">
                        <img
                            src="/images/middle_content_pics/turazas_pics/turazas.jpg"
                            alt="Dombos, erdős táj"
                            className="turazas_container_img"
                        />
                    </div>

                    <p>
                        A Tisza és az árapasztó tározó árvízvédelmi töltésén
                        kiépített több kilométernyi aszfaltozott kerékpárút,
                        biztonságos és látnivalókban gazdag kerékpározást tesz
                        lehetővé.
                    </p>

                    <p>
                        Ily módon megközelített falvak, a természetföldrajzi
                        környezet, a strand és horgászati lehetőségek kellemes
                        kikapcsolódást nyújtanak az ide látogató turisták
                        számára.
                    </p>

                    <div className="turazas_img2">
                        <img
                            src="/images/middle_content_pics/turazas_pics/turazas2.jpg"
                            alt="Alföldi Kék Túra logója"
                            className="turazas_container_img2"
                        />
                    </div>

                    <p>
                        Cigándot érinti az Alföldi Kék Túra útvonala.
                        Pecsételésre a Gátőrházban (Erzsébet-tanya) van
                        lehetőség.
                    </p>
                </div>
            </ContentContainer>
        </>
    );
}
