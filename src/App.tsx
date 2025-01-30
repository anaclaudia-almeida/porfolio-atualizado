import { Routes, Route, Navigate } from "react-router-dom";
import "./global.scss";
import Home from "./pages/Home/Home";
import About from "./pages/AboutMe/AboutMe";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/sobre-mim" element={<About />} />
          <Route path="/" element={<Navigate to="/home" />} /> 
        </Routes>
      </main>
    </>
  );
}
