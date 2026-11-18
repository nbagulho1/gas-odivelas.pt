import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ReactGA from "react-ga4";
import App from "./App.jsx";

const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;

if (gaId) {
  ReactGA.initialize(gaId);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
