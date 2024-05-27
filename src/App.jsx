import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import ErrorPage from "./pages/ErrorPage";
import { ScrollToTop } from "./utils/ScrollToPosition";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="layout">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About /> } />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/team" element={<Team />}></Route>
        </Routes>
      </div>
      <Footer />
    </HashRouter>
  );
}

export default App;
