import './Hero.css';
import bgImg from '../../images/bgImg.png'

function Hero() {
  return (
    <div className="hero">
        <img src={bgImg} alt='Фоновое изображение' className='hero__background'/>
        <h1 className='hero__title'>Учебный проект студента факультета Веб-разработки.</h1>
    </div>
  );
}

export default Hero;