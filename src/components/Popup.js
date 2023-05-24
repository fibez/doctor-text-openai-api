import closeIcon from '../images/close.svg';

function Popup(props) {
  return (
    <div className={`popup ${props.isPopupOpened ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button className="popup__close-button" onClick={props.closePopup}>
          <img src={closeIcon}></img>
        </button>
        <h3 className="popup__title">{props.popupTitle}</h3>
        <span className="popup__description">{props.popupDescription}</span>
        <button className="popup__submit-button" onClick={props.closePopup}>
          Закрыть
        </button>
      </div>
    </div>
  );
}

export { Popup };
