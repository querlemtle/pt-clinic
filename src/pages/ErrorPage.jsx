import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <main className="main">
      <div className="error__grid">
        <h2 className="title">頁面出錯了...</h2>
        <Link to="/" className="error__link">
          回首頁
        </Link>
      </div>
    </main>
  );
}
