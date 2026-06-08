import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

const savedTheme = window.localStorage.getItem("frame-flow-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialTheme = savedTheme ?? (prefersDark ? "dark" : "light");

document.documentElement.classList.toggle("dark", initialTheme === "dark");
document.documentElement.style.colorScheme = initialTheme;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
