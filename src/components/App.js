import { Header } from './Header';
import { Form } from './Form';
import { Response } from './Response';
import { Main } from './Main';
import { api } from '../utils/api';
import { useEffect, useState } from 'react';
import { Popup } from './Popup';

function App() {
  const [doctorText, setDoctorText] = useState('....');
  const [isPopupOpened, setPopupOpened] = useState(false);
  const [popupTitle, setPopupTitle] = useState('');
  const [popupDescription, setPopupDescription] = useState('');

  function getDoctorText(doctorInfo) {
    Promise.resolve(api.askChat(doctorInfo)).then((res) => {
      setDoctorText(res);
    });
  }

  useEffect(() => {
    api
      .request('get', 'GET')
      .then((res) => {
        if (res) {
          console.log('ok');
        } else {
          setPopupOpened(true);
          setPopupTitle('Ошибка сервера');
          setPopupDescription(res);
        }
      })
      .catch((err) => {
        console.log(err.status);
      });
  }, []);

  function handleSetPopupOpened() {
    setPopupOpened(true);
  }

  function closePopup() {
    setPopupOpened(false);
  }

  return (
    <>
      <Header />
      <Main>
        <Form getDoctorText={getDoctorText} setPopupOpened={handleSetPopupOpened} />
        <Response doctorText={doctorText} />
      </Main>
      <Popup
        closePopup={closePopup}
        isPopupOpened={isPopupOpened}
        popupTitle={popupTitle}
        popupDescription={popupDescription}
      />
    </>
  );
}

export default App;
