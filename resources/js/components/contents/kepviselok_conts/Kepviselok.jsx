import HeaderModule from "../modules/HeaderModule";
import ContentContainer from "../modules/ContentContainer";
import "./kepviselok.css";

export default function Kepviselok() {
    return (
        <>
            <HeaderModule
                breadcrumb={[
                    "Önkormányzat",
                    "Képviselő Testület",
                    "Képviselők",
                ]}
            >
                Képviselők
            </HeaderModule>
            <ContentContainer>
                <div className="kepviselok_container">
                    <div className="kepviselok_img">
                        <img
                            src="/images/middle_content_pics/jegyzo_pics/jegyzo.png"
                            alt="Alpolgármester fantomkép aki képviselő is"
                        />
                    </div>
                    <p className="bold">Németh Dániel</p>
                    <p>alpolgármester, képviselő</p>

                    <div className="kepviselok_img">
                        <img
                            src="/images/middle_content_pics/titkarsag_pics/titkarsag.svg"
                            alt="Női képviselő fantomkép"
                        />
                    </div>
                    <p className="bold">Bodnár Andrásné </p>
                    <p>képviselő</p>

                    <div className="kepviselok_img">
                        <img
                            src="/images/middle_content_pics/jegyzo_pics/jegyzo.png"
                            alt="Férfi képviselő fantomkép"
                        />
                    </div>
                    <p className="bold">Németh István</p>
                    <p>képviselő</p>

                    <div className="kepviselok_img">
                        <img
                            src="/images/middle_content_pics/jegyzo_pics/jegyzo.png"
                            alt="Férfi képviselő fantomkép"
                        />
                    </div>
                    <p className="bold">Némethy András</p>
                    <p>képviselő</p>

                    <div className="kepviselok_img">
                        <img
                            src="/images/middle_content_pics/titkarsag_pics/titkarsag.svg"
                            alt="Női képviselő fantomkép"
                        />
                    </div>
                    <p className="bold">Szűcs Erika</p>
                    <p>képviselő</p>

                    <div className="kepviselok_img">
                        <img
                            src="/images/middle_content_pics/jegyzo_pics/jegyzo.png"
                            alt="Férfi képviselő fantomkép"
                        />
                    </div>
                    <p className="bold">Tóth István</p>
                    <p>képviselő</p>

                    <hr />

                    <p className="bold uppercase">Pénzügyi Bizottság</p>

                    <div className="kepviselok_img">
                        <img
                            src="/images/middle_content_pics/jegyzo_pics/jegyzo.png"
                            alt="Pénzügyi Bizottság elnöke férfi fantomkép"
                        />
                    </div>
                    <p className="bold">Tóth István</p>
                    <p>elnök</p>

                    <div className="kepviselok_img">
                        <img
                            src="/images/middle_content_pics/jegyzo_pics/jegyzo.png"
                            alt="Pénzügyi Bizottság tagja férfi fantomkép"
                        />
                    </div>
                    <p className="bold">Németh István</p>
                    <p>bizottsági tag</p>

                    <div className="kepviselok_img">
                        <img
                            src="/images/middle_content_pics/jegyzo_pics/jegyzo.png"
                            alt="Pénzügyi Bizottság külső tag férfi fantomkép"
                        />
                    </div>
                    <p className="bold">Tóth István</p>
                    <p>külső tag</p>

                    <hr />

                    <p className="bold uppercase">Humánágazati Bizottság</p>

                    <div className="kepviselok_img">
                        <img
                            src="/images/middle_content_pics/titkarsag_pics/titkarsag.svg"
                            alt="Humánágazati Bizottság elnöke női fantomkép"
                        />
                    </div>
                    <p className="bold">Szűcs Erika</p>
                    <p>képviselő</p>

                    <div className="kepviselok_img">
                        <img
                            src="/images/middle_content_pics/jegyzo_pics/jegyzo.png"
                            alt="Humánágazati Bizottsági tag férfi fantomkép"
                        />
                    </div>
                    <p className="bold">Németh István</p>
                    <p>bizottsági tag</p>

                    <div className="kepviselok_img">
                        <img
                            src="/images/middle_content_pics/jegyzo_pics/jegyzo.png"
                            alt="Humánágazati Bizottsági tag férfi fantomkép"
                        />
                    </div>
                    <p className="bold">Némethy András</p>
                    <p>bizottsági tag</p>

                    <div className="kepviselok_img">
                        <img
                            src="/images/middle_content_pics/titkarsag_pics/titkarsag.svg"
                            alt="Humánágazati Bizottság külső tag női fantomkép"
                        />
                    </div>
                    <p className="bold">Kopasz Gáborné</p>
                    <p>külső tag</p>

                    <div className="kepviselok_img">
                        <img
                            src="/images/middle_content_pics/titkarsag_pics/titkarsag.svg"
                            alt="Humánágazati Bizottság elnöke női fantomkép"
                        />
                    </div>
                    <p className="bold">Tóthné Tompa Tímea</p>
                    <p>külső tag</p>
                </div>
            </ContentContainer>
        </>
    );
}
