import ContentContainer from "../modules/ContentContainer";
import HeaderModule from "../modules/HeaderModule";
import "./kozszolgalati_intezmenyek.css";

export default function KozszolgalatiIntezmenyek() {
    return (
        <>
            <HeaderModule
                breadcrumb={[
                    "Városunk",
                    "Információk",
                    "Közszolgálati Intézmények",
                ]}
            >
                Közszolgálati Intézmények
            </HeaderModule>
            <ContentContainer>
                <div className="kozszolgalati_intezmenyek_container">
                    <div className="kozszolgalati_intezmenyek_img">
                        <img
                            className="kozszolgalati_intezmenyek_img_img"
                            src="/images/middle_content_pics/kozszolgalati_intezmenyek_pics/kormanyhivatal.png"
                            alt=""
                        />
                    </div>

                    <p>Cím: 3525 Miskolc, Városház tér 1.</p>
                    <p>
                        <a href="https://kormanyhivatalok.hu/" target="_blank">
                            Honlap:
                            www.kormanyhivatal.hu/hu/borsod-abauj-zemplen
                        </a>
                    </p>
                    <p>Levelezési cím: 3530 Miskolc, Pf.: 367.</p>
                    <p>E-mail: hivatal@borsod.gov.hu</p>
                    <p>Telefon: (46) 512-901</p>
                    <p>Telefax: (46) 512-903</p>
                    <p className="bold">
                        Ügyfélfogadási idő: H-Cs: 8.00-16.30, P: 8.00-14.00
                    </p>

                    <hr />
                </div>
            </ContentContainer>
        </>
    );
}
