class Api {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  request(path, method, message) {
    return fetch(`${this._baseUrl}/${path}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    }).then(this._checkStatus);
  }

  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Error: ${res.status}`);
  }

  askChat(doctorInfo) {
    return this.request('talk_to_chat', 'POST', doctorInfo).then((res) => {
      return res;
    });
  }
}

const api = new Api('https://gpt-api-blush.vercel.app');

// const api = new Api('http://123192.168.100.11:8000');
export { api };
