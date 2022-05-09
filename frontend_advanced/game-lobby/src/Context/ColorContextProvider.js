import { useState } from "react";
import ColorContext from "./ColorContext";
const ColorContextProvider = ({ children }) => {
  const [usedColors, setUsedColors] = useState({
    white: false,
    blue: true,
    red: true,
    green: true,
    yellow: true,
  });

  const [users, setUsers] = useState(["white", "white", "white", "white"]);

  return (
    <ColorContext.Provider
      value={{ usedColors, setUsedColors, users, setUsers }}
    >
      {children}
    </ColorContext.Provider>
  );
};

export default ColorContextProvider;
