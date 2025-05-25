import ContentContainer from "../modules/ContentContainer";
import DownloadFile from "../modules/DownloadFile";
import HeaderModule from "../modules/HeaderModule";
import "./hvi_hatarozatok.css";

export default function HVIHatarozatok() {
    return (
        <>
            <HeaderModule
                breadcrumb={[
                    "Önkormányzat",
                    "Egyéb",
                    "Helyi Választási Iroda Határozatok",
                ]}
            >
                Helyi Választási Iroda Határozatok
            </HeaderModule>
            <ContentContainer>
                <div className="hvi_hatarozatok_container">
                    <div className="hvi_hatarozatok_img">
                        <img
                            className="hvi_img"
                            src="/images/middle_content_pics/hvi_hatarozatok_pics/hvi_hatarozatok.png"
                            alt="Fekete fehér szerződés tollal."
                        />
                    </div>

                    <DownloadFile
                        file="/documents_files/hvi_hatarozatok/2019-02-12_hatarozat_261-3.pdf"
                        extension_file="pdf.png"
                        size="0.75 MB"
                    >
                        Önkormányzati képviselők számának meghat. 261-3/2019.
                    </DownloadFile>
                    <DownloadFile
                        file="/documents_files/hvi_hatarozatok/2019-02-12_hatarozat_261-4.pdf"
                        extension_file="pdf.png"
                        size="0.95 MB"
                    >
                        Szavazókörök és körzetadatok felülvizsgálata 261-4/2019.
                    </DownloadFile>
                    <DownloadFile
                        file="/documents_files/hvi_hatarozatok/68_128_2024.pdf"
                        extension_file="pdf.png"
                        size="0.16 MB"
                    >
                        Az egyéni listás képviselőjelölt és a polgármesterjelölt
                        állításához szükséges ajánlások számának megállapítása
                        Cigánd városban 68-128/2024.
                    </DownloadFile>
                    <DownloadFile
                        file="/documents_files/hvi_hatarozatok/68_129_2024.pdf"
                        extension_file="pdf.png"
                        size="0.16 MB"
                    >
                        Az egyéni listás képviselőjelölt és a polgármesterjelölt
                        állításához szükséges ajánlások számának megállapítása
                        Lácacséke községben. 68-129/2024
                    </DownloadFile>
                    <DownloadFile
                        file="/documents_files/hvi_hatarozatok/68_130_2024.pdf"
                        extension_file="pdf.png"
                        size="0.16 MB"
                    >
                        Az egyéni listás képviselőjelölt és a polgármesterjelölt
                        állításához szükséges ajánlások számának megállapítása
                        Révleányvár községben 68-130/2024
                    </DownloadFile>
                </div>
            </ContentContainer>
        </>
    );
}
