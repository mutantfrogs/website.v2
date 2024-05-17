import { useEffect } from 'react';
import AboutWindow from '../components/AboutWindow';

export default function AboutPage(props){

    useEffect(() => {document.title = props.title;return () => {};}, [props.title]);

    return (
        <div className='flexContainerColumn'>
            <AboutWindow></AboutWindow>
        </div>
    )
}