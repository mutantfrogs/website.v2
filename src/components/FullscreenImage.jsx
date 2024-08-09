import React, { useState } from 'react';
import galleryData from './../assets/galleryData.json'

export default function FullscreenImage({ src, onClose }){

    const [currentSrc, setCurrentSrc] = useState(src);
    const fileName = currentSrc.replace(/^.*[\\/]/, '');

    const closeFullscreenByClick = () => {
      onClose();
    }

    const nextImage = (event) => {
      event.stopPropagation();
      const currentIndex = galleryData.findIndex(art => art.artURL === currentSrc);
      const newIndex = (currentIndex + 1) % galleryData.length;
      setCurrentSrc(galleryData[newIndex].artURL);
    }

    const previousImage = (event) => {
      event.stopPropagation();
      const currentIndex = galleryData.findIndex(art => art.artURL === currentSrc);
      const newIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
      setCurrentSrc(galleryData[newIndex].artURL);
    }

    return(
      <div className='fullscreenBackground' onClick={closeFullscreenByClick}>
        <div className='flexContainerRow' id="fullScreenContainer" style={{ height: '100%'}}>
          <div className='window'>
            <div className="title-bar">
            <div className="title-bar-text">🌎 {fileName} - Windows Picture Viewer</div>
              <div className="title-bar-controls">
                  <button aria-label="Close" onClick={onClose}></button>
                  </div>
            </div>

            <div className='flexContainerColumn'>
                <img className="fullscreenImage" src={currentSrc}></img>
                <div className='flexContainerRow'>
                  <button onClick={previousImage} className='galleryArrows' style={{left: '20px'}}>previous</button>
                  <button onClick={nextImage} className='galleryArrows' style={{ right: '20px' }}>next</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
}