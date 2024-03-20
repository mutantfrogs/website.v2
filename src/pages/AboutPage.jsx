import { useEffect } from 'react';
import Canvas3D from '../components/Canvas3D';
import Socials from '../components/Socials';

export default function AboutPage(props){

    useEffect(() => {document.title = props.title;return () => {};}, [props.title]);

    return (
    <div className='flexContainerColumn'>
        <Canvas3D/>
        <Socials/>
    </div>
    )
}