import "./infocontainer.css";

export default function Infocontainer() {
    return (
        <div className="info_main_container">
            <div className="info_title_container">
                <p className="align-center bold uppercase info_title">
                    Cigándról
                </p>

                <div className="info_container">
                    <div className="info_container_element">
                        <p className="info_half align-left">Ország</p>
                        <p className="info_half align-right">Magyarország</p>
                    </div>
                    <div className="info_container_element">
                        <p className="info_half align-left">Megye</p>
                        <p className="info_half align-right">
                            Borsod-Abaúj-Zemplén megye
                        </p>
                    </div>
                    <div className="info_container_element">
                        <p className="info_half align-left">Kistérség</p>
                        <p className="info_half align-right">Cigándi Járás</p>
                    </div>
                    <div className="info_container_element">
                        <p className="info_half align-left">Terület</p>
                        <p className="info_half align-right">
                            Bodrogközi 56.76 négyzet kilométer
                        </p>
                    </div>
                    <div className="info_container_element">
                        <p className="info_half align-left">Lakossága</p>
                        <p className="info_half align-right">3044</p>
                    </div>
                    <div className="info_container_element">
                        <p className="info_half align-left">Koordináták</p>
                        <p className="info_half align-right">
                            48.2559° É 21.8889° K
                        </p>
                    </div>
                    <div className="info_container_element">
                        <p className="info_half align-left">Időzóna</p>
                        <p className="info_half align-right">
                            Közép-európai Idő (GMT+2)
                        </p>
                    </div>
                    <div className="info_container_element">
                        <p className="info_half align-left">
                            Postai Irányítószám
                        </p>
                        <p className="info_half align-right">3973</p>
                    </div>
                </div>
            </div>
            <div className="info_img_container">
                <img
                    className="bg-img"
                    src="/images/cigand_favicon.png"
                    alt="Cigánd Címer"
                />
            </div>
        </div>
    );
}
