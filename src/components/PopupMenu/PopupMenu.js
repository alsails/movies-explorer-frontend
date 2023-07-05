import './PopupMenu.css';

function PopupMenu({isOpened}) {
  return (
    <nav className={`popupMenu ${isOpened ? 'popupMenu_active' : ''}`}>
        <div className='popupMenu__container'>
            <ul className='popupMenu__links'>
                <li className='popupMenu__link'>Главная</li>
                <li className='popupMenu__link popupMenu__link_active'>Фильмы</li>
                <li className='popupMenu__link'>Сохраненные фильмы</li>
            </ul>
            <button className='popupMenu__button'>Аккаунт</button>
        </div>
    </nav>
  );
}

export default PopupMenu;