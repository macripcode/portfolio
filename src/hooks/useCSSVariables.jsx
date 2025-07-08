import { useEffect, useState } from "react";

export function useCSSVariables(variableNames = [], target = "body", deps = []) {
  const [variables, setVariables] = useState({});

  useEffect(() => {
    const updateVariables = () => {
      const element = target === "root" ? document.documentElement : document.body;
      const styles = getComputedStyle(element);
      const newVars = {};

      variableNames.forEach((name) => {
        newVars[name] = styles.getPropertyValue(name).trim();
      });

      setVariables(newVars);
    };

    updateVariables();

    // Escucha cambios de clase del body (cuando cambia el tema)
    const observer = new MutationObserver(() => {
      updateVariables(); // ← actualiza si body cambia de clase
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, [variableNames.join(","), target, ...deps]);

  return variables;
}
