import './leftside.css';
import { Link } from 'react-router-dom';
import { scrollToOutlet } from '../../utils/scrollToOutlet';


export default function LeftSide() {
    return (
        <div className='left_side'>
            <div className='left_side_pic_container'>
                <Link to="/szechenyi2020" onClick={scrollToOutlet}>
                    <img src="/images/left_images/szechenyi2020.jpg" />
                </Link>
            </div>
            <div className='left_side_pic_container'>
                <Link to="/szechenyi2020" onClick={scrollToOutlet}>
                    <img src="/images/left_images/ERFA_banner.jpg" />
                </Link>
            </div>
            <div className='left_side_pic_container'>
                <Link to="/szechenyi2020" onClick={scrollToOutlet}>
                    <img src="/images/left_images/sztp_logo.jpg" />
                </Link>
            </div>
            <div className='left_side_pic_container padding_pic'>
                <Link to="/szechenyi2020" onClick={scrollToOutlet}>
                    <img src="/images/left_images/interreg.png" />
                </Link>
            </div>
            <div className='left_side_pic_container'>
                <Link to="/szechenyi2020" onClick={scrollToOutlet}>
                    <img src="/images/left_images/ugyintezes_szabadon.png" />
                </Link>
            </div>
            <div className='left_side_pic_container'>
                <Link to="/szechenyi2020" onClick={scrollToOutlet}>
                    <img src="/images/left_images/magyar_allamkincstar.gif" />
                </Link>
            </div>
            <div className='left_side_pic_container'>
                <Link to="/szechenyi2020" onClick={scrollToOutlet}>
                    <img src="/images/left_images/magyar_falu.jpg" />
                </Link>
            </div>
        </div>
    );
};