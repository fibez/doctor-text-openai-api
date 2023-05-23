import { Header } from './Header';
import { Form } from './Form';
import { Response } from './Response';
import { Main } from './Main';
import { api } from '../utils/api';
import { useEffect, useState } from 'react';
import { Popup } from './Popup';

function App() {
  const [doctorText, setDoctorText] = useState('....');

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
      <Popup />
    </>
  );
}

export default App;
