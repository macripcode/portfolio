import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Global styles
import "./index.css";
import "./styles/global.css";

// Components
import App from "./App.jsx";

// Context providers
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
