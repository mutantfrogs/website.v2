import React, { useState } from 'react';
import test250 from '../assets/test250.png'

export default function GalleryTabs() {
  const [selectedTab, setSelectedTab] = useState('2024');
  const [nsfwChecked, setNsfwChecked] = useState(false);

  const handleTabClick = (tabId) => {
    setSelectedTab(tabId);
  };

  const handleNsfwChange = (event) => {
    setNsfwChecked(event.target.checked);
  };

  return (
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
        <input type="checkbox" id="nsfwTag" checked={nsfwChecked} onChange={handleNsfwChange}/><label for="nsfwTag">show nsfw entries?</label>
        <div className='flexContainerRow' style={{maxWidth: 900, marginTop: '20px'}}>
            <img src={test250}></img>
            <img src={test250}></img>
            <img src={test250}></img>
            <img src={test250}></img>
            <img src={test250}></img>
            <img src={test250}></img>
            <img src={test250}></img>
            <img src={test250}></img>
            <img src={test250}></img>
            <img src={test250}></img>
            <img src={test250}></img>
            <img src={test250}></img>
            
        </div>
      </article>

      <article role="tabpanel" id="2023" hidden={selectedTab !== '2023'}>
        <h2 className='tabHeader'>2023</h2>
        <input type="checkbox" id="nsfwTag" checked={nsfwChecked} onChange={handleNsfwChange}/><label for="nsfwTag">show nsfw entries?</label>
      </article>

      <article role="tabpanel" id="2022" hidden={selectedTab !== '2022'}>
        <h2 className='tabHeader'>2022</h2>
        <input type="checkbox" id="nsfwTag" checked={nsfwChecked} onChange={handleNsfwChange}/><label for="nsfwTag">show nsfw entries?</label>
      </article>

      <article role="tabpanel" id="2021" hidden={selectedTab !== '2021'}>
        <h2 className='tabHeader'>2021</h2>
        <input type="checkbox" id="nsfwTag" checked={nsfwChecked} onChange={handleNsfwChange}/><label for="nsfwTag">show nsfw entries?</label>
      </article>

      <article role="tabpanel" id="2020" hidden={selectedTab !== '2020'}>
        <h2 className='tabHeader'>2020</h2>
        <input type="checkbox" id="nsfwTag" checked={nsfwChecked} onChange={handleNsfwChange}/><label for="nsfwTag">show nsfw entries?</label>
      </article>
    </section>
  );
}