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
                <div className="ingatlanok_container"></div>
            </ContentContainer>
        </>
    );
}
