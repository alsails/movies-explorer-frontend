import "./Header.css";
import logoMain from "../../images/icons/logo.svg";
import { useEffect, useState } from "react";

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
                <img className="header__logo" src={logoMain} alt="Логотип" />
                {!isLogined && (
                    <nav className="header__authorization">
                        <a href="#" className="header__authorization__register">
                            Регистрация
                        </a>
                        <button className="header__authorization__login">
                            Войти
                        </button>
                    </nav>
                )}
                {isLogined && (isWidth > 768) && (
                    <nav className="header__links">
                        <div className="header__links__container">
                            <a href="#" className="header__links__films">
                                Фильмы
                            </a>
                            <a href="#" className="header__links__likes">
                                Сохраненные фильмы
                            </a>
                        </div>
                        <button className="header__links__profile">
                            Аккаунт
                        </button>
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
