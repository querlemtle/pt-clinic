import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <dl>
        <div className="row brand brand--footer">
          <Image width={50} height={30} src="/icons/logo.svg" alt="logo" />
          <p className="brand__title">源衡物理治療所</p>
        </div>
        <div className="row">
          <dt>電話 (TEL)：</dt>
          <dd>02-1234-5678</dd>
        </div>
        <div className="row">
          <dt>地址：</dt>
          <dd className="row">
            台北市北投區光明路六段80號
            <Link href="/info">
              <Image
                width={48}
                height={48}
                src="/icons/map-icon.svg"
                alt="map-icon"
                className="list__icon"
              />
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
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <Image
              width={48}
              height={48}
              src="/icons/ig-icon.svg"
              alt="Instagram"
              className="list__icon"
            />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <Image
              width={48}
              height={48}
              src="/icons/fb-icon.svg"
              alt="Facebook"
              className="list__icon"
            />
          </a>
          <a href="https://line.me/tw/" target="_blank" rel="noreferrer">
            <Image
              width={48}
              height={48}
              src="/icons/line-icon.svg"
              alt="Line"
              className="list__icon"
            />
          </a>
        </div>
      </div>
      <small className="copyright">
        © {new Date().getFullYear()} 源衡物理治療所 版權所有
      </small>
    </footer>
  );
}
