import ContentContainer from "../modules/ContentContainer";
import HeaderModule from "../modules/HeaderModule";
import "./szabadidokozpont.css";

export default function Szabadidokozpont() {
    return (
        <>
            <HeaderModule breadcrumb={["Kultúra", "Sport", "Szabadidőközpont"]}>
                Szabadidőközpont
            </HeaderModule>
            <ContentContainer>
                <div className="szabadidokozpont_container">
                    <div className="szabadidokozpont_img">
                        <img
                            src="/images/middle_content_pics/szabadidokozpont_pics/szabadidokozpont1.jpg"
                            alt="Szabadidőközpont épülete elölről."
                        />
                    </div>
                    <p>
                        2008-ban épült meg a cigándi Szabadidő Központ
                        (Sportcsarnok). Ami addig csak álom volt, ma már
                        nélkülözhetetlen a téli időszakban a sportolni
                        vágyóknak.
                    </p>
                    <p>
                        Kezdetben még csak ismerkedtek az emberek az
                        Intézménnyel, de mára már teljesen belakták a
                        sportcsarnokot.
                    </p>
                    <p>
                        Szívesen járnak hozzánk aerobikra, labdarúgásra,
                        kézilabdára, kosárlabdára, teniszre, röplabdára és végül
                        de nem utolsó sorban konditermi edzésre is. Örömünkre
                        szolgál, hogy nem csak helyiek, Bodrogköziek, hanem
                        egyre többen járnak más megyékből is. Különböző
                        labdarúgó tornák szervezésének köszönhetően, már
                        külföldről is szívesen járnak hozzánk. Pl.: Ukrajna,
                        Szlovákia. Lengyelország, Romániai csapatok.
                    </p>

                    <p>
                        Cigánd Sportegyesület hatalmas fejlődésen ment
                        keresztül.
                    </p>
                    <p>
                        2005-2006-os szezonban kezdődött minden. Az Önkormányzat
                        mellett érkezett egy komoly befektető, így az elmúlt
                        évek alatt komoly szintre jutott az egyesületünk.
                    </p>
                    <p>
                        Van két nagyméretű füves pályánk, egy kisméretű műfüves
                        pálya, egy gyönyörű fedett lelátó ülőhelyekkel. De nem
                        csak a Létesítmény, hanem a csapatok is bővültek.
                        Felnőtt csapatunk mellett, 8 utánpótlás korosztályú
                        csapat működik, ami jelentős eredmény egy ilyen
                        kisvárosnak. Ehhez kellett, hogy a felnőtt csapatunk a
                        bajnokságokban sikeresen szerepeljen, három bajnoki
                        évben kétszer nyertünk bajnokságot és egyszer Sport1 TV
                        kupát, amivel így sorra írtuk a történelmeket.
                    </p>
                    <p>
                        A felnőtt csapatunk eredményesen szerepel az NB III-ban,
                        az utánpótlás csapataink fele pedig NB II-es területi
                        csoportokban. Jóval több mint 120 igazolt játékosunk
                        van, ami háromszorosa lett a kezdettől. De ezzel nem
                        szeretnénk beérni, terveinkben van még komolyabb
                        utánpótlás bázis kialakítása is, ahová szeretettel
                        várjuk azokat a gyerekeket, akik tehetséget, kitartást
                        éreznek magukban!
                    </p>

                    <p className="bold align-right">Nagy Gábor</p>
                    <p className="align-right">Szabadidő Központ Igazgató</p>
                    <p className="align-right">
                        Cigánd SE, Utánpótlás Szakmai Vezető
                    </p>

                    <p className="align-center bold">Telefon: 47/534-043</p>

                    <div className="szabadidokozpont_img">
                        <img
                            src="/images/middle_content_pics/szabadidokozpont_pics/szabadidokozpont2.jpg"
                            alt="Szabadidőközpont sportpálya belül oldalról a lelátóról nézve."
                        />
                    </div>
                    <p className="bold">Bérleti díjak:</p>

                    <p>Szabadidő Központ bérleti díjai:</p>

                    <ul className="ul_szabadidokozpont">
                        <li>Tömegsport rendezvény: 12.000 Ft/óra</li>
                        <li>
                            Közösségi rendezvények, tornák szervezése: 40.000
                            Ft/óra
                        </li>
                    </ul>

                    <p className="bold">Konditerem használat:</p>

                    <ul className="ul_szabadidokozpont">
                        <li>1 alkalom: 500 Ft/óra</li>
                        <li>5 alkalmas bérlet: 2.000 Ft</li>
                        <li>10 alkalmas bérlet: 3.800 Ft</li>
                        <li>15 alkalmas bérlet: 5.500 Ft</li>
                    </ul>

                    <p className="bold">Kis műfüves pálya</p>

                    <ul className="ul_szabadidokozpont">
                        <li>
                            Tömegsport rendezvény: 6.000 Ft/óra, + világítás
                            2.500 Ft/óra
                        </li>
                    </ul>

                    <p className="bold">Nagy műfüves pálya</p>

                    <ul className="ul_szabadidokozpont">
                        <li>
                            Egy mérkőzés díja: (2*45'): 35.000 Ft, + világítás
                            12.000 Ft
                        </li>
                        <li>
                            Teljes pálya bérleti díja: 17.500 Ft/óra, +
                            világítás 6.000 Ft/óra
                        </li>
                        <li>
                            Fél pálya bérleti díja: 8.000 Ft/óra, + világítás
                            3.000 Ft/óra
                        </li>
                    </ul>

                    <p className="bold align-center">Nyitvatartás:</p>

                    <p className="align-center">Hétfő - péntek: 7.30 - 21.00</p>

                    <div className="szabadidokozpont_img">
                        <img
                            src="/images/middle_content_pics/szabadidokozpont_pics/szabadidokozpont3.jpg"
                            alt="Szabadidőközpont sportpálya belül oldalról a lelátóról nézve, kézilabda kapu látszik."
                        />
                    </div>
                </div>
            </ContentContainer>
        </>
    );
}
