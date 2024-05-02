import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <h1 className="mb-2 text-5xl font-semibold text-primary-900">
        頁面出錯了...
      </h1>
      <p className="text-2xl text-secondary-700">錯誤代碼：{error.status}</p>
    </div>
  );
}
