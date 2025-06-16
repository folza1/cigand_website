import ContentContainer from "../modules/ContentContainer";
import HeaderModule from "../modules/HeaderModule";
import "./nagymufuves.css";

export default function Nagymufuves() {
    return (
        <>
            <HeaderModule
                breadcrumb={["Kultúra", "Sport", "Nagy műfüves-pálya"]}
            >
                Nagy műfüves-pálya
            </HeaderModule>
            <ContentContainer>
                <div className="nagymufuves_container">
                    <p className="bold align-center">Bérleti díj:</p>
                    <p className="align-center">
                        1 mérkőzés díja (1h 45`): 35.000 Ft
                    </p>
                    <p className="align-center">
                        Teljes pálya bérleti díja: 17.500 Ft/óra
                    </p>
                    <p className="align-center">
                        Fél pálya bérleti díja: 8.000 Ft/óra
                    </p>
                    <p className="bold align-center margin-top-nagymufuves">
                        Információ:
                    </p>
                    <p className="align-center">Nagy Gábor</p>
                    <p className="align-center">Szabadidő Központ Igazgató</p>
                    <p className="align-center">
                        Cigánd SE, Utánpótlás Szakmai Vezető
                    </p>
                    <p className="align-center">47/534-417</p>
                    <div className="nagymufuves_img">
                        <img
                            src="/images/middle_content_pics/nagymufuves_pics/nagymufuves1.jpg"
                            alt="Nagy műfüves-pálya."
                        />
                    </div>

                    <p className="bold align-center">Használati szabályok</p>
                    <ul className="ul_nagymufuves">
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

                    <div className="nagymufuves_img">
                        <img
                            src="/images/middle_content_pics/nagymufuves_pics/nagymufuves2.jpg"
                            alt="Nagy műfüves-pálya játékosokkal edzés közben."
                        />
                    </div>
                    <div className="nagymufuves_img margin-top-nagymufuves">
                        <img
                            src="/images/middle_content_pics/nagymufuves_pics/nagymufuves3.jpg"
                            alt="Pálya nézete a szögletről edzés közben."
                        />
                    </div>
                    <div className="nagymufuves_img margin-top-nagymufuves">
                        <img
                            src="/images/middle_content_pics/nagymufuves_pics/nagymufuves4.jpg"
                            alt="Nagykapu távolról."
                        />
                    </div>
                    <div className="nagymufuves_img margin-top-nagymufuves">
                        <img
                            src="/images/middle_content_pics/nagymufuves_pics/nagymufuves5.jpg"
                            alt="Nagy műfüves-pálya hosszanti kép, távolban kapu."
                        />
                    </div>
                </div>
            </ContentContainer>
        </>
    );
}
