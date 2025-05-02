import './koszonto.css';
import HeaderModule from './modules/HeaderModule';

export default function Koszonto() {
    return (
        <>
            <HeaderModule breadcrumb={["Városunk", "Információk", "Köszöntő"]}>
            Köszöntő
            </HeaderModule>
        </>
    );
};