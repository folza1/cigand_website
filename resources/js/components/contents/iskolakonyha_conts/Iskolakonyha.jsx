import ContentContainer from "../modules/ContentContainer";
import HeaderModule from "../modules/HeaderModule";
import "./iskolakonyha.css";

export default function Iskolakonyha() {
    return (
        <>
            <HeaderModule breadcrumb={["Városunk", "Oktatás", "Iskolakonyha"]}>
                Iskolakonyha
            </HeaderModule>
            <ContentContainer>
                <div className="iskolakonyha_container">
                    <div className="iskolakonyha_img">
                        <img
                            src="/images/middle_content_pics/iskolakonyha_pics/iskolakonyha.png"
                            alt="Konyhai étel menü"
                        />
                    </div>
                    <p className="bold uppercase">600 adagos konyha</p>
                    <p>3973 Cigánd, Iskola utca 19.</p>
                    <p>Tel.: 47/334-178</p>
                </div>
            </ContentContainer>
        </>
    );
}
