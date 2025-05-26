import { useEffect, useState } from "react";
import HeaderModule from "../modules/HeaderModule";
import ContentContainer from "../modules/ContentContainer";
import DownloadFile from "../modules/DownloadFile";
import "./hatarozatok_rendeletek.css";

export default function HatarozatokRendeletek() {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        fetch("/site_files/fajlnev_10vesszo_leiras.txt")
            .then((res) => res.text())
            .then((text) => {
                const lines = text.split("\n").filter(Boolean);
                const parsed = lines.map((line) => {
                    const [file, ...descArr] = line.split(/,{10}/);
                    return {
                        file: file.trim(),
                        desc: descArr.join("").trim(),
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
                                {item.desc}
                            </DownloadFile>
                        ))}
                    </div>
                </div>
            </ContentContainer>
        </>
    );
}
