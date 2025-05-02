import './header_module.css';

export default function HeaderModule({ children, breadcrumb }) {
    return (
        <>
            <div className='header_of_content'>
                <div className='heading_head'>{children}</div>
                <div className='heading_line_container'>
                    <div className='heading_line'>
                        <div className='heading_line2'></div>
                    </div>
                </div>
                <div className='breadcrumb'><span className='breadcrumb_text1'>{breadcrumb[0]}</span><span className='breadcrumb_slash'>/</span><span className='breadcrumb_text2'>{breadcrumb[1]}</span><span className='breadcrumb_slash'>/</span><span className='breadcrumb_text3'>{breadcrumb[2]}</span></div>
            </div>
            <div className='header_triangle_container'>
                <div className='header_triangle'></div> {/* Új háromszög elem */}
            </div>
        </>
    );
};