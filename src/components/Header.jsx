import logo from "./../assets/logo.svg";
import phoneIcon from "./../assets/phone-icon.svg";

export default function Header() {
  return (
    <header className="h-screen w-48 bg-primary-50 text-center text-primary-900">
      <div>
        <a
          href="#"
          className="mb-12 flex flex-col items-center p-4 hover:opacity-80"
        >
          <img src={logo} alt="logo" className="mb-2" />
          <h1 className="text-xl font-bold">源衡物理治療所</h1>
        </a>
      </div>
      <nav>
        <ul className="font-semibold">
          <li className="mb-4 hover:text-primary-400">
            <a href="#">關於我們</a>
          </li>
          <li className="mb-4 hover:text-primary-400">
            <a href="#">團隊成員</a>
          </li>
          <li className="mb-4 hover:text-primary-400">
            <a href="#">服務項目</a>
          </li>
          <li className="mb-4 hover:text-primary-400">
            <a href="#">最新消息</a>
          </li>
          <li className="mb-12 hover:text-primary-400">
            <a href="#">衛教專區</a>
          </li>
        </ul>
        <div>
          <a href="#" className="flex items-center justify-center">
            <img src={phoneIcon} alt="phone-icon" />
            <p className="font-semibold hover:text-primary-400">02-xxxx-xxxx</p>
          </a>
        </div>
      </nav>
    </header>
  );
}
