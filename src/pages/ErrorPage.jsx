import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <main className="main">
      <div className="error__grid">
        <h1 className="title">頁面出錯了...</h1>
        <Link to="/" className="card__link">
          回首頁
        </Link>
      </div>
    </main>
  );
}
