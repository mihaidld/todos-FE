import React, { useState, useEffect, createContext } from "react";

export const ModeContext = createContext();

const ModeContextProvider = ({ children }) => {
  const IP = "172.31.246.39";
  const PORT = 7777;
  const URL = `http://${IP}:${PORT}`;
  const [mode, setMode] = useState(
    () => localStorage.getItem("colorMode") || "light"
  );
  useEffect(() => {
    localStorage.setItem("colorMode", mode);
  }, [mode]);

  return (
    <ModeContext.Provider value={{ mode, setMode, URL }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeContextProvider;
