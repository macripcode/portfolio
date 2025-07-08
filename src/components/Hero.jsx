import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "./translations";


function Hero() {
  const { lang } = useContext(LanguageContext);
  const { Greeting, Title, Text } = translations[lang].Hero

  return (
  
    <section id="hero">
      <h1>{Greeting}</h1>      
      <p>{Text}</p>
    </section>
  );
}
export default Hero;