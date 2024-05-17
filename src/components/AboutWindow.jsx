import Canvas3D from './Canvas3D'
import Socials from './Socials'

export default function AboutWindow() {

    return (
      <div className='flexContainerRow' style={{ marginTop: '60px', marginBottom: '60px' }}>
        <div className='window' style={{ minWidth: 800 }}>
          <div className="title-bar">
            <div className="title-bar-text">📁 my documents</div>
          </div>

          <div className='flexContainerColumn'>
                <article role="tabpanel" style={{marginTop: '20px'}}>
                    <p style={{fontSize: '12px'}}>
                        hello! my name is jake/julia. i'm a 23 year old non-binary artist, developer, rhythm gamer, and netizen. i go by any pronouns!            
                    </p>
                    <Socials></Socials>
                </article>
          </div>
        </div>
      </div>
    )
  }
  