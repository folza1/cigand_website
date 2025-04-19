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
        </div>
    );
};