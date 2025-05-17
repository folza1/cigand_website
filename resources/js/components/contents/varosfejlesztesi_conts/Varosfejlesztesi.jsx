import HeaderModule from "../modules/HeaderModule";
import ContentContainer from "../modules/ContentContainer";
import "./varosfejlesztesi.css";

export default function Polgarmester() {
    return (
        <>
            <HeaderModule
                breadcrumb={[
                    "Önkormányzat",
                    "Közös Önk. Hivatal",
                    "Városfejlesztési Osztály",
                ]}
            >
                Városfejlesztési Osztály
            </HeaderModule>
            <ContentContainer>
                <div className="varosfejlesztesi_container">
                    <p className="bold">Cigándi Közös Önkormányzati Hivatal</p>
                    <p>3973 Cigánd Fő utca 80.</p>

                    <p>Tel.: 47/534-400</p>
                    <p className="margin-bottom-varosfejlesztesi">
                        cigand@cigand.hu
                    </p>

                    <div className="varosfejlesztesi_img">
                        <img
                            src="/images/middle_content_pics/jegyzo_pics/jegyzo.png"
                            alt="Városfejlesztési Osztály osztályvezető fantomkép"
                        />
                    </div>

                    <p className="bold">Gönczi Zsolt</p>

                    <p>osztályvezető</p>
                    <p>pályázati ügyintézés</p>
                    <p className="margin-bottom-varosfejlesztesi">
                        Tel.: 47/534-425
                    </p>

                    <p className="bold uppercase">Ügyfélfogadás</p>

                    <div className="varosfejlesztesi_fogadas">
                        <div>
                            <p>Hétfőn:</p>
                            <p>nincsen</p>
                        </div>

                        <hr />

                        <div>
                            <p>Kedd:</p> <p>08.00-12.00</p>
                        </div>

                        <hr />

                        <div>
                            <p>Szerda:</p> <p>08.00-12.00 és 13.00-16.00</p>
                        </div>

                        <hr />

                        <div>
                            <p>Csütörtök:</p> <p>08.00-14.00</p>
                        </div>

                        <hr />

                        <div>
                            <p>Péntek:</p> <p>08.00-12.00</p>
                        </div>

                        <hr />

                        <div>
                            <p>Szombat:</p> <p>nincsen</p>
                        </div>

                        <hr />

                        <div>
                            <p>Vasárnap:</p>
                            <p>nincsen</p>
                        </div>

                        <hr />
                    </div>
                </div>
            </ContentContainer>
        </>
    );
}
