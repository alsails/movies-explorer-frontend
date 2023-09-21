import "./Header.css";
import logoMain from "../../images/icons/logo.svg";
import { useState, useEffect } from "react";
import {Link, NavLink} from "react-router-dom";

function Header({ isLogined, openPopupMenu, closeAllPopup, isOpened }) {
    const [isWidth, setIsWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', function() {
            setTimeout(() => {
                setIsWidth(window.innerWidth);
            }, 300);
        });
    }, [])
    
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
                        <Link to='/signup' className="header__authorization-register">Регистрация</Link>
                        <Link to='/signin' className="header__authorization-login">Войти</Link>
                    </nav>
                )}
                {isLogined && (isWidth > 768) && (
                    <nav className="header__links">
                        <div className="header__links-container">
                            <NavLink to={`/movies`} className={({isActive}) => `${isActive ? 'header__link_active' : 'header__link'}`}>Фильмы</NavLink>
                            <NavLink to={`/saved-movies`} className={({isActive}) => `${isActive ? 'header__link_active' : 'header__link'}`}>Сохраненные фильмы</NavLink>
                        </div>
                        <Link to='/profile' className="header__links-profile">Аккаунт</Link>
                    </nav>
                )}
                {
                    isLogined && (isWidth < 769) &&
                        <div onClick={togglePopup} className={`header__hamburger-menu ${isOpened ? 'header__hamburger-menu_active' : ''}`}>
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
