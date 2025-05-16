import "./download_file.css";

export default function DownloadFile({ children, file }) {
    return (
        <div className="download_file_container">
            <a href={file} target="_blank" className="download_file_link">
                <div className="download_file_child">{children}</div>
            </a>
        </div>
    );
}
