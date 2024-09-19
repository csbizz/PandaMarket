import { createContext, useContext, useEffect, useState } from "react";
import CONSTANTS from "../constants.js";

const ViewportContext = createContext();

function ViewportProvider({ children }) {
  const [viewport, setViewport] = useState(() => {
    const width = window.innerWidth;

    if (width <= CONSTANTS.BREAKPOINTS.MOBILE) return CONSTANTS.VIEWPORT.MOBILE;
    if (width <= CONSTANTS.BREAKPOINTS.TABLET) return CONSTANTS.VIEWPORT.TABLET;
    return CONSTANTS.VIEWPORT.PC;
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= CONSTANTS.BREAKPOINTS.MOBILE)
        return setViewport(CONSTANTS.VIEWPORT.MOBILE);
      if (width <= CONSTANTS.BREAKPOINTS.TABLET)
        return setViewport(CONSTANTS.VIEWPORT.TABLET);
      return setViewport(CONSTANTS.VIEWPORT.PC);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ViewportContext.Provider value={{ viewport }}>
      {children}
    </ViewportContext.Provider>
  );
}

function useViewport() {
  const context = useContext(ViewportContext);
  if (!context)
    throw new Error(`Don't use useViewport() out of ViewportProvider`);

  return context.viewport;
}

export { ViewportProvider, useViewport };
