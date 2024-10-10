"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import useActiveNav from "@/utils/useActiveNav";
import { useEffect, useState } from "react";
import TelLottie from "./TelLottie";

const navItems = [
  {
    href: "/about",
    text: "關於我們"
  },
  {
    href: "/team",
    text: "團隊成員"
  },
  {
    href: "/info",
    text: "交通資訊"
  },
  {
    href: "/news",
    text: "最新消息"
  },
  {
    href: "/graph",
    text: "知識圖表"
  }
];

export default function Header() {
  const pathname = usePathname();
  const checkActiveNav = useActiveNav();
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
            {navItems.map(({ href, text }) => {
              return (
                <li
                  key={href}
                  className={`ment__item ${checkActiveNav(href) ? "menu__item--active" : ""}`}
                >
                  <Link href={href}>{text}</Link>
                </li>
              );
            })}
          </ul>
          <TelLottie />
        </nav>
      </div>
    </header>
  );
}
