import { Routes, Route } from "react-router-dom";
import "./global.scss";
import Home from "./pages/Home/Home";
import About from "./pages/AboutMe/AboutMe";
import Header from "./components/Header";
import Projects from "./components/MyProjects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/sobre-mim" element={<About />} />
          <Route path="/meus-projetos" element={<Projects />} />
          <Route path="/contato" element={<Contact />} /> 
        </Routes>
      </main>
    </>
  );
}
