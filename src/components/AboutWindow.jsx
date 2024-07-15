import Canvas3D from './Canvas3D'
import Socials from './Socials'

export default function AboutWindow() {

    return (
      <div className='flexContainerRow' style={{ marginTop: '60px', marginBottom: '60px' }}>
        <div className='window' style={{ minWidth: 800 }}>
          <div className="title-bar">
            <div className="title-bar-text">📝 notepad</div>
          </div>

          <div className='flexContainerColumn'>
                <article role="tabpanel" style={{marginTop: '20px', marginBottom:'20px', maxWidth:'660px'}}>
                    <p style={{fontSize: '14px', textAlign:'center', marginBottom:'20px'}}>
                        hello! my name is <b>jake/julia (they/them)</b> but i also go by mutantfrogs online. i'm a 23 year old nonbinary artist, programmer, and rhythm gamer. i love creating art and learning new skills, so i made this website to be a hub of my creations. from illustrations to writings to minecraft mods. if I made it, you can probably find it here! thank you for visiting and i hope you enjoy browsing my site! 
                        <br/>
                        <br/>
                        <b>contact: themutantfrogs@gmail.com</b>
                    </p>
                    
                    <Canvas3D></Canvas3D>
                    <Socials></Socials>
                </article>
          </div>
        </div>
      </div>
    )
  }
  