import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Languages from "./components/Languages/Languages";

import { useContext, useState, useEffect } from "react";

import { LanguageContext } from "./context/LanguageContext";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState(LanguageContext);
  const { lang, setLang } = useContext(LanguageContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Header />
      <Hero />
      <Experience />
      <Work />
      {/*<Languages />*/}
      <div className="stars"></div>
      <div className="aurora" />
    </main>
  );
}

export default App;
