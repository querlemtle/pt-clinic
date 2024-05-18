import logo from "./../assets/logo.svg";
import mapIcon from "./../assets/map-icon.svg";
import igIcon from "./../assets/ig-icon.svg";
import fbIcon from "./../assets/fb-icon.svg";
import lineIcon from "./../assets/line-icon.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <dl>
        <div className="row footer__brand">
          <img src={logo} alt="logo" />
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
            <a href="#">
              <img src={mapIcon} alt="map-icon" className="list__icon" />
            </a>
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
