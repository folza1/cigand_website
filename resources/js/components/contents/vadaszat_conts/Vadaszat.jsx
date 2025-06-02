import HeaderModule from "../modules/HeaderModule";
import ContentContainer from "../modules/ContentContainer";
import "./vadaszat.css";

export default function Vadaszat() {
    return (
        <>
            <HeaderModule breadcrumb={["Kultúra", "Szabadidő", "Vadászat"]}>
                Vadászat
            </HeaderModule>
            <ContentContainer>
                <div className="vadaszat_container">
                    <div className="vadaszat_img">
                        <img
                            src="/images/middle_content_pics/vadaszat_pics/vadaszat.jpg"
                            alt="Egy szarvas a vadonban."
                            className="vadaszat_container_img"
                        />
                    </div>
                    <p className="bold uppercase align-center">
                        II. Rákóczi Ferenc Vadásztársaság
                    </p>
                    <p className="align-center">3973 Cigánd, József A u. 5.</p>
                    <div className="vadaszat_elnok_img">
                        <img
                            src="/images/middle_content_pics/jegyzo_pics/jegyzo.png"
                            alt="Férfi elnök fantomkép"
                        />
                    </div>
                    <p className="bold align-center">Szabó László</p>
                    <p className="align-center">elnök</p>
                    <p className="align-center">20/922-0802</p>

                    <a
                        href="https://agrojager.hu/"
                        className="uppercase display-block align-center"
                        target="_blank"
                    >
                        Cigándi vadászélmény Link
                    </a>
                </div>
            </ContentContainer>
        </>
    );
}
