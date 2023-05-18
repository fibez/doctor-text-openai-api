import { Header } from './Header';
import { Form } from './Form';
import { Response } from './Response';
import { Main } from './Main';
import { api } from '../utils/api';
import { useEffect, useState } from 'react';

function App() {
  const [doctorText, setDoctorText] = useState('');

  function getDoctorText(doctorInfo) {
    Promise.resolve(api.askChat(doctorInfo)).then((res) => {
      setDoctorText(res);
    });
  }

  useEffect(() => {
    api.request('get', 'GET').then((res) => {
      if (res) {
        console.log('ok');
      }
    });
  }, []);

  return (
    <>
      <Header />
      <Main>
        <Form getDoctorText={getDoctorText} />
        <Response doctorText={doctorText} />
      </Main>
    </>
  );
}

export default App;

// Что изменить
// 1. Переделать функцию удаления тегов (сейчас она перезагружает страницу, а не удаляет выбранный тег)
// 2. Изменить иконку. Сейчас она подключена как шрифт, надо превратить ее в SVG
// 3. Выделить место под теги врача, чтобы кнопка сабмита не уезжала вниз при добавлении новых тегов
//
// Что сделать
// 1. Добавить поле для ответа
// 2. Начать собирать данные из инпутов в объект, который затем будет передаваться на сервер
