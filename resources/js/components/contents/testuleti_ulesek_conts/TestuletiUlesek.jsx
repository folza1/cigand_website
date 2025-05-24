import React from "react";
import { useEffect, useState } from "react";
import HeaderModule from "../modules/HeaderModule";
import ContentContainer from "../modules/ContentContainer";
import "./testuleti_ulesek.css";
import DownloadFile from "../modules/DownloadFile";

export default function TestuletiUlesek() {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        fetch("/api/testuleti-ulesek-files")
            .then((res) => res.json())
            .then((data) => setFiles(data));
    }, []);

    return (
        <>
            <HeaderModule
                breadcrumb={[
                    "Városunk",
                    "Képviselő Testület",
                    "Testületi Ülések",
                ]}
            >
                Testületi Ülések
            </HeaderModule>
            <ContentContainer>
                <div className="testuleti_ulesek_container">
                    <p className="bold align-center">
                        Testületi Ülések Jegyzőkönyvei
                    </p>
                    {files.map((file, i) => (
                        <React.Fragment key={i}>
                            {i === 34 && (
                                <p className="bold align-center margin_testuleti_ulesek">
                                    2014. évi jegyzőkönyvek
                                </p>
                            )}
                            {i === 22 && (
                                <p className="bold align-center margin_testuleti_ulesek">
                                    2015. évi jegyzőkönyvek
                                </p>
                            )}
                            {i === 5 && (
                                <p className="bold align-center margin_testuleti_ulesek">
                                    2016. évi jegyzőkönyvek
                                </p>
                            )}
                            {i === 0 && (
                                <p className="bold align-center margin_testuleti_ulesek">
                                    2017. évi jegyzőkönyvek
                                </p>
                            )}
                            <DownloadFile
                                file={file.path}
                                extension_file="pdf.png"
                                size={`${file.size_mb} MB`}
                            >
                                {(() => {
                                    const match = file.path.match(
                                        /(\d{4})[\/_-].*?(\d{4})[\/_-](\d{2})[\/_-](\d{2})\.pdf$/
                                    );
                                    if (!match)
                                        return file.path.split("/").pop();
                                    const ev = match[2];
                                    const honapSzam = match[3];
                                    const nap = match[4];
                                    const honapok = [
                                        "január",
                                        "február",
                                        "március",
                                        "április",
                                        "május",
                                        "június",
                                        "július",
                                        "augusztus",
                                        "szeptember",
                                        "október",
                                        "november",
                                        "december",
                                    ];
                                    const honap =
                                        honapok[parseInt(honapSzam, 10) - 1];
                                    return `Jegyzőkönyv ${ev}. ${honap} ${nap}.`;
                                })()}
                            </DownloadFile>
                        </React.Fragment>
                    ))}
                </div>
            </ContentContainer>
        </>
    );
}
