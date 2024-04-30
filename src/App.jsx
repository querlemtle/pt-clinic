import { createHashRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

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
      <Header />
      <div className="App font-sans">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </>
  );
}

export default App;
