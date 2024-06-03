import { logo, mapIcon, igIcon, fbIcon, lineIcon } from "@/assets/images";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <dl>
        <div className="row brand">
          <img src={logo} alt="logo" className="brand__logo" />
          <p className="brand__title">源衡物理治療所</p>
        </div>
        <div className="row">
          <dt>電話 (TEL)：</dt>
          <dd>02-xxxx-xxxx</dd>
        </div>
        <div className="row">
          <dt>地址：</dt>
          <dd className="row">
            台北市北投區光明路六段80號
            <Link to="/access">
              <img src={mapIcon} alt="map-icon" className="list__icon" />
            </Link>
          </dd>
        </div>
      </dl>
      <div>
        <h3 className="list__title">營業時間</h3>
        <ul>
          <li className="list__item">
            星期一至五<span className="list__context">09:00 - 22:00</span>
          </li>
          <li className="list__item">
            星期六<span className="list__context">10:00 - 20:00</span>
          </li>
          <li className="list__item">
            星期日<span className="list__context">休診</span>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="list__title">聯絡我們</h3>
        <div className="row">
          <a href="#">
            <img src={igIcon} alt="Instagram" className="list__icon" />
          </a>
          <a href="#">
            <img src={fbIcon} alt="Facebook" className="list__icon" />
          </a>
          <a href="#">
            <img src={lineIcon} alt="Line" className="list__icon" />
          </a>
        </div>
      </div>
      <small className="copyright">© 2024 源衡物理治療所 版權所有</small>
    </footer>
  );
}
