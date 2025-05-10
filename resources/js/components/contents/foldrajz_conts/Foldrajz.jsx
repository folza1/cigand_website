import './foldrajz.css';
import HeaderModule from '../modules/HeaderModule';

export default function Foldrajz() {
    return (
        <>
            <HeaderModule breadcrumb={["Városunk", "Információk", "Földrajz"]}>
                Földrajz
            </HeaderModule>
            <div className='foldrajz'>
                <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=F%C5%91%20utca%2080.%20Cig%C3%A1nd+(Cig%C3%A1nd)&amp;t=&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=7e92531c0644ed16dad3622f32c5c14a188c57dc'></script>
            </div>
        </>
    );
};