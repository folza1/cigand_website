import "./telepules_uzemeltetes.css";
import HeaderModule from "../modules/HeaderModule";
import ContentContainer from "../modules/ContentContainer";
import NewsHeader from "../modules/NewsHeader";

export default function TelepulesUzemeltetes() {
    return (
        <>
            <HeaderModule
                breadcrumb={["Önkormányzat", "Egyéb", "Település-üzemeltetés"]}
            >
                Település-üzemeltetés
            </HeaderModule>
            <ContentContainer>
                <div className="telepules_uzemeltetes_container">
                    <NewsHeader new_date="2015. június 30.">
                        Tranzitfoglalkoztatás megvalósítása Cigánd városában
                    </NewsHeader>
                    <div className="telepules_uzemeltetes_img">
                        <img
                            src="/images/middle_content_pics/telepules_uzemeltetes_pics/2015-06-30_tranzit_d_big.jpg"
                            alt="Európai Unió támogatásával megvalósuló projekt táblája 89,85 millió forint támogatásról."
                        />
                    </div>
                    <a
                        href="images/middle_content_pics/telepules_uzemeltetes_pics/2015-06-30_tranzit_d_big.jpg"
                        target="_blank"
                        className="align-center bold display-block border_tu_nagyitas"
                    >
                        Nagyítás
                    </a>
                </div>
            </ContentContainer>
        </>
    );
}
