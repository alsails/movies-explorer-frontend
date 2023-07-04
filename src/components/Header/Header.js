import './Header.css';
import logoMain from '../../images/icons/logo.svg'

function Header({isLogined}) {
  return (
    <header className="header">
         <div className='header__container'>
         <img className='header__logo' src={logoMain} alt='Логотип'/>
         {
            !isLogined && 
            <div className='header__authorization'>
                <a href="#" className='header__authorization__register'>Регистрация</a>
                <button className='header__authorization__login'>Войти</button>
            </div>
         }
         {
            isLogined && 
            <div className='header__links'>
                <div className='header__links__container'>
                    <a href="#" className='header__links__films'>Фильмы</a>
                    <a href="#" className='header__links__likes'>Сохраненные фильмы</a>
                </div>
                <button className='header__links__profile'>Аккаунт</button>
            </div>
         }
       </div>
    </header>
  );
}

export default Header;