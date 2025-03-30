import './main_content.css';
import LeftSide from "./left_side/LeftSide";
import Middle from "./middle/Middle";
import RightSide from "./right_side/RightSide";
import { Outlet } from 'react-router-dom';  // Importáld az Outlet-et


export default function MainContent() {
    return (
        <div className='main_content'>
            <LeftSide />
            <Middle>
                <div id="outlet">
                    <Outlet />
                </div>
            </Middle>
            <RightSide />
        </div>
    );
};