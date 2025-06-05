import ContentContainer from "../modules/ContentContainer";
import HeaderModule from "../modules/HeaderModule";
import "./zemplenagard_oktatas.css";

export default function ZemplenagardOktatas() {
    return (
        <>
            <HeaderModule
                breadcrumb={["Városunk", "Oktatás", "Zemplénagárd Oktatás"]}
            >
                Zemplénagárd Oktatás
            </HeaderModule>
            <ContentContainer>
                <div className="zemplenagard_oktatas_container">
                    <div className="zemplenagard_oktatas_img">
                        <img
                            src="/images/middle_content_pics/zemplenagard_oktatas_pics/zemplenagard_oktatas.jpg"
                            alt='Rajzolt kép az iskoláról "school" felirattal és zászlóval'
                        />
                    </div>
                    <p className="bold align-center uppercase">
                        Kántor Mihály Általános Iskola, Óvoda és Alapfokú
                        Művészetoktatási Intézmény
                    </p>

                    <p className="align-center">Zemplénagárdi tagintézménye</p>

                    <p className="align-center">
                        3977 Zemplénagárd, Tuzséri utca 9.
                    </p>

                    <p className="align-center">Tel.: 47/395-052</p>

                    <p className="bold align-center uppercase margin_top_zemplenagard_oktatas">
                        Cigándi Tündérkert Óvoda és Bölcsőde Zemplénagárdi
                        tagóvodája
                    </p>
                    <p className="align-center">3977 Zemplénagárd, Fő u. 23.</p>
                    <p className="align-center">Óvodavezető: Bernáth Béláné</p>

                    <p className="align-center">Tel.: 47/395-216</p>
                </div>
            </ContentContainer>
        </>
    );
}
