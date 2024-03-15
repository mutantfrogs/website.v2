import { useEffect } from 'react';

export default function GalleryPage(props){

    useEffect(() => {document.title = props.title;return () => {};}, [props.title]);

    return (
    <div className='galleryContainer'>
        <h1 className='galleryHeader'>2024</h1>
        <div id="2024"></div>     
        <h1 className='galleryHeader'>2023</h1>
        <div id="2023"></div>     
        <h1 className='galleryHeader'>2022</h1>
        <div id="2022"></div>     
        <h1 className='galleryHeader'>2021</h1>
        <div id="2021"></div>     
        <h1 className='galleryHeader'>2020</h1>
        <div id="2020"></div>     
        <h1 className='galleryHeader'>2019</h1>
        <div id="2019"></div>     
    </div>
    )
}