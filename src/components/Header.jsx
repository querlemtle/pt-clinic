import { logo, telIcon } from "@/assets/images";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header__list">
        <div>
          <Link to="/" className="brand">
            <img src={logo} alt="logo" className="brand__logo" />
            <p className="brand__title">源衡物理治療所</p>
          </Link>
        </div>
        <nav className="header__nav">
          <ul className="menu">
            <li>
              <NavLink to="/about" className="menu__item">
                關於我們
              </NavLink>
            </li>
            <li>
              <NavLink to="/team" className="menu__item">
                團隊成員
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="menu__item">
                交通資訊
              </NavLink>
            </li>
            <li>
              <NavLink to="/news" className="menu__item">
                最新消息
              </NavLink>
            </li>
            <li>
              <NavLink to="/graph" className="menu__item">
                知識圖表
              </NavLink>
            </li>
          </ul>
          <div>
            <a href="#" className="header__btn">
              <img src={telIcon} alt="聯絡我們：02-1234-5678" />
              <p>02-1234-5678</p>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
