import './App.css'

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div className="left-container">
          <img
            className="left-container-music-img"
            src="/image-189.66.png"
            alt="Music image"
          />
          <div className="music-info-container">
            <h1>Acorda Devinho</h1>
            <p>Banda Rocketseat</p>
          </div>
          <div className="left-play-settings">
            <img src="/play-back.svg" alt="Play back button" />
            <img src="/play.svg" alt="Play button" />
            <img src="/play-forward.svg" alt="Play forward button" />
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
              <img src="/image-84.03.png" alt="Music image" />
              <div className="music-info-container">
                <h1>Acorda Devinho</h1>
                <p>Banda Rocketseat</p>
              </div>
            </div>
            <div className="right-play-settings">
              <img src="/play-back.svg" alt="Play back button" />
              <img
                className="right-top-play-button"
                src="/play.svg"
                alt="Play button"
              />
              <img
                src="/play-forward.svg"
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
              <img src="/image-84.03.png" alt="Music image" />
              <div className="music-info-container">
                <h1>Acorda Devinho</h1>
                <p>Banda Rocketseat</p>
              </div>
            </div>
            <div className="right-play-settings">
              <img src="/play-back.svg" alt="Play back button" />
              <img
                className="right-top-play-button"
                src="/play.svg"
                alt="Play button"
              />
              <img
                src="/play-forward.svg"
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
