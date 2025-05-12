import HeaderModule from '../modules/HeaderModule';
import ContentContainer from '../modules/ContentContainer';
import './ambulancia.css';

export default function Ambulancia() {
    return (
        <>
            <HeaderModule breadcrumb={["Városunk", "Egészségügy", "Járóbeteg Szakellátó"]}>
                Járóbeteg Szakellátó
            </HeaderModule>
            <ContentContainer>
                <div className='ambulancia_container'>
                    <p className='bold align-center'>Bodrogközi Járóbeteg Szakrendelő
                        Nonprofit Kft.</p>
                    <p className='align-center'>3973 Cigánd, Fő u. 43.</p>
                    <p className='bold align-center'>Tel: +36-47-534-420</p>
                    <p className='align-center'>Fax: +36-47-534-435</p>
                    <div className='ambulancia_img'>
                        <img src="/images/middle_content_pics/haziorvosok_pics/jarobeteg_szakellato.jpg" alt="Járóbeteg Szakellátó Ambulancia" />
                    </div>


                    <p className='bold'>Tisztelt Bodrogköziek!</p>

                    <p>Tájékoztatjuk Önöket, hogy a Bodrogközi Kistérségi Járóbeteg Szakellátó Központban működő szakrendelések időpontjáról és a betegfelvétel módjáról a <span className='bold'>06-47/534-420</span> telefonszámon érdeklődhetnek!</p>

                    <div className='ambulancia_appointment'>
                        <p className='bold'>Belgyógyászati járóbeteg szakellátás</p>
                        <p className='uppercase align-right'>Kedd</p>
                    </div>

                    <hr />

                    <div className='ambulancia_appointment'>
                        <p className='bold'>Kardiológia járóbeteg szakellátás</p>
                        <p className='uppercase align-right'>Szerda</p>
                    </div>

                    <hr />

                    <div className='ambulancia_appointment'>
                        <p className='bold'>Ortopédiai járóbeteg szakellátás</p>
                        <p className='uppercase align-right'>Péntek</p>
                    </div>

                    <hr />

                    <div className='ambulancia_appointment'>
                        <p className='bold'>Reumatológiai járóbeteg szakellátás</p>
                        <div>
                            <p className='uppercase align-right'>Kedd</p>
                            <p className='uppercase align-right'>Péntek</p>
                        </div>
                    </div>

                    <hr />

                    <div className='ambulancia_appointment'>
                        <p className='bold'>Nőgyógyászati járóbeteg szakellátás</p>
                        <div>
                            <p className='uppercase align-right'>Hétfő</p>
                            <p className='uppercase align-right'>Kedd</p>
                            <p className='uppercase align-right'>Csütörtök</p>
                        </div>
                    </div>

                    <hr />

                    <div className='ambulancia_appointment'>
                        <p className='bold'>Bőrgyógyászati járóbeteg szakellátás</p>
                        <div>
                            <p className='uppercase align-right'>Hétfő</p>
                        </div>
                    </div>

                    <hr />

                    <div className='ambulancia_appointment'>
                        <p className='bold'>Urológiai járóbeteg szakellátás</p>
                        <div>
                            <p className='uppercase align-right'>Kéthetente</p>
                            <p className='uppercase align-right'>Csütörtök</p>
                        </div>
                    </div>

                    <hr />

                    <div className='ambulancia_appointment'>
                        <p className='bold'>Gyermekgyógyászati járóbeteg szakellátás</p>
                        <div>
                            <p className='uppercase align-right'>Hétfő</p>
                            <p className='uppercase align right'>Csütörtök</p>
                        </div>
                    </div>

                    <hr />

                    <div className='ambulancia_appointment'>
                        <p className='bold'>Fül-orr-gégészeti járóbeteg szakellátás</p>
                        <div>
                            <p className='uppercase align-right'>Kedd</p>
                            <p className='uppercase align right'>Csütörtök</p>
                        </div>
                    </div>

                    <hr />

                    <div className='ambulancia_appointment'>
                        <p className='bold'>Pszichiátriai járóbeteg szakellátás</p>
                        <div>
                            <p className='uppercase align-right'>Hétfő</p>
                            <p className='uppercase align right'>Csütörtök</p>
                        </div>
                    </div>

                    <hr />

                    <div className='ambulancia_appointment'>
                        <p className='bold'>Szemészeti járóbeteg szakellátás</p>
                        <div>
                            <p className='uppercase align-right'>Kedd</p>
                        </div>
                    </div>

                    <hr />

                    <div className='ambulancia_appointment'>
                        <p className='bold'>Neurológiai járóbeteg szakellátás</p>
                        <div>
                            <p className='uppercase align-right'>Kedd</p>
                        </div>
                    </div>

                    <hr />

                    <div className='ambulancia_appointment'>
                        <p className='bold'>Tüdőgyógyászati járóbeteg szakellátás</p>
                        <div>
                            <p className='uppercase align-right'>Szerda</p>
                        </div>
                    </div>

                    <hr />

                    <div className='ambulancia_appointment'>
                        <div>
                            <p className='bold'>Röntgendiagnosztikai járóbeteg szakellátás</p>
                            <p className='bold'>nem szakorvosi óra</p>
                        </div>

                        <div>
                            <p className='uppercase align-right'>Hétfő</p>
                            <p className='uppercase align-right'>Kedd</p>
                            <p className='uppercase align-right'>Szerda</p>
                            <p className='uppercase align-right'>Csütörtök</p>
                            <p className='uppercase align-right'>Péntek</p>

                        </div>
                    </div>

                    <hr />

                    <div className='ambulancia_appointment'>
                        <div>
                            <p className='bold'>Ultrahang</p>
                        </div>

                        <div>
                            <p className='uppercase align-right'><span className='bold lowercase'>hasi UH:</span> Csütörtök</p>
                            <p className='uppercase align-right'><span className='bold lowercase'>többi UH:</span></p>
                            <p className='uppercase align-right'>havonta 2 alkalommal</p>
                        </div>
                    </div>

                    <hr />

                    <div className='ambulancia_appointment'>
                        <p className='bold'>Laboratóriumi járóbeteg szakellátás</p>

                        <div>
                            <p className='uppercase align-right'>Hétfő</p>
                            <p className='uppercase align-right'>Kedd</p>
                            <p className='uppercase align-right'>Szerda</p>
                            <p className='uppercase align-right'>Csütörtök</p>
                        </div>
                    </div>

                    <hr />

                    <div className='ambulancia_appointment'>
                        <p className='bold'>Gyógymasszázs nem szakorvosi óra</p>

                        <div>
                            <p className='uppercase align-right'>Kedd</p>
                            <p className='uppercase align-right'>Csütörtök</p>
                        </div>
                    </div>

                    <hr />

                    <div className='ambulancia_appointment'>
                        <p className='bold'>Gyógytorna nem szakorvosi óra</p>

                        <div>
                            <p className='uppercase align-right'>Hétfő</p>
                            <p className='uppercase align-right'>Kedd</p>
                            <p className='uppercase align-right'>Szerda</p>
                            <p className='uppercase align-right'>Csütörtök</p>
                            <p className='uppercase align-right'>Péntek</p>
                        </div>
                    </div>

                    <hr />

                    <div className='ambulancia_appointment'>
                        <p className='bold'>Fizioterápia</p>

                        <div>
                            <p className='uppercase align-right'>Hétfő</p>
                            <p className='uppercase align-right'>Kedd</p>
                            <p className='uppercase align-right'>Szerda</p>
                            <p className='uppercase align-right'>Csütörtök</p>
                            <p className='uppercase align-right'>Péntek</p>
                        </div>
                    </div>

                    <hr />

                    <div className='ambulancia_appointment'>
                        <p className='bold'>Nappali kórház</p>

                        <div>
                            <p className='uppercase align-right'>Hétfő</p>
                            <p className='uppercase align-right'>Kedd</p>
                            <p className='uppercase align-right'>Szerda</p>
                            <p className='uppercase align-right'>Csütörtök</p>
                            <p className='uppercase align-right'>Péntek</p>
                        </div>
                    </div>

                    <hr />

                    <p className='align-center uppercase'>TISZTELT BETEGEINK!</p>
                    <p className='align-center uppercase'>KÉRJÜK, ÉLJENEK AZ ELŐJEGYZÉS LEHETŐSÉGÉVEL!</p>

                    <p className='bold italic align-center'>Székhely/levelezési cím:</p>
                    <p className='align-center'>Bodrogközi Járóbeteg Szakrendelő Nonprofit Kft.</p>
                    <p className='align-center'>3973, Cigánd, Fő u. 80.</p>
                    <p className='align-center bold'>Tel: +36-47-534-420</p>
                    <p className='align-center'>Fax: +36-47-534-435</p>
                </div>
            </ContentContainer>
        </>
    );
};