import { useEffect } from 'react';

export default function GalleryPage(props){

    useEffect(() => {document.title = props.title;return () => {};}, [props.title]);

    return (
    <div>
    </div>
    )
}