import './PopupMenu.css';
import { Link, NavLink} from "react-router-dom";

function PopupMenu({isOpened}) {
  return (
    <div className={`popupMenu ${isOpened ? 'popupMenu_active' : ''}`}>
        <div className='popupMenu__container'>
            <ul className='popupMenu__links'>
                <li className='popupMenu__links-link'><NavLink to={`/`} className={({isActive}) => `${isActive ? 'popupMenu__link-active' : 'popupMenu__link'}`}>Главная</NavLink></li>
                <li className='popupMenu__links-link'><NavLink to={`/movies`} className={({isActive}) => `${isActive ? 'popupMenu__link-active' : 'popupMenu__link'}`}>Фильмы</NavLink></li>
                <li className='popupMenu__links-link'><NavLink to={`/saved-movies`} className={({isActive}) => `${isActive ? 'popupMenu__link-active' : 'popupMenu__link'}`}>Сохраненные фильмы</NavLink></li>
            </ul>
            <Link to='/profile' className='popupMenu__button'>Аккаунт</Link>
        </div>
    </div>
  );
}

export default PopupMenu;