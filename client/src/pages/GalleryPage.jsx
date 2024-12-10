import { useEffect } from 'react';
import GalleryWindow from '../components/gallery/GalleryWindow';

export default function GalleryPage(props){

    useEffect(() => {document.title = props.title;return () => {};}, [props.title]);

    return (
    <div className='flexContainerColumn'>
        <GalleryWindow></GalleryWindow>   
    </div>
    )
}