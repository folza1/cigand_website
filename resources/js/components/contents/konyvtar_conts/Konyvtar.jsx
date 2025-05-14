import HeaderModule from '../modules/HeaderModule';
import ContentContainer from '../modules/ContentContainer';
import './konyvtar.css';

export default function Konyvtar() {
    return (
        <>
            <HeaderModule breadcrumb={["Kultúra", "Kultúra", "Városi Könyvtár"]}>
                Városi Könyvtár
            </HeaderModule>
            <ContentContainer>
                <div className="konyvtar_container">
                    <p className='bold align-center'>Nagy Dezső Művelődési Ház és Könyvtár</p>

                    <p className='align-center'>3973 Cigánd, Fő utca 38.</p>

                    <p className='align-center'>Tel.: 47/534-419</p>

                    <p className='align-center'><span className='bold'>E-mail: </span>konyvtar.cigand@gmail.com</p>

                    <div className='konyvtar_img'>
                        <img src="/images/middle_content_pics/konyvtar_pics/konyvtar1.jpg" alt="Cigánd Városi Könyvtár épület" />
                    </div>

                    <p className='bold align-center uppercase'>Nyitvatartás</p>

                    <div>
                        <p>Hétfőn:</p>
                        <p>Zárva</p>
                    </div>

                    <hr />

                    <div>
                        <p>Kedd:</p>	<p>9:00 - 12:00 és 13:00 - 17:00</p>
                    </div>

                    <hr />


                    <div>
                        <p>Szerda:</p>	<p>9:00 - 12:00 és 13:00 - 16:00</p>
                    </div>

                    <hr />


                    <div>
                        <p>Csütörtök:</p>	<p>9:00 - 12:00 és 13:00 - 17:00</p>
                    </div>

                    <hr />


                    <div>
                        <p>Péntek:</p>	<p>9:00 - 12:00 és 13:00 - 17:00</p>
                    </div>

                    <hr />


                    <div>
                        <p>Szombat:</p>	<p>9:00 - 13:00</p>
                    </div>

                    <hr />


                    <div>
                        <p>Vasárnap:</p>
                        <p>Zárva</p>
                    </div>

                    <p>Az első könyvtárak a református egyház kezelésében már 1898-tól léteztek. 1934-ben már 4 könyvtár működik a településen, az egyháziakon kívül a Levente Egyesület illetve a községi elöljáróság finanszírozásában. A könyvállomány ekkor 600 db volt. Az első nyilvános könyvtár az 1950-ben átadott Művelődési Házban kezdte meg működését 1953 kötettel. 1963 végére a könyvállomány 2949 db volt, a beiratkozott olvasók száma 525 fő, a lakosság 10 %-a. A könyvtár épületének első bővítésére 1986-ban került sor, az addig 63 m2-es alapterület megduplázódott. Az iskolai és községi könyvtár összevonása 1997-ben történt meg, az 1361 db-os iskolai könyvállomány beolvadt a községi könyvtár állományába. A könyvtár életében mérföldkő a Millenniumi Év. 2000. augusztus 20-án önálló épületbe költözött a könyvtár, melynek alapterülete 153 m2-re bővült, a könyvtári dokumentumok száma ekkor már 16061 db, a beiratkozott olvasók száma 631 fő, a lakosság 17 %-a. A könyvtár gyűjteményét folyamatosan fejlesztik, szolgáltatásait a helyi igényeknek megfelelően alakítja.</p>

                    <div className='konyvtar_img'>
                        <img src="/images/middle_content_pics/konyvtar_pics/konyvtar2.jpg" alt="Cigánd Városi Könyvtár épület az utcáról nézve" />
                    </div>

                    <p>2013-ra a könyvtárat az internetezők is a birtokukba vehették. A gyűjtemény legnagyobb része könyvekből áll, mely jelenleg közel 25 000 példánnyal büszkélkedhet a könyvtár, a nem hagyományos dokumentumok közül gyűjti a hangzó dokumentumokat és a videofelvételeket is. Mára egyre több felnőtt és gyermek iratkozik be. A beiratkozott olvasók több mint fele tanuló, akik egyre inkább igénylik a könyvtári szolgáltatásokat. A Városi Könyvtár rendszeres helyszíne a rendhagyó irodalom-, történelem-, földrajz óráknak, valamint felnőtt-és gyermekprogramoknak ad helyszínt. az óvodás csoportok is rendszeres látogatói.</p>
                </div>
            </ContentContainer>
        </>
    );
};