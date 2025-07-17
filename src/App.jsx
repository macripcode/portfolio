import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
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
    <main>
      <Header />
      <Hero />
      <Work />
      {/* <Languages /> */}
    </main>
  );
}

export default App;
