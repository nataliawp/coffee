import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import './i18n'
import Routes from "./routes/Routes";
import ThemeProvider from "./context/theme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  </StrictMode>
);
