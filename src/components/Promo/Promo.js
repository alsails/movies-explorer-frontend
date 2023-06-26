import './Promo.css';
import bgImg from '../../images/bgImg.png'

function Promo() {
  return (
    <section className="promo">
        <img src={bgImg} alt='Фоновое изображение' className='promo__background'/>
        <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
    </section>
  );
}

export default Promo;