import ContentContainer from "../modules/ContentContainer";
import HeaderModule from "../modules/HeaderModule";
import "./kis_mufuves.css";

export default function Kismufuves() {
    return (
        <>
            <HeaderModule
                breadcrumb={["Kultúra", "Sport", "Kis műfüves-pálya"]}
            >
                Kis műfüves-pálya
            </HeaderModule>
            <ContentContainer>
                <div className="kismufuves_container">
                    <p className="bold align-center">
                        Bérleti díj: 6.000 Ft/óra
                    </p>
                    <p className="align-center">Információ:</p>
                    <p className="align-center bold">Dócs Károly</p>
                    <p className="align-center">Sportpálya Cigánd</p>
                    <p className="align-center">06-20-376-34-47</p>
                    <div className="kismufuves_img">
                        <img
                            src="/images/middle_content_pics/kismufuves_pics/kismufuves1.jpg"
                            alt="Kis műfüves pálya."
                        />
                    </div>

                    <p className="bold align-center margin-top-kismufuves">
                        Használati szabályok
                    </p>
                    <ul className="ul_kismufuves">
                        <li>Tilos a stoplis cipő használata!</li>
                        <li>
                            Tilos a pálya területén dohányozni, gyufát,
                            cigarettát eldobni!
                        </li>
                        <li>Tilos a pálya területén a rágógumi használata!</li>
                        <li>
                            Tilos a pálya területére üveget vagy más folyadékot
                            tartalmazó edényt bevinni!
                        </li>
                        <li>
                            Tilos a pályára bármilyen hegyes, éles vagy súlyos
                            tárgyat bevinni!
                        </li>
                        <li>
                            Tilos a pálya területére kutyát vagy más állatot
                            bevinni!
                        </li>
                        <li>
                            A pálya területére bemenni csak a kapukon keresztül
                            szabad!
                        </li>
                        <li>
                            Mielőtt a pálya területére lép tisztítsa meg cipőjét
                            a rátapadt szennyeződéstől!
                        </li>
                    </ul>
                    <div className="kismufuves_img">
                        <img
                            src="/images/middle_content_pics/kismufuves_pics/kismufuves2.jpg"
                            alt="Kis műfüves pálya egy kicsit más szögből."
                        />
                    </div>
                </div>
            </ContentContainer>
        </>
    );
}
