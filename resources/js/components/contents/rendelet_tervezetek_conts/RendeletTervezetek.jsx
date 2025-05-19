import HeaderModule from "../modules/HeaderModule";
import ContentContainer from "../modules/ContentContainer";
import "./rendelet_tervezetek.css";
import DownloadFile from "../modules/DownloadFile";

export default function RendeletTervezetek() {
    return (
        <>
            <HeaderModule
                breadcrumb={[
                    "Önkormányzat",
                    "Képviselő Testület",
                    "Rendelet tervezetek",
                ]}
            >
                Rendelet tervezetek Polgármester
            </HeaderModule>
            <ContentContainer>
                <div className="rendelet_tervezetek_container">
                    <div className="rendelet_tervezetek_img">
                        <img
                            className="rendelet_tervezetek_container_img"
                            src="/images/middle_content_pics/rendelet_tervezetek_pics/rendelet_tervezetek.jpg"
                            alt="Bírói ítélkezési kalapács, háttérben egy nyitott könyv"
                        />
                    </div>

                    <p className="bold">
                        Tájékoztató az önkormányzat egyes rendeleteinek
                        előkészítésében való társadalmi részvételről
                    </p>
                    <p>
                        Cigánd Város Önkormányzat Képviselő-testülete az
                        Önkormányzati rendeletek előkészítésben való társadalmi
                        részvétel szabályairól szóló 21/2011. (X.26.)
                        önkormányzati rendeletében határozta meg az
                        önkormányzati rendelet-tervezetek társadalmi
                        egyeztetésével kapcsolatos szabályokat.
                    </p>
                    <p>
                        Az Önkormányzat 2011. október hó 27. napjától
                        biztosítja, hogy a Képviselő-testület elé kerülő egyes
                        rendelet-tervezetek széles körben megismerhetőek
                        legyenek, azokról véleményt lehessen nyilvánítani. A
                        rendelet-tervezetek a polgármesteri hivatal
                        hirdetőtábláján, és a város hivatalos honlapján
                        tekinthetők meg.
                    </p>
                    <p>
                        A rendelet-tervezetek véleményezése írásos formában vagy
                        elektronikus úton történhet. Az írásban megfogalmazott
                        javaslatokat a polgármesternek címezve (Cigánd Város
                        Polgármestere 3973 Cigánd, Fő u. 80.), postai úton vagy
                        a polgármesteri hivatal titkárságán személyesen lehet az
                        önkormányzathoz eljuttatni.
                    </p>
                    <p>
                        A készülő tervezeteket elektronikus úton véleményezni a
                        cigand@cigand.hu e-mail címre küldött elektronikus
                        levélben módon lehet.
                    </p>
                    <p>
                        Az írásbeli és az elektronikus formátumra egyaránt
                        vonatkozik, hogy nem vehető figyelembe az a vélemény,
                        amely sérti a közerkölcsöt, a rendelet-tervezet
                        tárgyához nem illeszkedik, vagy név nélküli. A
                        vélemény-nyilvánításra rendelkezésre álló határidőt a
                        tervezetek mellett külön jelöljük. A beérkezett
                        véleményekről tipizált összefoglaló készül, amely
                        tervezetekhez hasonló módon lesz hozzáférhető.
                    </p>

                    <DownloadFile extension_file="word.png">
                        Rendelet-tervezet a talajterhelési díjról - Cigánd
                    </DownloadFile>
                </div>
            </ContentContainer>
        </>
    );
}
