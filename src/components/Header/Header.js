import "./Header.css";
import logoMain from "../../images/icons/logo.svg";
import { useState } from "react";
import {Link, NavLink} from "react-router-dom";

function Header({ isLogined, openPopupMenu, closeAllPopup, isOpened }) {
    const [isWidth, setisWidth] = useState(window.innerWidth);

    window.addEventListener('resize', function() {
        setisWidth(window.innerWidth);
    });

    function togglePopup() {
        isOpened ? closeAllPopup() : openPopupMenu()
    }

    return (
        <header className="header">
            <div className="header__container">
                <Link to='/' className="header__logo">
                    <img src={logoMain} alt="Логотип" />
                </Link>
                {!isLogined && (
                    <nav className="header__authorization">
                        <Link to='/sign-up' className="header__authorization__register">Регистрация</Link>
                        <Link to='/sign-in' className="header__authorization__login">Войти</Link>
                    </nav>
                )}
                {isLogined && (isWidth > 768) && (
                    <nav className="header__links">
                        <div className="header__links__container">
                            <NavLink to={`/movies`} className={({isActive}) => `${isActive ? 'header__link_active' : 'header__link'}`}>Фильмы</NavLink>
                            <NavLink to={`/saved-movies`} className={({isActive}) => `${isActive ? 'header__link_active' : 'header__link'}`}>Сохраненные фильмы</NavLink>
                        </div>
                        <Link to='/profile' className="header__links__profile">Аккаунт</Link>
                    </nav>
                )}
                {
                    isLogined && (isWidth < 769) &&
                        <div onClick={togglePopup} class={`header__hamburger-menu ${isOpened ? 'header__hamburger-menu_active' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    }
            </div>
        </header>
    );
}

export default Header;
