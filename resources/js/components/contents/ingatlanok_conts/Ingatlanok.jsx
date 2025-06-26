import ContentContainer from "../modules/ContentContainer";
import HeaderModule from "../modules/HeaderModule";
import "./ingatlanok.css";

export default function Ingatlanok() {
    return (
        <>
            <HeaderModule
                breadcrumb={["Városunk", "Információk", "Ingatlanok"]}
            >
                Eladó Ingatlanok Cigándon
            </HeaderModule>
            <ContentContainer>
                <div className="ingatlanok_container">
                    <hr />
                    <p className="bold align-center">
                        Cigánd, Attila utcában (hrsz 306) 500 nm építési telek
                        eladó.
                    </p>
                    <hr />
                    <p className="bold align-center">
                        Cigánd, Rózsa u. 14. szám (hrsz 305) alatt 2475 nm
                        építési telek eladó.
                    </p>

                    <p className="align-center">Ár megegyezés szerint.</p>

                    <p className="align-center">
                        Érdeklődni az alábbi telefonszámon lehet:
                    </p>

                    <p className="align-center">70/392-8220</p>
                    <hr />
                    <p className="bold align-center">
                        Cigánd, Rekesz utca 27. szám alatti családi ház
                    </p>

                    <p className="align-center">
                        - 3 szoba, fürdőszoba, folyosó, központi fűtés
                    </p>

                    <p className="align-center">- melléképületekkel</p>

                    <p className="align-center">- 800 öl telek</p>

                    <p className="bold  align-center">
                        Érdeklődni a helyszínen és az alábbi telefonszámon
                        lehet:
                    </p>

                    <p className="align-center">Fodor Zoltánné 47/334-556</p>

                    <div className="ingatlanok_img_container">
                        <div className="ingatlanok_img">
                            <img
                                src="/images/middle_content_pics/ingatlanok_pics/ingatlan1.1.jpg"
                                alt="Ház udvara"
                            />
                        </div>
                        <div className="ingatlanok_img">
                            <img
                                src="/images/middle_content_pics/ingatlanok_pics/ingatlan1.2.jpg"
                                alt="Ház lépcsős bejárat"
                            />
                        </div>
                        <div className="ingatlanok_img">
                            <img
                                src="/images/middle_content_pics/ingatlanok_pics/ingatlan1.3.jpg"
                                alt="Ház kerítéssel"
                            />
                        </div>
                    </div>
                    <hr />
                    <p className="bold align-center">
                        Cigánd, Petőfi S. utca 157. szám alatti családi ház
                    </p>

                    <p className="align-center">- (8781 m2-es telek + ház)</p>

                    <p className="align-center ">
                        Érdeklődni személyesen Csáki Balázs Petőfi S u.,
                    </p>

                    <p className="align-center">
                        vagy a 06-47/334-137-es telefonszámon lehet.
                    </p>

                    <div className="ingatlanok_img_container">
                        <div className="ingatlanok_img">
                            <img
                                src="/images/middle_content_pics/ingatlanok_pics/ingatlan2.1.jpg"
                                alt="Kapu, udvar."
                            />
                        </div>
                        <div className="ingatlanok_img">
                            <img
                                src="/images/middle_content_pics/ingatlanok_pics/ingatlan2.2.jpg"
                                alt="Kapu, háttérben ház."
                            />
                        </div>
                    </div>
                    <hr />
                    <p className="bold align-center">
                        Cigánd, Széchenyi utca 8. szám alatti családi ház
                    </p>

                    <p className="align-center">
                        - melléképülettel (garázs, ólak)
                    </p>

                    <p className="align-center">- kerttel (1250 öl)</p>

                    <p className="align-center">
                        Érdeklődni személyesen az Iskola. u. 15. szám alatt,
                    </p>

                    <p className="align-center">
                        vagy az alábbi telefonszámon lehet: 06-47/334-130
                    </p>

                    <div className="ingatlanok_img_container">
                        <div className="ingatlanok_img">
                            <img
                                src="/images/middle_content_pics/ingatlanok_pics/ingatlan3.1.jpg"
                                alt="Kerítés, piros színű ház."
                            />
                        </div>
                        <div className="ingatlanok_img">
                            <img
                                src="/images/middle_content_pics/ingatlanok_pics/ingatlan3.2.jpg"
                                alt="Ház oldalról."
                            />
                        </div>
                        <div className="ingatlanok_img">
                            <img
                                src="/images/middle_content_pics/ingatlanok_pics/ingatlan3.3.jpg"
                                alt="Udvar, háttérben garázs."
                            />
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </>
    );
}
