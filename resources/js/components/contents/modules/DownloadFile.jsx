import "./download_file.css";

export default function DownloadFile({
    children,
    file,
    extension_file,
    size,
    className,
}) {
    return (
        <>
            <div className={`download_file${className ? " " + className : ""}`}>
                <a href={file} target="_blank" rel="noopener noreferrer">
                    <div className="download_file_container">
                        <div className="download_file_children">
                            {children} - {size}
                        </div>
                        <div className="download_file_img">
                            <img
                                src={`/images/middle_content_pics/extension_files/${extension_file}`}
                            />
                        </div>
                    </div>
                </a>
            </div>
        </>
    );
}
