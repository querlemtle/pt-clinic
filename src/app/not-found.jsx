"use client";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="main">
      <div className="error__grid">
        <h1 className="error__img">
          <Image width={800} height={340} src="/icons/404.svg" alt="404" />
        </h1>
        <h2 className="error__text">找不到頁面</h2>
        <Link href="/" className="error__link">
          回首頁
        </Link>
      </div>
    </main>
  );
}
