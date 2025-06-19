import ContentContainer from "../modules/ContentContainer";
import DownloadFile from "../modules/DownloadFile";
import HeaderModule from "../modules/HeaderModule";
import "./gazdahirek.css";

export default function Gazdahirek() {
    return (
        <>
            <HeaderModule
                breadcrumb={["Városunk", "Információk", "Gazdahírek"]}
            >
                Gazdahírek
            </HeaderModule>
            <ContentContainer>
                <div className="gazdahirek_container">
                    <p className="bold align-center">Falugazdász</p>
                    <p className="align-center">Oláh István</p>
                    <p className="align-center">Tel.: +36-30/497-8049</p>
                    <p className="align-center">3973 Cigánd Fő u. 53.</p>

                    <hr />

                    <div className="gazdahirek_img">
                        <img
                            className="gazdahirek_container_img"
                            src="/images/middle_content_pics/gazdahirek_pics/gazdahirek1.jpg"
                            alt="Sertéspestisről szóló dokumentum előlapja."
                        />
                    </div>
                    <DownloadFile
                        file="/documents_files/gazdahirek/sertespestis.pdf"
                        extension_file="pdf.png"
                        size="0.55 MB"
                    >
                        A teljes dokumentum innen letölthető
                    </DownloadFile>
                </div>
            </ContentContainer>
        </>
    );
}
