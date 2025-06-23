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
                    <div className="kozszolgalati_intezmenyek_img">
                        <img
                            className="kozszolgalati_intezmenyek_img_koztemeto"
                            src="/images/middle_content_pics/kozszolgalati_intezmenyek_pics/koztemeto.png"
                            alt="Sírhely illusztráció, fekete-fehér kereszttel"
                        />
                    </div>
                    <p className="bold heading_kozszolgalati_intezmenyek">
                        Cigándi Köztemető
                    </p>
                    <p>3973 Cigánd, Petőfi S. utca</p>
                    <p>Temető gondnok: Fodor István</p>
                    <p>Lakcím: 3973 Cigánd, Rózsa u. 8.</p>
                    <p>Telefon: 20/386-6081</p>
                    <hr />
                    <div className="kozszolgalati_intezmenyek_img">
                        <img
                            className="kozszolgalati_intezmenyek_img_benzinkut"
                            src="/images/middle_content_pics/kozszolgalati_intezmenyek_pics/benzinkut.jpg"
                            alt="Benzinkút ikon"
                        />
                    </div>
                    <p className="bold heading_kozszolgalati_intezmenyek">
                        Benzinkút
                    </p>
                    <p>3973 Cigánd, Vasút utca 52.</p>
                    <p>47/334-222</p>
                    <hr />
                    <div className="kozszolgalati_intezmenyek_img">
                        <img
                            className="kozszolgalati_intezmenyek_img_otp_bankomat"
                            src="/images/middle_content_pics/kozszolgalati_intezmenyek_pics/otp_bankomat.png"
                            alt="OTP Bankomat ikon"
                        />
                    </div>
                    <p className="bold heading_kozszolgalati_intezmenyek">
                        OTP Bankomat
                    </p>
                    <p>3973 Cigánd, Fő utca 28.</p>
                    <hr />
                    <div className="kozszolgalati_intezmenyek_img">
                        <img
                            className="kozszolgalati_intezmenyek_img_posta"
                            src="/images/middle_content_pics/kozszolgalati_intezmenyek_pics/posta.png"
                            alt="Magyar Posta ikon"
                        />
                    </div>
                    <p className="bold heading_kozszolgalati_intezmenyek">
                        Magyar Posta Zrt.
                    </p>
                    <p>3973 Cigánd, Petőfi utca 93.</p>
                    <p>47/334-040</p>
                    <hr />
                    <div className="kozszolgalati_intezmenyek_img">
                        <img
                            className="kozszolgalati_intezmenyek_img_takarekbank"
                            src="/images/middle_content_pics/kozszolgalati_intezmenyek_pics/takarekbank.jpg"
                            alt="TakarékBank ikon"
                        />
                    </div>
                    <p className="bold heading_kozszolgalati_intezmenyek">
                        TakarékBank Zrt.
                    </p>
                    <p>3973 Cigánd, Fő utca 55.</p>
                    <p>47/334-019</p>
                    <hr />
                    <p className="bold heading_kozszolgalati_intezmenyek">
                        Bodrogközi Többcélú Kistérségi Társulás
                    </p>
                    <p>3973 Cigánd, Fő utca 80.</p>
                    <p>47/534-400</p>
                    <p>fax:47/534-404</p>
                    <p>bodrogkoz@t-online.hu</p>
                    <hr />
                    <div className="kozszolgalati_intezmenyek_img">
                        <img
                            className="kozszolgalati_intezmenyek_img_gyogyszertar"
                            src="/images/middle_content_pics/kozszolgalati_intezmenyek_pics/gyogyszertar.jpeg"
                            alt="BENU Gyógyszertár ikon"
                        />
                    </div>
                    <p className="bold heading_kozszolgalati_intezmenyek">
                        Berta Gyógyszertár
                    </p>
                    <p>3973 Cigánd, Fő utca 43. (Járóbeteg Szakrendelő)</p>
                    <p>47/334-066</p>
                    <hr />
                    <div className="kozszolgalati_intezmenyek_img">
                        <img
                            className="kozszolgalati_intezmenyek_img_allatorvos"
                            src="/images/middle_content_pics/kozszolgalati_intezmenyek_pics/allatorvos.jpg"
                            alt="Állatorvos ikon"
                        />
                    </div>
                    <p className="bold heading_kozszolgalati_intezmenyek">
                        Állatorvos
                    </p>
                    <p>Dr. Petraskó Tamás</p>
                    <p>70/619-89-93</p>
                    <hr />
                    <div className="kozszolgalati_intezmenyek_img">
                        <img
                            className="kozszolgalati_intezmenyek_img_mwm"
                            src="/images/middle_content_pics/kozszolgalati_intezmenyek_pics/mwm.jpg"
                            alt="MVM-ÉMÁSZ Nyrt. ikon"
                        />
                    </div>
                    <p className="bold heading_kozszolgalati_intezmenyek">
                        MVM-ÉMÁSZ Nyrt.
                    </p>
                    <p>+3640282828</p>
                    <p>Cigándi Ügyfélszolgálati Fiókiroda</p>
                    <p>3973 Cigánd Vasút utca 9.</p>
                    <p>hétfő 08.00 - 12.00, szerda 14.00-18.00</p>
                    <hr />
                    <div className="kozszolgalati_intezmenyek_img">
                        <img
                            className="kozszolgalati_intezmenyek_img_vizmu"
                            src="/images/middle_content_pics/kozszolgalati_intezmenyek_pics/vizmu.jpeg"
                            alt="Zempléni Vízmű Kft. ikon"
                        />
                    </div>
                    <p className="bold heading_kozszolgalati_intezmenyek">
                        Zempléni Vízmű Kft.
                    </p>
                    <p>3980 Sátoraljaújhely, Kazinczy út 24.</p>
                    <p>47/322-455, 47/322-627</p>
                    <p>fax: 47/322-143</p>
                    <p>
                        <a
                            href="http://www.zemplenivizmukft.hu"
                            target="_blank"
                        >
                            www.zemplenivizmukft.hu
                        </a>
                    </p>
                    <p>Ügyfélszolgálat:</p>
                    <p>3973 Cigánd, Vasút utca 9.</p>
                    <p>csütörtök: 09.00-12.00</p>
                </div>
            </ContentContainer>
        </>
    );
}
