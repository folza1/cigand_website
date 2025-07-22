import "./newsheader.css";

export default function NewsHeader({ children, new_date }) {
    return (
        <div className="telepules_uzemeltetes_title background">
            <span className="uppercase bold">{children}</span>
            <span>{new_date}</span>
        </div>
    );
}
