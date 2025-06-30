import HeaderModule from "../modules/HeaderModule";
import ContentContainer from "../modules/ContentContainer";
import "./cigand_jarasi_hivatal.css";

export default function CigandJarasiHivatal() {
    return (
        <>
            <HeaderModule
                breadcrumb={["Önkormányzat", "Egyéb", "Cigánd Járási Hivatal"]}
            >
                Cigánd Járási Hivatal
            </HeaderModule>
            <ContentContainer>
                <div className="cigand_jarasi_hivatal_container">
                    <p className="bold align-center">
                        Borsod-Abaúj-Zemplén Megyei Kormányhivatal Cigándi
                        Járási Hivatala
                    </p>
                    <p className="align-center">3973 Cigánd, Fő u. 87.</p>

                    <p className="align-center">
                        Elektronikus fax: +36-47/795-097
                    </p>

                    <p className="align-center">
                        E-mail cím: jaras.cigand@borsod.gov.hu
                    </p>

                    <p className="align-center">
                        Honlap:{" "}
                        <a
                            href="https://kormanyhivatalok.hu/kormanyhivatalok/borsod-abauj-zemplen"
                            target="_blank"
                        >
                            www.borsod.gov.hu
                        </a>
                    </p>
                    <p className="margin_top_cigand_jarasi_hivatal">
                        <span className="bold">Hivatalvezető:</span> Stumpf
                        Attila Gábor
                    </p>

                    <p className="bold">
                        A Járási Hivatal szervezeti egységei:
                    </p>

                    <ul className="ul_cigand_jarasi_hivatal">
                        <li>Foglalkoztatási Osztály</li>
                        <li>Hatósági és Gyámügyi Osztály</li>
                        <li>Kormányablak Osztály</li>
                    </ul>
                    <div className="cigand_jarasi_hivatal_border">
                        <p className="bold align-center margin_top_cigand_jarasi_hivatal">
                            A Járási Hivatal ügyfélfogadási rendje
                        </p>
                        <p className="align-center">Hivatalvezető:</p>
                        <p className="align-center">
                            <span>szerda:</span> <span>08:00 - 16:00</span>
                        </p>
                        <hr />
                        <p className="align-center">Hivatalvezető-helyettes:</p>
                        <p className="align-center">
                            <span>hétfő:</span> <span>08:00 - 16:00</span>
                        </p>
                    </div>

                    <div className="cigand_jarasi_hivatal_border">
                        <p className="bold align-center margin_top_cigand_jarasi_hivatal">
                            Foglalkoztatási Osztály
                        </p>
                        <p className="bold align-center">hétfő:</p>
                        <p className="align-center">08:00 - 12:00</p>
                        <p className="align-center">13:00 - 15:00</p>
                        <hr />
                        <p className="bold align-center">kedd:</p>
                        <p className="align-center">08:00 - 12:00</p>
                        <hr />
                        <p className="bold align-center">szerda: </p>
                        <p className="align-center">08:00 - 12:00</p>
                        <p className="align-center">13:00 - 16:00</p>
                        <hr />
                        <p className="bold align-center">csütörtök: </p>
                        <p className="align-center">08:00 - 12:00</p>
                        <hr />
                        <p className="bold align-center">péntek: </p>
                        <p className="align-center">08:00 - 11:00</p>
                    </div>

                    <div className="cigand_jarasi_hivatal_border">
                        <p className="bold align-center margin_top_cigand_jarasi_hivatal">
                            Hatósági és Gyámügyi Osztály
                        </p>
                        <p className="bold align-center">hétfő: </p>
                        <p className="align-center">08:00 - 16:00</p>
                        <hr />
                        <p className="bold align-center">szerda: </p>
                        <p className="align-center">08:00 - 16:00</p>
                        <hr />
                        <p className="bold align-center">péntek: </p>
                        <p className="align-center">08:00 - 12:00</p>
                    </div>

                    <div className="cigand_jarasi_hivatal_border">
                        <p className="bold align-center margin_top_cigand_jarasi_hivatal">
                            Kormányablak Osztály
                        </p>
                        <p className="bold align-center">hétfő:</p>
                        <p className="align-center">08:00 - 18:00</p>
                        <hr />
                        <p className="bold align-center">kedd:</p>
                        <p className="align-center">08:00 - 14:00</p>
                        <hr />
                        <p className="bold align-center">szerda:</p>
                        <p className="align-center">08:00 - 18:00</p>
                        <hr />
                        <p className="bold align-center">csütörtök:</p>
                        <p className="align-center">08:00 - 16:00</p>
                        <hr />
                        <p className="bold align-center">péntek:</p>
                        <p className="align-center">08:00 - 14:00</p>
                        <hr />
                        <p className="bold align-center">
                            <a
                                href="https://kormanyhivatalok.hu/"
                                target="_blank"
                            >
                                Bővebb információ ITT található
                            </a>
                        </p>
                    </div>

                    <div className="cigand_jarasi_hivatal_border">
                        <p className="bold align-center margin_top_cigand_jarasi_hivatal">
                            NAV - Cigándi ügyfélszolgálat
                        </p>
                        <p className="bold align-center">hétfő:</p>
                        <p className="align-center">08:00 - 12:00</p>
                        <p className="align-center">13:00 - 17:00</p>
                        <hr />
                        <p className="bold align-center">kedd:</p>
                        <p className="align-center">ZÁRVA</p>
                        <hr />
                        <p className="bold align-center">szerda:</p>
                        <p className="align-center">08:00 - 12:00</p>
                        <p className="align-center">13:00 - 16:00</p>
                        <hr />
                        <p className="bold align-center">csütörtök:</p>
                        <p className="align-center">ZÁRVA</p>
                        <hr />
                        <p className="bold align-center">péntek:</p>
                        <p className="align-center">ZÁRVA</p>
                        <hr />
                        <p className="bold align-center">
                            <a
                                href="https://nav.gov.hu/nav/igazgatosagok/borsod_abauj_zemplen/ugyfelszolgalatok/Cigand_ufi_2018.html"
                                target="_blank"
                            >
                                Bővebb információ ITT található
                            </a>
                        </p>
                    </div>

                    <p className="bold align-center">
                        A cigándi ügyfélszolgálat telefonszáma:
                    </p>
                    <p className="align-center">+36-42/795-292</p>

                    <p className="bold align-center uppercase margin_top_cigand_jarasi_hivatal">
                        A Cigándi Járási Hivatal szervezeti egységeinek
                        elérhetőségei
                    </p>

                    <div className="cigand_jarasi_hivatal_border">
                        <p className="bold align-center uppercase margin_top_cigand_jarasi_hivatal">
                            Foglalkoztatási Osztály
                        </p>

                        <p className="align-center">
                            Cím: 3973 Cigánd, Fő u. 87.
                        </p>

                        <p className="bold align-center margin_top_cigand_jarasi_hivatal">
                            Tóth-Főző Klaudia
                        </p>

                        <p className="align-center">+36 47 795-071</p>

                        <hr />

                        <p className="bold align-center">Benő Tünde</p>

                        <p className="bold align-center">Tamás Tímea</p>

                        <p className="bold align-center">Teremi Alexa</p>

                        <p className="align-center">+36 47 795-070</p>

                        <hr />

                        <p className="bold align-center">
                            Molnárné Molnár Csilla
                        </p>

                        <p className="align-center">+36 47 795-066</p>

                        <hr />

                        <p className="bold align-center">Balla Norbert</p>

                        <p className="bold align-center">Tóthné Punyi Csilla</p>

                        <p className="bold align-center">Verbinyecz Róbert</p>

                        <p className="bold align-center">Vaszily Zsoltné</p>

                        <p className="align-center">+36 47 795-072</p>

                        <hr />

                        <p className="bold align-center">Nagy Alexandra</p>

                        <p className="bold align-center">Nagy Erzsébet</p>

                        <p className="bold align-center">
                            Gálné Király Krisztina
                        </p>

                        <p className="bold align-center">Szántó Judit</p>

                        <p className="align-center">+36 47 795 068</p>
                    </div>

                    <div className="cigand_jarasi_hivatal_border">
                        <p className="bold align-center uppercase margin_top_cigand_jarasi_hivatal">
                            Hatósági és Gyámügyi Osztály
                        </p>

                        <p className="align-center">
                            Cím: 3973 Cigánd, Petőfi Sándor u. 89.
                        </p>

                        <p className="bold align-center margin_top_cigand_jarasi_hivatal">
                            dr. Szepesy Krisztina
                        </p>
                        <p className="align-center">+36 47 795-069</p>

                        <hr />

                        <p className="bold align-center">Horváth Sándorné</p>

                        <p className="align-center">+36 47 795-061</p>

                        <hr />

                        <p className="bold align-center">
                            Rabóczkiné Veréb Mária
                        </p>

                        <p className="align-center">+36 47 795-062</p>

                        <hr />

                        <p className="bold align-center">
                            Balázsné Toldi Erzsébet
                        </p>

                        <p className="bold align-center">Iván Anita</p>

                        <p className="bold align-center">Tóthné Tótok Beáta</p>

                        <p className="align-center">+36 47 795-067</p>

                        <hr />

                        <p className="bold align-center">
                            Borbély-Lakatos Kitti
                        </p>

                        <p className="bold align-center">
                            Szabó Zsolt Ferencné
                        </p>

                        <p className="bold align-center">
                            Tóth-Seprenyi Eszter
                        </p>

                        <p className="align-center">+36 47 795-063</p>
                    </div>

                    <div className="cigand_jarasi_hivatal_border">
                        <p className="bold align-center uppercase margin_top_cigand_jarasi_hivatal">
                            Kormányablak Osztály
                        </p>

                        <p className="align-center">
                            Cím: 3973 Cigánd, Fő u. 87.
                        </p>

                        <p className="bold align-center margin_top_cigand_jarasi_hivatal">
                            Jákob Lászlóné
                        </p>

                        <p className="align-center">+36 47 795-065</p>

                        <hr />

                        <p className="bold align-center">
                            Borosné dr. Szabó Rita
                        </p>

                        <p className="bold align-center">Fodor Zoltánné</p>

                        <p className="align-center">+36 47 795-262</p>

                        <hr />

                        <p className="bold align-center">Szabó Krisztián</p>

                        <p className="bold align-center">Terjék József</p>

                        <p className="align-center">+36 47 795-235</p>
                    </div>

                    <div className="cigand_jarasi_hivatal_border">
                        <p className="bold align-center uppercase margin_top_cigand_jarasi_hivatal">
                            A Cigándi Járási Hivatal Kirendeltsége
                        </p>

                        <p className="align-center">
                            Cím: 3971 Tiszakarád, Engels Frigyes u. 13.
                        </p>

                        <p className="bold align-center margin_top_cigand_jarasi_hivatal">
                            Kántor Anikó
                        </p>

                        <p className="align-center">+36 47 382-030</p>

                        <hr />

                        <p className="bold align-center">Elektronikus fax</p>

                        <p className="align-center">+36 47 795-097</p>
                    </div>
                </div>
            </ContentContainer>
        </>
    );
}
