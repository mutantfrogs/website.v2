export default function GalleryThumbnail(imageLink, thumbnailLink){

    return(
         <button className="galleryThumbnail">
            <img src={thumbnailLink}></img>
        </button>
    ) 
}