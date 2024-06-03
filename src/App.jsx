import { HashRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./utils/ScrollToPosition";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import News from "./pages/News";
import Access from "./pages/Access";
import Graph from "./pages/Graph";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="layout">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/news" element={<News />} />
          <Route path="/access" element={<Access />} />
          <Route path="/graph" element={<Graph />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </HashRouter>
  );
}

export default App;
