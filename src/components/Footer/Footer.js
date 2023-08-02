import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
       <div className='footer__conatiner'>
            <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer__info'>
                <p className='footer__info__copyright'>© 2023</p>
                <ul className='footer__info__links'>
                    <li href='https://practicum.yandex.ru' target='_blank' className='footer__info__link'>Яндекс.Практикум</li>
                    <li href='https://github.com/alsails/movies-explorer-frontend' target='_blank' className='footer__info__link'>Github</li>
                </ul>
            </div>
       </div>
    </footer>
  );
}

export default Footer;