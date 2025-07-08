import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { useContext, useState, useEffect } from "react";

import { LanguageContext } from "./context/LanguageContext";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState(LanguageContext);
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <main>
      <Header theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} />
      <Hero />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
