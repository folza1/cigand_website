import HeaderModule from "../modules/HeaderModule";
import ContentContainer from "../modules/ContentContainer";
import "./titkarsag.css";

export default function Titkarsag() {
    return (
        <>
            <HeaderModule
                breadcrumb={["Önkormányzat", "Közös Önk. Hivatal", "Titkárság"]}
            >
                Titkárság
            </HeaderModule>
            <ContentContainer>
                <div className="titkarsag_container">
                    <p className="bold align-center">
                        Cigándi Közös Önkormányzati Hivatal
                    </p>
                    <p className="align-center">3973 Cigánd Fő utca 80.</p>

                    <p className="align-center">Tel.: 47/534-400</p>
                    <p className="align-center">cigand@cigand.hu</p>

                    <div className="titkarsag_img">
                        <img
                            src="/images/middle_content_pics/titkarsag_pics/titkarsag.svg"
                            alt="Cigánd titkárság vezető fantomkép"
                        />
                    </div>
                    <p className="align-center">Fülöp Titanilla</p>

                    <p className="align-center margin-bottom-titkarsag">titkárságvezető</p>

                    <p className='bold align-center uppercase'>Ügyfélfogadás</p>

                    <div>
                        <p>Hétfőn:</p>
                        <p>nincsen</p>
                    </div>

                    <hr />

                    <div>
                        <p>Kedd:</p>	<p>08.00-12.00</p>
                    </div>

                    <hr />


                    <div>
                        <p>Szerda:</p>	<p>08.00-12.00 és 13.00-16.00</p>
                    </div>

                    <hr />


                    <div>
                        <p>Csütörtök:</p>	<p>08.00-14.00</p>
                    </div>

                    <hr />


                    <div>
                        <p>Péntek:</p>	<p>08.00-12.00</p>
                    </div>

                    <hr />


                    <div>
                        <p>Szombat:</p>	<p>nincsen</p>
                    </div>

                    <hr />


                    <div>
                        <p>Vasárnap:</p>
                        <p>nincsen</p>
                    </div>
                </div>
            </ContentContainer>
        </>
    );
}
