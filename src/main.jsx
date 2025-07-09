import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import "./styles/global.css";

import { LanguageProvider } from "./context/LanguageContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { TranslationProvider } from "./context/TranslationContext.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <TranslationProvider>
          <App />
        </TranslationProvider>
      </ThemeProvider>
    </LanguageProvider>
  </StrictMode>
);
