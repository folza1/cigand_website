import './news.css';
import HeaderModule from './modules/HeaderModule';

export default function News(){
    return(
        <>
            <HeaderModule breadcrumb={["Főoldal", "Tartalom", "Hírek"]}>
            Hírek
            </HeaderModule>
        </>
    );
};