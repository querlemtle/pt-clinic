import logo from "./../assets/logo.svg";
import mapIcon from "./../assets/map-icon.svg";
import igIcon from "./../assets/ig-icon.svg";
import fbIcon from "./../assets/fb-icon.svg";
import lineIcon from "./../assets/line-icon.svg";

export default function Footer() {
  return (
    <footer className="col-span-2 grid grid-cols-3 bg-primary-50 px-10 py-5 text-primary-900">
      <dl>
        <div className="mb-2 flex items-center">
          <img src={logo} alt="logo" className="mr-2" />
          <h1 className="text-xl font-bold">源衡物理治療所</h1>
        </div>
        <div className="flex items-center">
          <dt>電話 (TEL)：</dt>
          <dd>02-xxxx-xxxx</dd>
        </div>
        <div className="flex items-center">
          <dt>地址：</dt>
          <dd className="flex items-center">
            台北市北投區光明路六段80號
            <a href="#" className="hover:opacity-70">
              <img src={mapIcon} alt="map-icon" />
            </a>
          </dd>
        </div>
      </dl>
      <div>
        <h3 className="mb-2 font-bold">營業時間</h3>
        <ul>
          <li className="mb-2 grid grid-cols-2">
            星期一至五<span className="text-primary-500">09:00 - 22:00</span>
          </li>
          <li className="mb-2 grid grid-cols-2">
            星期六<span className="text-primary-500">10:00 - 20:00</span>
          </li>
          <li className="mb-2 grid grid-cols-2">
            星期日<span className="text-secondary-500">休診</span>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="mb-2 font-bold">聯絡我們</h3>
        <div className="flex gap-x-4">
          <a href="#" className="hover:opacity-70">
            <img src={igIcon} alt="Instagram" />
          </a>
          <a href="#" className="hover:opacity-70">
            <img src={fbIcon} alt="Facebook" />
          </a>
          <a href="#" className="hover:opacity-70">
            <img src={lineIcon} alt="Line" />
          </a>
        </div>
      </div>
      <small className="col-start-2 mt-5 text-center">
        © 2024 源衡物理治療所 版權所有
      </small>
    </footer>
  );
}
