import logo from '../images/robot-face-svgrepo-com.svg';

function Header() {
  return (
    <div className="header">
      <div className="header__logo-container">
        <img className="header__logo" src={logo} alt="Логотип"></img>
        <h1 className="header__logo-title">Нейротекст</h1>
      </div>
      <ul className="navbar">
        <li className="navbar__element">Использование</li>
        <li className="navbar__element">Как это работает?</li>
      </ul>
    </div>
  );
}

export { Header };
