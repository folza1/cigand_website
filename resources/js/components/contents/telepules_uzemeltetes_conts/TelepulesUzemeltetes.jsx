import "./telepules_uzemeltetes.css";
import HeaderModule from "../modules/HeaderModule";
import ContentContainer from "../modules/ContentContainer";

export default function TelepulesUzemeltetes() {
    return (
        <>
            <HeaderModule breadcrumb={["Városunk", "Információk", "Állás"]}>
                Település-üzemeltetés
            </HeaderModule>
            <ContentContainer>
                <div className="telepules_uzemeltetes_container">AAAA</div>
            </ContentContainer>
        </>
    );
}
