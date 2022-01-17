import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div className='reelse-item'>
        <header className="reelse-insta_head">
          <div className="top">
            <div className="top__column">
              <span className="top__column-text">5:32</span>
              <i className="fas fa-location-arrow fa-xs"></i>
            </div>
            <div className="top__column">
              <i className="fas fa-signal fa-xs"></i>
              <i className="fas fa-wifi fa-xs"></i>
              <i className="fas fa-battery-three-quarters fa-xs"></i>
            </div>
          </div>
          <div className="icons-block-top">
                <span className="icons-text">릴스</span>
                <i className="fas fa-camera fa-lg"></i>
              </div>
        </header>



        <body className="reelse-insta_video">
          <video autoplay="autoplay" muted="muted">
            <source src="gumegume.mp4" type="video/mp4" />
          </video>
        </body>

        <nav className="reelse-insta_icons">
          <div className="insta-id">
              <div className="text-block">
                <img src="gume.jpg" className="insta-id-photo" />
                <span className="insta-id-text">hana0864</span>
                <span className="insta-id-text">팔로우</span>
              </div>
              <i className="fas fa-ellipsis-h fa-xs"></i>
              <div className="text-block">
                <i className="fas fa-music fa-xs"></i>
                <span className="insta-text">neko_nomade-원본비디오</span>
              </div>
            </div>

            <div className="icons">
              <div className="icons-block">
                <i className="far fa-heart fa-lg"></i>
                <span className="icon-textt">3,071</span>
                <i className="far fa-comment fa-lg"></i>
                <span className="icon-textt">63</span>
                <i className="far fa-paper-plane fa-lg"></i>
                <i className="fas fa-ellipsis-h fa-xs"></i>
                <img src="sdd.jpg" className="icon-bottom"/>          
              </div>
            </div>
        </nav>
      </div>

   {/*  */}
   {/*  */}

   
      <div className="item-two">
        <body className="reelse-insta_videotwo">
          <video autoplay="autoplay" muted="muted">
            <source src="gume.mp4" type="video/mp4" />
          </video>
        </body>

        
        <nav className="reelse-icons">
          <div className="insta-second">
              <div className="text-second">
                <img src="gume.jpg" className="second-photo" />
                <span className="id-text">no_rang_e_</span>
                <span className="id-text">팔로우</span>
              </div>
              <i className="fas fa-ellipsis-h fa-xs"></i>
              <div className="text-second">
                <i className="fas fa-music fa-xs"></i>
                <span className="second-text">태진아-진진자라</span>
              </div>
            </div>

            <div className="icon-second">
              <div className="icons-block-second">
                <i className="far fa-heart fa-lg"></i>
                <span className="second-textt">506</span>
                <i className="far fa-comment fa-lg"></i>
                <span className="second-textt">5</span>
                <i className="far fa-paper-plane fa-lg"></i>
                <i className="fas fa-ellipsis-h fa-xs"></i>
                <img src="sdd.jpg" className="bottom-second"/>          
              </div>
            </div>
        </nav>

      </div>



    <footer className="reelse-insta_bottom">
        <div className="under__column">
          <i className="fas fa-home"></i>
          <i className="fas fa-search "></i>
          <i className="far fa-caret-square-right fa-lg"></i>
          <i className="fas fa-shopping-bag "></i>
          <img src="gume.jpg"  className="under__column-avatar" />      
        </div>
    </footer>
  </>
  );
}

export default App;
