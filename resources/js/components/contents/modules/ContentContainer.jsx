import './content_container.css';

export default function ContentContainer({children}){
    return(
        <div className='content_container'>
            {children}
        </div>
    );
};