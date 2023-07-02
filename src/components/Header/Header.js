import './Header.css';
import logoMain from '../../images/icons/logo.svg'
import logoMovies from '../../images/icons/logoMovies.svg'
import profile from '../../images/icons/profile.svg'

function Header({isLogined}) {
  return (
    <header className="header">
      {!isLogined &&
         <div className='header__container_main'>
         <img src={logoMain} alt='Логотип'/>
         <div className='header__container_main__authorization'>
             <a href="#" className='header__container_main__authorization__register'>Регистрация</a>
             <button className='header__container_main__authorization__login'>Вход</button>
         </div>
       </div>
      }
      {isLogined &&
         <div className='header__container_movies'>
         <img src={logoMovies} alt='Логотип'/>
         <div className='header__container_movies__links'>
             <a href="#" className='header__container_movies__links__films'>Фильмы</a>
             <a href="#" className='header__container_movies__links__likes'>Сохраненные фильмы</a>
             <a href="#" className='header__container_movies__links__profile'>Аккаунт</a>
             <button className='header__container_movies__links__profile__button' />
         </div>
       </div>
      }
    </header>
  );
}

export default Header;