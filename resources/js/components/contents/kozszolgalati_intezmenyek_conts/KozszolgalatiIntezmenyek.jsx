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
                            alt="Kormányhivatal Borsod-Abaúj-Zemplén Megyei Hivatala szöveg, Magyarország címerével."
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
                    <div className="kozszolgalati_intezmenyek_img">
                        <img
                            className="kozszolgalati_intezmenyek_img_rendorors"
                            src="/images/middle_content_pics/kozszolgalati_intezmenyek_pics/rendorors.png"
                            alt="Rendőrség címer"
                        />
                    </div>
                    <p className="bold heading_kozszolgalati_intezmenyek">
                        Cigánd Rendőrőrs
                    </p>
                    <p>3973 Cigánd, Fő utca 89.</p>
                    <p>47/334-093</p>
                    <p>20/564-5918</p>
                    <p>Segélykérő telefon: 107, 112</p>
                    <hr />
                    <div className="kozszolgalati_intezmenyek_img">
                        <img
                            className="kozszolgalati_intezmenyek_img_tuzoltosag"
                            src="/images/middle_content_pics/kozszolgalati_intezmenyek_pics/tuzoltosag.jpg"
                            alt="Katasztrófavédelem címer"
                        />
                    </div>
                    <p className="bold heading_kozszolgalati_intezmenyek">
                        Tűzoltóság
                    </p>
                    <p className="bold margin_top_kozszolgalati_intezmenyek">
                        3980 Sátoraljaújhely, Pataki út 2.
                    </p>
                    <p>Segélykérő telefon: 105, 112 47/523-140</p>
                    <p className="bold margin_top_kozszolgalati_intezmenyek">
                        Cigándi Katasztrófavédelmi Őrs
                    </p>
                    <p>3973 Cigánd, Fő utca 87.</p>
                    <p>Segélykérő telefon: 105, 112</p>
                    <hr />
                    <div className="kozszolgalati_intezmenyek_img">
                        <img
                            className="kozszolgalati_intezmenyek_img_mentoszolgalat"
                            src="/images/middle_content_pics/kozszolgalati_intezmenyek_pics/mentoszolgalat.png"
                            alt="Országos Mentőszolgálat címer"
                        />
                    </div>

                    <p className="bold heading_kozszolgalati_intezmenyek">
                        Országos Mentőszolgálat
                    </p>
                    <p>Segélykérő telefon: 104, 112</p>
                    <hr />

                    <div className="kozszolgalati_intezmenyek_img">
                        <img
                            className="kozszolgalati_intezmenyek_img_mentoszolgalat"
                            src="/images/middle_content_pics/kozszolgalati_intezmenyek_pics/polgari_vedelmi_iroda.png"
                            alt="Polgári Védelmi Iroda címer"
                        />
                    </div>

                    <p className="bold heading_kozszolgalati_intezmenyek">
                        Polgári Védelmi Iroda
                    </p>

                    <p>3980 Sátoraljaújhely, Kossuth tér 5.</p>
                    <p>47-322-027</p>
                    <p>pv@satoraljaujhely.hu</p>
                    <hr />

                    <p className="bold heading_kozszolgalati_intezmenyek">
                        Cigánd Településüzemeltetési és Városfejlesztő Nonprofit
                        Kft.
                    </p>
                    <p>3973 Cigánd, Iskola u. 23.</p>

                    <p>Tel./Fax.: 47/534-413</p>
                    <p>e-mail.: kht@c2.hu</p>
                    <hr />
                </div>
            </ContentContainer>
        </>
    );
}
