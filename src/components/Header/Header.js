import './Header.css';
import logo from '../../images/logo.svg'

function Header() {
  return (
    <header className="header">
      <div className='header__container'>
        <img src={logo} alt='Логотип'/>
        <div className='header__container__authorization'>
            <a href="#" className='header__container__authorization__register'>Регистрация</a>
            <button className='header__container__authorization__login'>Вход</button>
        </div>
      </div>
    </header>
  );
}

export default Header;