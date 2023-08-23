import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
       <div className='footer__conatiner'>
            <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer__info'>
                <p className='footer__info-copyright'>© 2023</p>
                <ul className='footer__links'>
                    <li><a rel="noopener noreferrer" href='https://practicum.yandex.ru' target='_blank' className='footer__links-link'>Яндекс.Практикум</a></li>
                    <li><a rel="noopener noreferrer" href='https://github.com/alsails' target='_blank' className='footer__links-link'>Github</a></li>
                </ul>
            </div>
       </div>
    </footer>
  );
}

export default Footer;