import './fooldal.css';
import HeaderModule from './modules/HeaderModule';

export default function Fooldal(){
    return(
        <>
            <HeaderModule breadcrumb={["Főoldal", "Tartalom", "Hírek"]}>
            Hírek
            </HeaderModule>
        </>
    );
};