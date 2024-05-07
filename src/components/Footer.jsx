import logo from "./../assets/logo.svg";
import mapIcon from "./../assets/map-icon.svg";
import igIcon from "./../assets/ig-icon.svg";
import fbIcon from "./../assets/fb-icon.svg";
import lineIcon from "./../assets/line-icon.svg";

export default function Footer() {
  return (
    <footer>
      <dl>
        <div>
          <img src={logo} alt="logo" />
          <h1>源衡物理治療所</h1>
        </div>
        <div>
          <dt>電話 (TEL)：</dt>
          <dd>02-xxxx-xxxx</dd>
        </div>
        <div>
          <dt>地址：</dt>
          <dd>
            台北市北投區光明路六段80號
            <a href="#">
              <img src={mapIcon} alt="map-icon" />
            </a>
          </dd>
        </div>
      </dl>
      <div>
        <h3>營業時間</h3>
        <ul>
          <li>
            星期一至五<span>09:00 - 22:00</span>
          </li>
          <li>
            星期六<span>10:00 - 20:00</span>
          </li>
          <li>
            星期日<span>休診</span>
          </li>
        </ul>
      </div>
      <div>
        <h3>聯絡我們</h3>
        <div>
          <a href="#">
            <img src={igIcon} alt="Instagram" />
          </a>
          <a href="#">
            <img src={fbIcon} alt="Facebook" />
          </a>
          <a href="#">
            <img src={lineIcon} alt="Line" />
          </a>
        </div>
      </div>
      <small>
        © 2024 源衡物理治療所 版權所有
      </small>
    </footer>
  );
}
