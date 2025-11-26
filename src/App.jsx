import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProjectDetail from "./pages/ProjectDetail";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="app">
      <ScrollToTop/>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>

      <footer className="footer">
        © <small>{new Date().getFullYear()} Garrett Steven Morgan</small>
      </footer>
    </div>
  );
}

export default App;
