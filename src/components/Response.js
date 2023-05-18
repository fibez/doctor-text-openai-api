import { useState } from 'react';
import copyIcon from '../images/copy.svg';
import errorIcon from '../images/error.svg';
import doneIcon from '../images/done.svg';

function Response(props) {
  const [buttonText, setButtonText] = useState('Копировать');
  const [buttonIcon, setButtonIcon] = useState(copyIcon);

  function handleCopyToClipboard() {
    navigator.clipboard
      .writeText(props.doctorText)
      .then(() => {
        setButtonText('Скопировано');
        setButtonIcon(doneIcon);
      })
      .catch(() => {
        setButtonText('Ошибка');
        setButtonIcon(errorIcon);
      })
      .finally(() => {
        setTimeout(() => {
          setButtonText('Копировать');
          setButtonIcon(copyIcon);
        }, 2000);
      });
  }

  return (
    <>
      <div className="response">
        <p className="response__text">{props.doctorText}</p>
        <button className="response__copy-button" alt="Копировать ответ" onClick={handleCopyToClipboard}>
          {buttonText}
          <img className="response__copy-icon" src={buttonIcon} alt="Иконка копирования текста"></img>
        </button>
      </div>
    </>
  );
}

export { Response };
