import closeIcon from '../images/close.svg';

function Popup() {
  return (
    <div className="popup">
      <div className="popup__container">
        <button className="popup__close-button">
          <img src={closeIcon}></img>
        </button>
        <h3 className="popup__title">Ошибка</h3>
        <span className="popup__description">Сообщение об ошибке</span>
        <button className="popup__submit-button">Закрыть</button>
      </div>
    </div>
  );
}

export { Popup };
