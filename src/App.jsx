import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  }
]);

function App() {
  return (
    <>
      <div />
      <div className="App">
        <RouterProvider router={router} />
      </div>
      <div />
    </>
  );
}

export default App;
