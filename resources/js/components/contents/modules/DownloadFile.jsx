import "./download_file.css";

export default function DownloadFile({ children, file, extension_file }) {
    return (
        <>
            <div className="download_file">
                <div className="download_file_container">
                    <div className="download_file_children">{children}</div>
                    <div className="download_file_img">
                        <img src="/images/middle_content_pics/extension_files/word.png" />
                    </div>
                </div>
            </div>
        </>
    );
}
