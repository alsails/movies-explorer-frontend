import './InfoPopup.css'

function InfoPopup({isOpened, onClose, isStatus}) {
    return (
      <div className={`infoPopup ${isOpened ? 'infoPopup_opened' : ''}`}>
          <div className='infoPopup__container'>
          <button type="button" id="infoPopup-close" className="infoPopup__close-button" onClick={onClose}></button>
            <h2 className="infoPopup__title">{`${isStatus ? 'Вы успешно изменили данные' : 'При изменение данных произошла ошибка'}`}</h2>
          </div>
      </div>
    );
  }
  
  export default InfoPopup;