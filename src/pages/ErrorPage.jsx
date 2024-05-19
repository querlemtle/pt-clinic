import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <h1>
        頁面出錯了...
      </h1>
      <p>錯誤代碼：{error.status}</p>
    </div>
  );
}
