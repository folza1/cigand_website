import './header_module.css';

export default function HeaderModule({ children }) {
    return (
        <div className='header_of_content'>
            <div className='heading_head'>{children}</div>
            <div className='heading_line_container'>
                <div className='heading_line'>
                    <div className='heading_line2'></div>
                </div>
            </div>
            <div className='breadcrumb'><span className='breadcrumb_text1'>Városunk</span><span className='breadcrumb_slash'>/</span><span className='breadcrumb_text2'>Információk</span><span className='breadcrumb_slash'>/</span><span className='breadcrumb_text3'>{children}</span></div>
        </div>
    );
};