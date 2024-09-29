"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import TelLottie from "./TelLottie";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 換頁後關閉手機選單
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="header">
      <div className="header__list">
        <Link href="/" className="brand">
          <Image width={60} height={60} src="/icons/logo.svg" alt="logo" />
          <p className="brand__title">源衡物理治療所</p>
        </Link>
        <input
          type="checkbox"
          className="hamburger__toggle"
          id="hamburger__toggle"
          checked={isMenuOpen}
          onChange={toggleMenu}
        />
        <label htmlFor="hamburger__toggle" className="hamburger__wrapper">
          <div className="hamburger__icon" />
        </label>
        <nav className="header__nav">
          <ul className="menu">
            <li className="menu__item">
              <Link href="/about">關於我們</Link>
            </li>
            <li className="menu__item">
              <Link href="/team">團隊成員</Link>
            </li>
            <li className="menu__item">
              <Link href="/info">交通資訊</Link>
            </li>
            <li className="menu__item">
              <Link href="/news">最新消息</Link>
            </li>
            <li className="menu__item">
              <Link href="/graph">知識圖表</Link>
            </li>
          </ul>
          <TelLottie />
        </nav>
      </div>
    </header>
  );
}
