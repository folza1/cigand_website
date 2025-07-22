import ContentContainer from "../modules/ContentContainer";
import HeaderModule from "../modules/HeaderModule";
import "./rno.css";

export default function RNO() {
    return (
        <>
            <HeaderModule
                breadcrumb={[
                    "Önkormányzat",
                    "Egyéb",
                    "Roma Nemzetiségi Önkormányzat",
                ]}
            >
                Roma Nemzetiségi Önkormányzat
            </HeaderModule>
            <ContentContainer>
                <div className="rno_container">
                    <div className="rno_img">
                        <img
                            src="/images/middle_content_pics/RNO_pics/rno.jpeg"
                            alt="Roma Nemzetiségi Önkormányzat Zászló"
                        />
                    </div>
                    <p className="bold uppercase">Tagjai:</p>

                    <div className="rno_elnok_img_container">
                        <img
                            src="/images/middle_content_pics/jegyzo_pics/jegyzo.png"
                            alt="Roma Nemzetiségi Önkormanyzat Elnöke fantomkép"
                            className="rno_elnok_img"
                        />
                    </div>

                    <p className="bold">Horváth Erik RNÖ elnöke</p>

                    <div className="rno_kepviselo_img_container">
                        <img
                            src="/images/middle_content_pics/jegyzo_pics/jegyzo.png"
                            alt="Roma Nemzetiségi Önkormanyzat Képviselő fantomkép"
                            className="rno_kepviselo_img"
                        />
                    </div>

                    <p>Dancs-Oláh Attila RNÖ képviselő</p>

                    <div className="rno_kepviselo_img_container">
                        <img
                            src="/images/middle_content_pics/jegyzo_pics/jegyzo.png"
                            alt="Roma Nemzetiségi Önkormanyzat Képviselő fantomkép"
                            className="rno_kepviselo_img"
                        />
                    </div>

                    <p>Horváth Krisztián RNÖ képviselő</p>

                    <div className="rno_kepviselo_img_container">
                        <img
                            src="/images/middle_content_pics/jegyzo_pics/jegyzo.png"
                            alt="Roma Nemzetiségi Önkormanyzat Képviselő fantomkép"
                            className="rno_kepviselo_img"
                        />
                    </div>

                    <p>Horváth Zoltán RNÖ képviselő</p>

                    <div className="rno_kepviselo_img_container">
                        <img
                            src="/images/middle_content_pics/titkarsag_pics/titkarsag.svg"
                            alt="Roma Nemzetiségi Önkormányzat kepviselők fantomkép női"
                            className="rno_kepviselo_img"
                        />
                    </div>

                    <p>Jónás Erika RNÖ képviselő</p>
                </div>
            </ContentContainer>
        </>
    );
}
