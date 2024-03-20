import instagram from '../assets/instagram.png'
import github from '../assets/github.png'
import youtube from '../assets/youtube.png'
import twitter from '../assets/twitter.png'

export default function Socials(){
    return(
        <div>
            <div className='flexContainerRow'>
            <a target="_blank" href="https://www.instagram.com/mutantfrogs/">
                <img className="socialsBtn" src={instagram} alt="Instagram" />
                </a>
            <a target="_blank" href="https://twitter.com/mutantfrogs">
                <img className="socialsBtn" src={twitter} alt="Twitter" />
                </a>
            <a target="_blank" href="https://www.youtube.com/@mutantfrogs">
                <img className="socialsBtn" src={youtube} alt="YouTube" />
                </a>
            <a target="_blank" href="https://github.com/mutantfrogs">
                <img className="socialsBtn" src={github} alt="GitHub" />
                </a>
        </div>
            <div className='centeredText'>
                <p> (i'm barely active on anything but this is where else you can find me!) </p>
            </div>
        </div>
    )
}