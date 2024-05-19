import {
  createHashRouter,
  RouterProvider,
  Outlet,
  ScrollRestoration
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

const router = createHashRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  }
]);

// Header and footer need to be rendered within `RouterProvider`, so <Link> can find router context
// Reference: https://stackoverflow.com/a/77977937
function AppLayout() {
  return (
    <>
      <div className="layout">
        <Header />
        <Outlet />
      </div>
      <ScrollRestoration />
      <Footer />
    </>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
