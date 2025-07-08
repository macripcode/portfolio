// src/hooks/useCSSVariables.js
import { useEffect, useState } from "react";

export function useCSSVariables(variableNames = []) {
  const [variables, setVariables] = useState({});

  useEffect(() => {
    const styles = getComputedStyle(document.body);
    const newVars = {};

    variableNames.forEach((name) => {
      newVars[name] = styles.getPropertyValue(name).trim();
    });

    setVariables(newVars);
  }, [variableNames.join(",")]); // depende solo del contenido

  return variables;
}
