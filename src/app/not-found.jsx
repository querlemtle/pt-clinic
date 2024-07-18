"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="main">
      <div className="error__grid">
        <h2 className="title">頁面出錯了...</h2>
        <Link href="/" className="error__link">
          回首頁
        </Link>
      </div>
    </main>
  );
}
