import ContentContainer from "../modules/ContentContainer";
import HeaderModule from "../modules/HeaderModule";
import "./telefonszamok.css";

export default function Telefonszamok() {
    return (
        <>
            <HeaderModule
                breadcrumb={["Önkormányzat", "Egyéb", "Telefonszámok"]}
            >
                Telefonszámok
            </HeaderModule>
            <ContentContainer>
                <div className="telefonszamok_container">
                    <div className="telefonszamok_polgarmesteri_hivatal">
                        <div>
                            <p className="bold uppercase align-center">
                                A Cigánd Közös Önkormányzati Hivatal fővonala:
                            </p>
                            <p className="bold align-center">47/534-400</p>
                        </div>
                        <hr />
                        <div className="telefonszamok_element">
                            <p className="bold">Polgármester: Oláh Krisztián</p>
                            <p>47/534-401 mellék:1010</p>
                        </div>
                        <hr />
                        <div className="telefonszamok_element">
                            <p className="bold">
                                Alpolgármester: Németh Dániel
                            </p>
                            <p>47/534-400 mellék:1000</p>
                        </div>
                        <hr />
                        <div className="telefonszamok_element">
                            <p className="bold">
                                Társ. mb. Alpolgármester: Ablonczy Dániel
                            </p>
                            <p>47/534-402 mellék:1030</p>
                        </div>
                        <hr />
                        <div className="telefonszamok_element">
                            <p className="bold">
                                Jegyző: Dr. Szepesy Márk Zoltán
                            </p>
                            <p>47/534-403 mellék:1020</p>
                        </div>
                        <hr />
                        <div className="telefonszamok_element">
                            <p className="bold">Titkárság: Fülöp Titanilla</p>
                            <p>47/534-400 mellék:1000</p>
                        </div>
                    </div>

                    <div className="telefonszamok_hatosagi_igazgatasi">
                        <div>
                            <p className="bold uppercase align-center">
                                Hatósági és igazgatási osztály
                            </p>
                        </div>
                        <hr />
                        <div className="telefonszamok_element">
                            <p className="bold">Dr. Szepesy Márk Zoltán</p>
                            <p>47/534-403 mellék:1020</p>
                        </div>
                        <hr />
                        <div className="telefonszamok_element">
                            <p className="bold">Nagyné Bodnár Beatrix</p>
                            <p>47/534-421 mellék:1070</p>
                        </div>
                        <hr />
                        <div className="telefonszamok_element">
                            <p className="bold">Dócsné Tóth Evelin</p>
                            <p>47/534-417 mellék:1180</p>
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </>
    );
}
