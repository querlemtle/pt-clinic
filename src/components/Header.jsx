import logo from "./../assets/logo.svg";
import phoneIcon from "./../assets/phone-icon.svg";

export default function Header() {
  return (
    <header>
      <div>
        <a
          href="#"
        >
          <img src={logo} alt="logo" />
          <h1>源衡物理治療所</h1>
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">關於我們</a>
          </li>
          <li>
            <a href="#">團隊成員</a>
          </li>
          <li>
            <a href="#">服務項目</a>
          </li>
          <li>
            <a href="#">最新消息</a>
          </li>
          <li>
            <a href="#">衛教專區</a>
          </li>
        </ul>
        <div>
          <a href="#">
            <img src={phoneIcon} alt="phone-icon" />
            <p>02-xxxx-xxxx</p>
          </a>
        </div>
      </nav>
    </header>
  );
}
