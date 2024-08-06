export default function FullscreenImage({ src, onClose }){

    const fileName = src.replace(/^.*[\\/]/, '');

    const closeFullscreenByClick = () => {
      onClose();
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
                <img className="fullscreenImage" src={src}></img>
            </div>
          </div>
        </div>
      </div>
    )
}