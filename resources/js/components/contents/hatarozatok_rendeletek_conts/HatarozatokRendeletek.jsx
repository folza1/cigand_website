import { useEffect, useState } from "react";
import HeaderModule from "../modules/HeaderModule";
import ContentContainer from "../modules/ContentContainer";
import DownloadFile from "../modules/DownloadFile";
import "./hatarozatok_rendeletek.css";

export default function HatarozatokRendeletek() {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        Promise.all([
            fetch("/site_files/fajlnev_10vesszo_leiras.txt").then((res) =>
                res.text()
            ),
            fetch("/api/hatarozatok-rendeletek-files").then((res) =>
                res.json()
            ),
        ]).then(([text, sizes]) => {
            const lines = text.split("\n").filter(Boolean);
            const parsed = lines.map((line) => {
                const [file, ...descArr] = line.split(/,{10}/);
                const fname = file.trim();
                return {
                    file: fname,
                    desc: descArr.join("").trim(),
                    size: sizes[fname]
                        ? `${sizes[fname]} MB`
                        : "ismeretlen méret",
                };
            });
            setFiles(parsed);
        });
    }, []);

    return (
        <>
            <HeaderModule
                breadcrumb={[
                    "Városunk",
                    "Képviselő Testület",
                    "Határozatok és Rendeletek",
                ]}
            >
                Határozatok és Rendeletek
            </HeaderModule>
            <ContentContainer>
                <div className="hatarozatok_rendeletek_container">
                    <div className="hatarozatok_rendeletek_img">
                        <img
                            src="/images/middle_content_pics/hatarozatok_rendeletek_pics/hatarozatok_rendeletek.png"
                            alt="Mérleg ikon."
                            className="hatarozatok_rendeletek_img_file"
                        />
                    </div>
                    <p className="bold align-center">
                        Cigánd Város Önkormányzata rendeletei elérhetők itt is:
                    </p>
                    <p className="align-center rendeletek_bottom_margin">
                        <a
                            className="a_center_hatarozatok"
                            href="http://njt.hu/njt.php?onkormanyzati_rendeletek"
                            target="_blank"
                        >
                            http://njt.hu/njt.php?onkormanyzati_rendeletek
                        </a>
                    </p>
                    <div>
                        {files.map((item, i) => (
                            <DownloadFile
                                key={i}
                                file={`/documents_files/hatarozatok_rendeletek/${item.file}`}
                                extension_file="pdf.png"
                            >
                                {item.desc} - {item.size}
                            </DownloadFile>
                        ))}
                    </div>

                    <p className="bold align-center uppercase hatarozatok_margin_top">
                        Rendeletek Lácacséke, Révleányvár
                    </p>
                    <DownloadFile
                        file="/documents_files/hatarozatok_rendeletek/2021-10-12_lacacseke_kozmuvelodesi_rendelet.pdf"
                        extension_file="pdf.png"
                        size="0.77 MB -"
                    >
                        Lácacséke közművelődési rendelet
                    </DownloadFile>
                    <DownloadFile
                        file="/documents_files/hatarozatok_rendeletek/2021-10-12_revleanyvar_kozmuvelodesi_rendelet.pdf"
                        extension_file="pdf.png"
                        size="0.25 MB -"
                    >
                        Révleányvár közművelődési rendelet
                    </DownloadFile>
                </div>
            </ContentContainer>
        </>
    );
}
