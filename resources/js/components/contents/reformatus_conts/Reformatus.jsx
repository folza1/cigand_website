import "./reformatus.css";
import HeaderModule from "../modules/HeaderModule";
import ContentContainer from "../modules/ContentContainer";

export default function Reformatus() {
    return (
        <>
            <HeaderModule
                breadcrumb={["Kultúra", "Szabadidő", "Református Egyházközség"]}
            >
                Református Egyházközség
            </HeaderModule>
            <ContentContainer>
                <div className="reformatus_container">
                    <p className="bold align-center uppercase">
                        Cigándi Református Egyházközség
                    </p>
                    <p className="align-center">3973 Cigánd Petőfi u. 87.</p>
                    <p className="align-center">47/302-266</p>

                    <p className="align-center bold">Kristóf István lelkész</p>
                    <p className="align-center">+36-20/428-5786</p>

                    <p className="align-center">
                        <a href="http://www.tirek.hu" target="_blank">
                            www.tirek.hu
                        </a>
                    </p>

                    <div className="reformatus_img">
                        <img
                            src="/images/middle_content_pics/reformatus_pics/reformatus1.jpg"
                            alt="Református Templom torony"
                        />
                    </div>

                    <p>A műemlék templom rövid ismertetője:</p>
                    <p>
                        Gótikus templom szentélyének és homlokfalának
                        felhasználásával kiépítve 1793-ban és 1835-1839 között.
                    </p>

                    <p>
                        A település központjában, körítőfallal övezett dombtetőn
                        álló, keletelt, a nyolcszög három oldalával záródó
                        szentélyű középkori templom hajójának keleti kétharmadát
                        észak és déli irányban kibővítve kialakított, közel
                        szimmetrikus alaprajzú épület, déli oldalán utólagos
                        toronnyal. A torony többszörösen ívelt vonalú sisakja
                        fémlemezzel fedett, a templom nyeregtetejét sík műpala
                        fedi. Az egyes homlokzati szakaszokat, a sarkokat követő
                        függőleges, valamint a cement lábazat felett és az
                        egyszerű főpárkány alatt futó vízszintes, vakolt sávok
                        foglalják tükrökbe. A visszaugratottan élszedett sarkú
                        torony déli oldalán tagolt szalagkeretes, félköríves
                        záradékú ajtó nyílik.
                    </p>

                    <div className="reformatus_img">
                        <img
                            src="/images/middle_content_pics/reformatus_pics/reformatus2.jpg"
                            alt="Református Templom épülete"
                        />
                    </div>

                    <p>
                        A földszinttől vízszintes vakolatsávval elválasztott
                        karzatszinten, három oldalon egy-egy, keretezés nélküli,
                        szegmentíves záradékú ablak nyílik, míg a harangszinten
                        oldalanként egy-egy, félköríves záradékú, vakolt
                        szalagkeretes ablak látható. Ez utóbbi ablakok
                        szalagkeretét vállpárkány díszíti. A harangszinti
                        ablakok alatt egyszerű könyöklőpárkány. A tornyot
                        háromszög alakú órapárkány koronázza, oldalanként
                        egy-egy órával. Az élszedett sarkú déli bővítmény
                        toronytól jobbra és balra eső déli homlokzati szakaszait
                        nyílás nem töri át, a toronyhoz csatlakozó oromfalak
                        lépcsős kiképzésűek. A déli bővítmény keleti homlokzatán
                        egy keret nélküli, szegmentíves záradékú ablak nyílik.
                    </p>

                    <div className="reformatus_img">
                        <img
                            src="/images/middle_content_pics/reformatus_pics/reformatus3.jpg"
                            alt="Református Templom paplak"
                        />
                    </div>

                    <p>
                        Az egykori szentély déli homlokzatán két széles, rézsűs
                        bélletű, tölcséresen szűkülő, félkörívesen záródó ablak
                        található. A szentély keleti oldalán a toronyajtóval
                        megegyező formájú ajtó nyílik, felette keret nélküli
                        körablak áll. A szentély északi homlokzatán két,
                        ugyanolyan ablak nyílik, mint a déli oldalon. A
                        visszaugratottan lekerekített sarkú északi bővítmény
                        háromszög formájú oromfallal lezárt északi homlokzatán
                        mindössze egy kisméretű, keret nélküli, szegmentíves
                        ablakocska nyílik. Ugyanilyen ablak található az északi
                        bővítmény nyugati falában is. A visszaugratottan
                        élszedett sarkú egykori hajófal nyugati homlokzatán egy,
                        a déli bővítmény nyugati oldalán pedig két, azonos
                        formájú, keret nélküli, szegmentíves záradékú ablakot
                        találunk.
                    </p>
                </div>
            </ContentContainer>
        </>
    );
}
