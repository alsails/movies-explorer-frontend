import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
       <div className='footer__conatiner'>
            <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer__info'>
                <p className='footer__info__copyright'>© 2023</p>
                <div className='footer__info__links'>
                    <a href='https://practicum.yandex.ru' className='footer__info__link'>Яндекс.Практикум</a>
                    <a href='https://github.com/alsails/movies-explorer-frontend' className='footer__info__link'>Github</a>
                </div>
            </div>
       </div>
    </footer>
  );
}

export default Footer;