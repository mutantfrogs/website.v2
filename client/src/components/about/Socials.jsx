import instagram from '../../assets/instagram.png'
import github from '../../assets/github.png'
import youtube from '../../assets/youtube.png'
import twitter from '../../assets/twitter.png'
import bluesky from '../../assets/bluesky.png'

export default function Socials(){
    return(
        <div>
            <div className='flexContainerRow'>
            <a target="_blank" href="https://bsky.app/profile/mutantfro.gs">
                <img className="socialsBtn" src={bluesky} alt="Blue Sky" />
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
