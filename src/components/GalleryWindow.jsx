import React, { useState } from 'react';
import galleryData from './../assets/galleryData.json'
import FullscreenImage from './FullscreenImage';

export default function GalleryWindow() {

  const galleryData = [
    {
        "id": "payback",
        "artURL": "src/assets/art/2024/payback.png",
        "thumbURL": "src/assets/art/2024/thumbnails/payback.png",
        "year": 2024,
        "nsfw": false
    },
    {
        "id": "grafitti",
        "artURL": "src/assets/art/2024/grafitti.png",
        "thumbURL": "src/assets/art/2024/thumbnails/grafitti.png",
        "year": 2024,
        "nsfw": false
    },
    {
        "id": "twolifes",
        "artURL": "src/assets/art/2024/twolifes.png",
        "thumbURL": "src/assets/art/2024/thumbnails/twolifes.png",
        "year": 2024,
        "nsfw": false
    },
    {
        "id": "april2024",
        "artURL": "src/assets/art/2024/april2024.png",
        "thumbURL": "src/assets/art/2024/thumbnails/april2024.png",
        "year": 2024,
        "nsfw": false
    },
    {
        "id": "march2024",
        "artURL": "src/assets/art/2024/march2024.png",
        "thumbURL": "src/assets/art/2024/thumbnails/march2024.png",
        "year": 2024,
        "nsfw": false
    },
    {
        "id": "feburary2024",
        "artURL": "src/assets/art/2024/feburary2024.png",
        "thumbURL": "src/assets/art/2024/thumbnails/feburary2024.png",
        "year": 2024,
        "nsfw": false
    },
    {
        "id": "mishka",
        "artURL": "src/assets/art/2024/mishka.png",
        "thumbURL": "src/assets/art/2024/thumbnails/mishka.png",
        "year": 2024,
        "nsfw": false
    },
    {
        "id": "birthofjulia",
        "artURL": "src/assets/art/2024/birthofjulia.png",
        "thumbURL": "src/assets/art/2024/thumbnails/birthofjulia.png",
        "year": 2024,
        "nsfw": false
    },
    {
        "id": "january2024",
        "artURL": "src/assets/art/2024/january2024.png",
        "thumbURL": "src/assets/art/2024/thumbnails/january2024.png",
        "year": 2024,
        "nsfw": false
    }

]

  const [selectedTab, setSelectedTab] = useState('2024');
  const [nsfwChecked, setNsfwChecked] = useState(false);
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
    <div className='window' style={{ width: 1000, marginTop: '60px', marginBottom: '60px' }}>
        <div className="title-bar">
          <div className="title-bar-text">🎨 untitled - Paint</div>
        </div>
        <div className='flexContainerRow'>
          <section className="tabs" style={{ maxWidth: '930px', minWidth: '930px', marginTop: '20px'}}>
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

            <article role="tabpanel" id="2024" hidden={selectedTab !== '2024'}>
              <h2 className='tabHeader'>2024</h2>
              <input type="checkbox" id="nsfwTag" checked={nsfwChecked} onChange={handleNsfwChange}/><label htmlFor="nsfwTag">show nsfw entries? (nudity, blood, etc.)</label>
              <div id="2024" className='flexContainerRow' style={{maxWidth: 900, marginTop: '20px'}}>
              {populateArt(2024)}
              </div>
            </article>

            <article role="tabpanel" id="2023" hidden={selectedTab !== '2023'}>
              <h2 className='tabHeader'>2023</h2>
              <input type="checkbox" id="nsfwTag" checked={nsfwChecked} onChange={handleNsfwChange}/><label htmlFor="nsfwTag">show nsfw entries? (nudity, blood, etc.)</label>
              <div id="2023" className='flexContainerRow' style={{maxWidth: 900, marginTop: '20px'}}>
                  {populateArt(2023)}
              </div>
            </article>

            <article role="tabpanel" id="2022" hidden={selectedTab !== '2022'}>
              <h2 className='tabHeader'>2022</h2>
              <input type="checkbox" id="nsfwTag" checked={nsfwChecked} onChange={handleNsfwChange}/><label htmlFor="nsfwTag">show nsfw entries? (nudity, blood, etc.)</label>
              <div id="2023" className='flexContainerRow' style={{maxWidth: 900, marginTop: '20px'}}>
                  {populateArt(2022)}
              </div>
            </article>

            <article role="tabpanel" id="2021" hidden={selectedTab !== '2021'}>
              <h2 className='tabHeader'>2021</h2>
              <input type="checkbox" id="nsfwTag" checked={nsfwChecked} onChange={handleNsfwChange}/><label htmlFor="nsfwTag">show nsfw entries? (nudity, blood, etc.)</label>
              <div id="2023" className='flexContainerRow' style={{maxWidth: 900, marginTop: '20px'}}>
                  {populateArt(2021)}
              </div>
            </article>

            <article role="tabpanel" id="2020" hidden={selectedTab !== '2020'}>
              <h2 className='tabHeader'>2020</h2>
              <input type="checkbox" id="nsfwTag" checked={nsfwChecked} onChange={handleNsfwChange}/><label htmlFor="nsfwTag">show nsfw entries? (nudity, blood, etc.)</label>
              <div id="2023" className='flexContainerRow' style={{maxWidth: 900, marginTop: '20px'}}>
                  {populateArt(2020)}
              </div>
            </article>
          </section>
        </div>
        {imageSrc && (<FullscreenImage src={imageSrc} onClose={handleCloseFullscreen} />)}
    </div>
  );
}