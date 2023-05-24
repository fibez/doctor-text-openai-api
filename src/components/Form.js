import closeIcon from '../images/close.svg';
import { useState } from 'react';

function Form(props) {
  const [doctorInfo, setDoctorInfo] = useState({
    doctorName: '',
    doctorSpeciality: '',
    doctorAges: '',
    doctorDegree: '',
    doctorAdditional: '',
    diagnosedDiseases: [],
    diseases: [],
    diagnostic: [],
    manipulations: [],
  });

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const currentElementId = e.target.getAttribute('id');
      const tag = e.target.value.trim();

      if (doctorInfo.hasOwnProperty(currentElementId) && tag !== '' && !doctorInfo[currentElementId].includes(tag)) {
        const updatedTags = [...doctorInfo[currentElementId], tag];
        setDoctorInfo({ ...doctorInfo, [currentElementId]: updatedTags });
        e.target.value = '';
      }
      e.preventDefault();
    }
  };

  const handleDelete = (tagToDelete, key) => {
    const updatedTags = doctorInfo[`${key}`].filter((tag) => tag !== tagToDelete);
    setDoctorInfo({
      ...doctorInfo,
      [key]: updatedTags,
    });
  };

  function handleDoctorInfoChange(e) {
    setDoctorInfo({
      ...doctorInfo,
      [`${e.target.id}`]: e.target.value,
    });
  }

  function handleSubmitForm() {
    console.log(doctorInfo);
    if (doctorInfo.doctorAdditional) {
      doctorInfo.doctorAdditional = doctorInfo.doctorAdditional.replace(`\n`, ` `);
    }

    props.getDoctorText(doctorInfo);
  }

  return (
    <form className="form">
      <h2 className="form__title">Форма для доктора</h2>
      <span className="form__description form__description_main-info">Основная информация</span>
      <input className="form__input" id="doctorName" placeholder="Имя" onChange={handleDoctorInfoChange}></input>
      <input
        className="form__input"
        id="doctorSpeciality"
        placeholder="Специальность"
        onChange={handleDoctorInfoChange}
      ></input>
      <input
        className="form__input"
        id="doctorDegree"
        placeholder="Ученая степень"
        onChange={handleDoctorInfoChange}
      ></input>
      <input
        className="form__input"
        id="doctorAges"
        placeholder="Возрастные ограничения"
        onChange={handleDoctorInfoChange}
      ></input>
      <span className="form__description form__description_competencies">Компетенции</span>
      <div className="form__input-container">
        <input
          className="form__input"
          id="diseases"
          placeholder="Проводит лечение заболеваний..."
          onKeyDown={handleKeyDown}
        ></input>
        <ul className="form__tags" id="diseases-tags">
          {doctorInfo.diseases.map((tag, index) => (
            <li className="form__tag-element" key={`${tag}-${index}`}>
              {tag}
              <div className="form__delete-tag-button" type="button" onClick={() => handleDelete(tag, 'diseases')}>
                <img className="form__delete-tag-button-icon" src={closeIcon} alt="Иконка удаления тэга"></img>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="form__input-container">
        <input
          className="form__input"
          id="diagnosedDiseases"
          placeholder="Диагностирует заболевания..."
          onKeyDown={handleKeyDown}
        ></input>
        <ul className="form__tags" id="diagnosedDiseases-tags">
          {doctorInfo.diagnosedDiseases.map((tag, index) => (
            <li className="form__tag-element" key={`${tag}-${index}`}>
              {tag}
              <div
                className="form__delete-tag-button"
                type="button"
                onClick={() => handleDelete(tag, 'diagnosedDiseases')}
              >
                <img className="form__delete-tag-button-icon" src={closeIcon} alt="Иконка удаления тэга"></img>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="form__input-container">
        <input
          className="form__input"
          id="diagnostic"
          placeholder="Владеет методами диагностики..."
          onKeyDown={handleKeyDown}
        ></input>
        <ul className="form__tags" id="diagnostic-tags">
          {doctorInfo.diagnostic.map((tag, index) => (
            <li className="form__tag-element" key={`${tag}-${index}`}>
              {tag}
              <div className="form__delete-tag-button" type="button" onClick={() => handleDelete(tag, 'diagnostic')}>
                <img className="form__delete-tag-button-icon" src={closeIcon} alt="Иконка удаления тэга"></img>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="form__input-container">
        <input
          className="form__input"
          id="manipulations"
          placeholder="Может проводить манипуляции..."
          onKeyDown={handleKeyDown}
        ></input>
        <ul className="form__tags" id="manipulations-tags">
          {doctorInfo.manipulations.map((tag, index) => (
            <li className="form__tag-element" key={`${tag}-${index}`}>
              {tag}
              <div className="form__delete-tag-button" type="button" onClick={() => handleDelete(tag, 'manipulations')}>
                <img className="form__delete-tag-button-icon" src={closeIcon} alt="Иконка удаления тэга"></img>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <span className="form__description form__description_competencies">Дополнительная информация</span>
      <div className="form__additional">
        <textarea
          className="form__textarea"
          id="doctorAdditional"
          placeholder="Доп. информация в свободной форме"
          onChange={handleDoctorInfoChange}
        ></textarea>
      </div>
      <button className="form__submit-button" type="button" onClick={handleSubmitForm}>
        Получить текст
      </button>
    </form>
  );
}

export { Form };

// {
//   "doctorName": "Волкова Ольга Михайловна",
//   "doctorSpeciality": "детский психолог",
//   "doctorAges": "от 1 до 12 лет",
//   "doctorDegree": "",
//   "doctorAdditional": "имеет 9 научных статей, посвященных психопатологии раннего детского возраста, и является членом Российского общества психиатров",
//   "diagnosedDiseases": [
//       "аутизм",
//       "задержка речевого развития",
//       "аффективные (эмоциональные) расстройства",
//       "детский тип шизофрении",
//       "энурез",
//       "психосоматическое расстройство"
//   ],
//   "diseases": [],
//   "diagnostic": [],
//   "manipulations": []
// }
