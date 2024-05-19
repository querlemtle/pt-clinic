import logo from "./../assets/logo.svg";
import telIcon from "./../assets/tel-icon.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__list">
        <div>
          <a href="#" className="brand">
            <img src={logo} alt="logo" />
            <p className="brand__title">源衡物理治療所</p>
          </a>
        </div>
        <nav>
          <ul className="menu">
            <li className="menu__item">
              <a href="#">關於我們</a>
            </li>
            <li className="menu__item">
              <a href="#">團隊成員</a>
            </li>
            <li className="menu__item">
              <a href="#">服務項目</a>
            </li>
            <li className="menu__item">
              <a href="#">最新消息</a>
            </li>
            <li className="menu__item">
              <a href="#">衛教專區</a>
            </li>
          </ul>
          <div>
            <a href="#" className="header__btn">
              <img src={telIcon} alt="聯絡我們：02-xxxx-xxxx" />
              <p>02-xxxx-xxxx</p>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
