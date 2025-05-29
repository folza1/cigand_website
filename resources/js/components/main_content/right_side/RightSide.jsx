import Infocontainer from "../../contents/infocontainer_conts/Infocontainer";
import "./rightside.css";

export default function RightSide() {
    return (
        <div className="right_side">
            <iframe
                src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FBudapest&amp;src=Z2tnMWJwdTlmaXNhMGZrZmJvOGYzbWNvZjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=aHUuaHVuZ2FyaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23C0CA33&amp;color=%23009688&amp;title=CIG%C3%81NDI%20ESEM%C3%89NYNAPT%C3%81R"
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="no"
            ></iframe>
            <Infocontainer />
        </div>
    );
}
