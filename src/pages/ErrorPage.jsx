import { Link } from "react-router-dom";
import { logoError } from "../assets/images";

export default function ErrorPage() {
  return (
    <main className="main">
      <div className="error__grid">
        <h1 className="title">頁面出錯了...</h1>
        <Link to="/" className="error__link">
          回首頁
        </Link>
        <img src={logoError} alt="logo" />
      </div>
    </main>
  );
}
