import ContentContainer from "../modules/ContentContainer";
import HeaderModule from "../modules/HeaderModule";
import "./horgaszat.css";

export default function Horgaszat() {
    return (
        <>
            <HeaderModule breadcrumb={["Kultúra", "Szabadidő", "Horgászat"]}>
                Horgászat
            </HeaderModule>
            <ContentContainer>
                <div className="horgaszat_container">
                    <div className="horgaszat_img">
                        <img
                            src="/images/middle_content_pics/horgaszat_pics/horgaszat.jpg"
                            alt=""
                        />
                    </div>
                    <p className="bold align-center uppercase">
                        Cigándi Tiszavirág Horgász Egyesület
                    </p>
                    <p className="align-center">3973 Cigánd, Hajnal u. 39.</p>
                    <p className="align-center">Boros Géza elnök</p>
                    <p className="align-center">47/534-034</p>
                    <p>
                        Napijegy a horgászengedély és az állami horgászjegy
                        felmutatása mellett a HÁRSFA presszóban (Cigánd, Jókai
                        u. 12.) váltható 06 - 22 óra között. A napijegy ára 600
                        Ft.
                    </p>
                    <p>
                        Éves területi engedély az egyesület irodájában váltható.
                    </p>
                    <p>
                        Hétfő - Kedd - Szerda - Péntek: 8.00 - 9.00 - ig, 16.00
                        - 19.00 - ig
                    </p>
                    <p className="bold align-right margin_top_horgaszat">
                        Felnőtt éves területi engedélyek:
                    </p>
                    <p className="align-right">
                        Tisza folyó - Bodrog folyó - Vajdácska: 13.500 Ft
                    </p>
                    <p className="align-right">
                        Tisza folyó - Bodrog folyó - Vajdácska 60 év felett:
                        6.500 Ft
                    </p>
                    <p className="align-right">Tisza folyó: 10.000 Ft</p>
                    <p className="align-right">
                        Gyermek éves területi engedély: 2.000 Ft
                    </p>
                </div>
            </ContentContainer>
        </>
    );
}
