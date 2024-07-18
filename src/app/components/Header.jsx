import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="header">
      <div className="header__list">
        <div>
          <Link href="/" className="brand">
            <Image width={60} height={60} src="/icons/logo.svg" alt="logo" />
            <p className="brand__title">源衡物理治療所</p>
          </Link>
        </div>
        <nav className="header__nav">
          <ul className="menu">
            <li>
              <Link href="/about" className="menu__item">
                關於我們
              </Link>
            </li>
            <li>
              <Link href="/team" className="menu__item">
                團隊成員
              </Link>
            </li>
            <li>
              <Link href="/info" className="menu__item">
                交通資訊
              </Link>
            </li>
            <li>
              <Link href="/news" className="menu__item">
                最新消息
              </Link>
            </li>
            <li>
              <Link href="/graph" className="menu__item">
                知識圖表
              </Link>
            </li>
          </ul>
          <div>
            <a href="tel:02-12345678" className="header__btn">
              <Image
                width={48}
                height={48}
                src="/icons/tel-icon.svg"
                alt="聯絡我們：02-1234-5678"
              />
              <p>02-12345678</p>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
