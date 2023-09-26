
import '../../App.css';
//import Button  from '../Button/Button';
import './HeroSection.css';
import video from '../../assets/videos/video3.mp4'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={video} autoPlay loop muted />
      <h1>ALQUIMIA DIGITAL</h1>
      <p></p>
      <div className='hero-btns'>
      {/*   <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button> */}
       {/*  <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;