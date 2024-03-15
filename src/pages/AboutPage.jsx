import Socials from './../components/Socials'
import plaque from './../assets/plaque.png'
import { useEffect } from 'react';

export default function AboutPage(props){

    useEffect(() => {document.title = props.title;return () => {};}, [props.title]);

    return (
    <div className='aboutContainer'>
       <div className='plauqeDiv'>
            <img className='plaque' src={plaque}></img>
        </div>
       <Socials/>
    </div>
    )
}