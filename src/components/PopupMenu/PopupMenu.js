import './PopupMenu.css';
import { Link, NavLink} from "react-router-dom";

function PopupMenu({isOpened}) {
  return (
    <div className={`popupMenu ${isOpened ? 'popupMenu_active' : ''}`}>
        <div className='popupMenu__container'>
            <nav className='popupMenu__links'>
                <li className='popupMenu__links-link'><NavLink to={`/`} className={({isActive}) => `${isActive ? 'popupMenu__link_active' : 'popupMenu__link'}`}>Главная</NavLink></li>
                <li className='popupMenu__links-link'><NavLink to={`/movies`} className={({isActive}) => `${isActive ? 'popupMenu__link_active' : 'popupMenu__link'}`}>Фильмы</NavLink></li>
                <li className='popupMenu__links-link'><NavLink to={`/saved-movies`} className={({isActive}) => `${isActive ? 'popupMenu__link_active' : 'popupMenu__link'}`}>Сохраненные фильмы</NavLink></li>
            </nav>
            <Link to='/profile'><button type='button' className='popupMenu__button'>Аккаунт</button></Link>
        </div>
    </div>
  );
}

export default PopupMenu;