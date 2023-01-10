import './App.css'

import Image189 from "/assets/image-189.66.png"
import Image84 from "/assets/image-84.03.png"
import PlayBack from "/assets/play-back.svg"
import Play from "/assets/play.svg"
import PlayForward from "/assets/play-forward.svg"

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div className="left-container">
          <img
            className="left-container-music-img"
            src={Image189}
            alt="Music image"
          />
          <div className="music-info-container">
            <h1>Acorda Devinho</h1>
            <p>Banda Rocketseat</p>
          </div>
          <div className="left-play-settings">
            <img src={PlayBack} alt="Play back button" />
            <img src={Play} alt="Play button" />
            <img src={PlayForward} alt="Play forward button" />
          </div>
          <div className="left-play-details">
            <div className="playbar-container">
              <div className="left-playbar"></div>
              <div className="left-listened-playbar"></div>
            </div>
            <div className="playbar-timer">
              <p>03:20</p>
              <p>00:12</p>
            </div>
          </div>
        </div>

        <div className="right-container">
          <div className="right-top-container">
            <div className="music-details-container">
              <img src={Image84} alt="Music image" />
              <div className="music-info-container">
                <h1>Acorda Devinho</h1>
                <p>Banda Rocketseat</p>
              </div>
            </div>
            <div className="right-play-settings">
              <img src={PlayBack} alt="Play back button" />
              <img
                className="right-top-play-button"
                src={Play}
                alt="Play button"
              />
              <img
                src={PlayForward}
                alt="Play forward button"
              />
            </div>
            <div className="right-play-details">
              <div className="playbar-container">
                <div className="right-playbar"></div>
                <div className="right-listened-playbar"></div>
              </div>
              <div className="playbar-timer">
                <p>03:20</p>
                <p>00:12</p>
              </div>
            </div>
          </div>

          <div className="right-bottom-container">
            <div className="music-details-container">
              <img src={Image84} alt="Music image" />
              <div className="music-info-container">
                <h1>Acorda Devinho</h1>
                <p>Banda Rocketseat</p>
              </div>
            </div>
            <div className="right-play-settings">
              <img src={PlayBack} alt="Play back button" />
              <img
                className="right-top-play-button"
                src={Play}
                alt="Play button"
              />
              <img
                src={PlayForward}
                alt="Play forward button"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
