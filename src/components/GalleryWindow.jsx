import React, { useState } from 'react';
import galleryData from './../assets/galleryData.json'
import FullscreenImage from './FullscreenImage';
import { useNavigate, useParams } from 'react-router-dom';

export default function GalleryWindow() {

  const [selectedTab, setSelectedTab] = useState('2024');
  const [imageSrc, setimageSrc] = useState(null);

  const handleTabClick = (tabId) => {
    setSelectedTab(tabId);
  };

  const handleNsfwChange = (event) => {
    setNsfwChecked(event.target.checked);
  };

  const handleImageCLick = (src) => {
    setimageSrc(src);
  };

  const handleCloseFullscreen = () => {
    setimageSrc(null);
  };

  const populateArt = (year) => {
    return galleryData.filter(item => item.year === year).map(item => (
      <button key={item.id} className="galleryImage" onClick={() => handleImageCLick(item.artURL)}>
        <img src={item.thumbURL}></img>
      </button>
    ));
  }

  return (
    <div className='window windowMargin newWindow'>
        <div className="title-bar">
          <div className="title-bar-text">📁 file explorer</div>
        </div>
        <div className='flexContainerRow'>
          <section className="tabs" id='gallerySection'>
        <menu role="tablist" aria-label="Sample Tabs">
          <button
            role="tab"
            aria-selected={selectedTab === '2024'}
            aria-controls="2024"
            onClick={() => handleTabClick('2024')}
          >
            2024
          </button>
          <button
            role="tab"
            aria-selected={selectedTab === '2023'}
            aria-controls="2023"
            onClick={() => handleTabClick('2023')}
          >
            2023
          </button>
          <button
            role="tab"
            aria-selected={selectedTab === '2022'}
            aria-controls="2022"
            onClick={() => handleTabClick('2022')}
          >
            2022
          </button>
          <button
            role="tab"
            aria-selected={selectedTab === '2021'}
            aria-controls="2021"
            onClick={() => handleTabClick('2021')}
          >
            2021
          </button>
          <button
            role="tab"
            aria-selected={selectedTab === '2020'}
            aria-controls="2020"
            onClick={() => handleTabClick('2020')}
          >
            2020
          </button>
        </menu>

            <article role="tabpanel" hidden={selectedTab !== '2024'}>
              <h2 className='tabHeader'>2024</h2>
              <div id="2024" className='flexContainerRow galleryYear'>
              {populateArt(2024)}
              </div>
            </article>

            <article role="tabpanel" hidden={selectedTab !== '2023'}>
              <h2 className='tabHeader'>2023</h2>
              <div id="2023" className='flexContainerRow galleryYear'>
                  {populateArt(2023)}
              </div>
            </article>

            <article role="tabpanel" hidden={selectedTab !== '2022'}>
              <h2 className='tabHeader'>2022</h2>
              <div id="2023" className='flexContainerRow galleryYear'>
                  {populateArt(2022)}
              </div>
            </article>

            <article role="tabpanel" hidden={selectedTab !== '2021'}>
              <h2 className='tabHeader'>2021</h2>
              <div id="2023" className='flexContainerRow galleryYear'>
                  {populateArt(2021)}
              </div>
            </article>

            <article role="tabpanel" hidden={selectedTab !== '2020'}>
              <h2 className='tabHeader'>2020</h2>
              <div id="2023" className='flexContainerRow galleryYear'>
                  {populateArt(2020)}
              </div>
            </article>
          </section>
        </div>
        {imageSrc && (<FullscreenImage src={imageSrc} onClose={handleCloseFullscreen} />)}
    </div>
  );
}