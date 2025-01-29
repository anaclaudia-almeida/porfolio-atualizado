import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.scss";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import AboutMe from "./components/Aboutme";
import { BrowserRouter, Route, Routes } from "react-router-dom";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>    
      <Route path='/sobre-mim' element={<AboutMe/>}/>
    </Routes>
  </BrowserRouter>
    < Header />
    <HomePage />
    <AboutMe />
  </StrictMode>
  
);



