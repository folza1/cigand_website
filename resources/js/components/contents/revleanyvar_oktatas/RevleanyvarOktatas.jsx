import ContentContainer from "../modules/ContentContainer";
import HeaderModule from "../modules/HeaderModule";
import "./revleanyvar_oktatas.css";

export default function RevleanyvarOktatas() {
    return (
        <>
            <HeaderModule
                breadcrumb={["Városunk", "Oktatás", "Révleányvár Oktatás"]}
            >
                Révleányvár Oktatás
            </HeaderModule>
            <ContentContainer>
                <div className="revleanyvar_oktatas_container">
                    <div className="revleanyvar_oktatas_img">
                        <img
                            src="/images/middle_content_pics/zemplenagard_oktatas_pics/zemplenagard_oktatas.jpg"
                            alt='Rajzolt kép az iskoláról "school" felirattal és zászlóval'
                        />
                    </div>
                    <p className="bold align-center uppercase">
                        Kántor Mihály Általános Iskola, Óvoda és Alapfokú
                        Művészetoktatási Intézmény
                    </p>

                    <p className="align-center">Révleányvári tagintézménye</p>

                    <p className="align-center">
                        3976 Révleányvár, Dózsa Gy. utca 4.
                    </p>

                    <p className="align-center">Tel.: 47/376-045, 47/576-024</p>

                    <p className="bold align-center uppercase margin_top_revleanyvar_oktatas">
                        Cigándi Tündérkert Óvoda és Bölcsőde Révleányvári
                        tagóvodája
                    </p>
                    <p className="align-center">3976 Révleányvár, Fő u. 40.</p>
                    <p className="align-center">Óvodavezető: Iski Józsefné</p>
                </div>
            </ContentContainer>
        </>
    );
}
