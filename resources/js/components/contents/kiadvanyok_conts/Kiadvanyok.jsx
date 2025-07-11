import ContentContainer from "../modules/ContentContainer";
import HeaderModule from "../modules/HeaderModule";
import "./kiadvanyok.css";

export default function Kiadvanyok() {
    return (
        <>
            <HeaderModule
                breadcrumb={["Városunk", "Információk", "Kiadványaink"]}
            >
                Kiadványaink
            </HeaderModule>
            <ContentContainer>
                <div className="kiadvanyok_container">
                    <p>
                        Tájékoztatjuk az érdeklődőket, hogy az alább látható
                        könyveket megvásárolhatják a{" "}
                        <span className="bold">
                            Cigánd Városi Művelődési Központban
                        </span>{" "}
                        3973 Cigánd, Fő utca 38. szám alatt a helyszínen vagy
                        e-mailben a megrendelő szóra kattintva a feltüntetett
                        árakon. Egyéb vásárlási feltételekkel kapcsolatban
                        keresse a művelődési ház dolgozóit a{" "}
                        <span className="bold">+36-47/534-419</span>{" "}
                        telefonszámon vagy a{" "}
                        <span className="bold">varosikonyvtar@cigand.hu</span>{" "}
                        e-mail címen!
                    </p>

                    <p className="bold align-center margin_top_kiadvanyok">
                        Nagy István
                    </p>
                    <p className="align-center bold">A keskeny úton járva</p>
                    <div className="kiadvanyok_img">
                        <img
                            src="/images/middle_content_pics/kiadvanyok_pics/kiadvanyok1.jpg"
                            alt="A keskeny úton járva című könyv borítója a Református templommal, közben fényesen ragyog a Nap."
                        />
                    </div>
                </div>
            </ContentContainer>
        </>
    );
}
