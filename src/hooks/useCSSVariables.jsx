// src/hooks/useCSSVariables.js
import { useEffect, useState } from "react";

export function useCSSVariables(variableNames = [], target = "body", watch = "") {
  const [variables, setVariables] = useState({});

  useEffect(() => {
    const element =
      target === "root"
        ? document.documentElement
        : document.body;

    const styles = getComputedStyle(element);
    const newVars = {};

    variableNames.forEach((name) => {
      newVars[name] = styles.getPropertyValue(name).trim();
    });

    setVariables(newVars);
  }, [variableNames.join(","), target, watch]);

  return variables;
}
