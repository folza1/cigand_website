import HeaderModule from "../modules/HeaderModule";
import ContentContainer from "../modules/ContentContainer";
import "./ovodamuzeum.css";

export default function Ovodamuzeum() {
    return (
        <>
            <HeaderModule breadcrumb={["Kultúra", "Kultúra", "Óvodamúzeum"]}>
                Óvodamúzeum
            </HeaderModule>
            <ContentContainer>
                <div className="ovodamuzeum_container">
                    <div className="ovodamuzeum_img">
                        <img
                            src="/images/middle_content_pics/ovodamuzeum_pics/ovodamuzeum.jpg"
                            alt="Óvodamúzeumban hímes tányérok és szőttesek a falon."
                        />
                    </div>
                    <p className="bold uppercase">
                        Cigándi Tündérkert Óvoda és Bölcsőde
                    </p>
                    <p>3973 Cigánd, Iskola utca 10.</p>
                    <p>Tel.: 47/534-415</p>

                    <p className="bold ovodamuzeum_margin_top">
                        Múzeum hívogató
                    </p>

                    <p className="italic ovodamuzeum_margin_top">
                        Közhírré tétetik, szerte a világba
                    </p>
                    <p className="italic">múzeum nyílt Cigándon az óvodába.</p>
                    <p className="italic">
                        Mit használtak régen az emberek, guzsaly, gereben,
                        komód, karosláda,
                    </p>
                    <p className="italic">
                        sok más egyébbel együtt látható az óvodába.
                    </p>

                    <p className="italic ovodamuzeum_margin_top">
                        Megőrizzük múltunk kincseit,
                    </p>
                    <p className="italic">ápoljuk hűen dalait, játékit.</p>
                    <p className="italic">
                        Múlt, jelen, jövő egymáshoz tartozik
                    </p>
                    <p className="italic">a mi óvodánkban összetalálkozik.</p>

                    <p className="italic ovodamuzeum_margin_top">
                        Aki kíváncsi, mily szép ez óvoda,
                    </p>
                    <p className="italic">
                        kapja magát hamar, s jöjjön Cigándra.
                    </p>
                    <p className="italic">Ígérem bizton, nem fogja megbánni,</p>
                    <p className="italic">
                        mert kedves óvodánkban sok szépet fog látni!
                    </p>
                </div>
            </ContentContainer>
        </>
    );
}
