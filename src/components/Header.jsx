import defaultBanner from '../assets/defaultBanner.png'
import aboutBanner from '../assets/aboutBanner.png'
import galleryBanner from '../assets/galleryBanner.png'
import blogBanner from '../assets/blogBanner.png'
import { Link, useLocation } from 'react-router-dom';

export default function Header() {

  const location = useLocation();

  const getBannerImage = () => {
    switch (location.pathname) {
      case '/about':
        return aboutBanner;
      case '/gallery':
        return galleryBanner;
      case '/blog':
        return blogBanner;
      default:
        return defaultBanner;
    }
  };

  return (
    <div>
      <img className='headerBanner' src={getBannerImage()} alt='logo'></img>
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
  )
}
