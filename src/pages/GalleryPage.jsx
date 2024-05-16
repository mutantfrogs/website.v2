import { useEffect } from 'react';
import GalleryTabs from '../components/GalleryTabs';

export default function GalleryPage(props){

    useEffect(() => {document.title = props.title;return () => {};}, [props.title]);

    return (
    <div className='flexContainerColumn'>
        <GalleryTabs></GalleryTabs>   
    </div>
    )
}