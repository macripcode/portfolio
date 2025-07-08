import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { LanguageProvider } from "./components/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <Header />
      <main >
        <Hero />
        <Projects />
        <Contact />
      </main>
    </LanguageProvider>
  );
}

export default App;
