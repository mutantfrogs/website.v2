import defaultBanner from '../assets/defaultBanner.png';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {

  const location = useLocation();

  const getBannerText = () => {
    switch (location.pathname) {
      case '/about':
        return "about";
      case '/gallery':
        return "gallery";
      case '/blog':
        return "blog";
      default:
        return "mutantfrogs";
    }
  };

  return (
    <div className='flexContainerRow' style={{ marginTop: '15px' }}>
      <div className='window' style={{ width: 650 }}>
        <div className="title-bar">
          <div className="title-bar-text">welcome to my website!</div>
            <div className="title-bar-controls">
              <button aria-label="Help"></button>
              <button aria-label="Close"></button>
            </div>
        </div>

        <div>
          <h1 className='headerText'>{getBannerText()}</h1>
            <div className='flexContainerRow'>
              <Link to="/">
                <button className='headerNavigationBtn'>home</button>
                </Link>
              <Link to="/about">
                <button className='headerNavigationBtn'>about</button>
                </Link>
              <Link to="/gallery">
                <button className='headerNavigationBtn'>gallery</button>
                </Link>
              <Link to="/blog">
                <button className='headerNavigationBtn'>blog</button>
                </Link>
            </div>
        </div>

        <div class="status-bar">
          <p class="status-bar-field">Press X for cmd</p>
          <p class="status-bar-field">You are visitor number #16!</p>
          <p class="status-bar-field">CPU Usage: 14%</p>
        </div>

      </div>
    </div>
  )
}
