import './leftside.css';
import { Link } from 'react-router-dom';
import { scrollToOutlet } from '../../utils/scrollToOutlet';


export default function LeftSide() {
    return (
        <div className='left_side'>
            <Link to="/szechenyi2020" onClick={scrollToOutlet}>
                <img src="/images/left_images/szechenyi2020.jpg" width="100%" height="auto" />
            </Link>
        </div>
    );
};