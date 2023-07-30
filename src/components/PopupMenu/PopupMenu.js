import './PopupMenu.css';
import { NavLink} from "react-router-dom";

function PopupMenu({isOpened}) {
  return (
    <nav className={`popupMenu ${isOpened ? 'popupMenu_active' : ''}`}>
        <div className='popupMenu__container'>
            <ul className='popupMenu__links'>
                <li className='popupMenu__links__link'><NavLink to={`/movies`} className={({isActive}) => `${isActive ? 'popupMenu__link_active' : 'popupMenu__link'}`}>Главная</NavLink></li>
                <li className='popupMenu__links__link'><NavLink to={`/`} className={({isActive}) => `${isActive ? 'popupMenu__link_active' : 'popupMenu__link'}`}>Фильмы</NavLink></li>
                <li className='popupMenu__links__link'><NavLink to={`/saved-movies`} className={({isActive}) => `${isActive ? 'popupMenu__link_active' : 'popupMenu__link'}`}>Сохраненные фильмы</NavLink></li>
            </ul>
            <button className='popupMenu__button'>Аккаунт</button>
        </div>
    </nav>
  );
}

export default PopupMenu;