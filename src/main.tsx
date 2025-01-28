import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.scss";
import HomePage from "./components/HomePage";
import Header from "./components/Header";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    < Header />
    <HomePage />
  </StrictMode>
);
