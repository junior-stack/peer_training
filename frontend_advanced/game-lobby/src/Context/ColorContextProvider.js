import { useState } from "react";
import ColorContext from "./ColorContext";

const ColorContextProvider = ({ children }) => {
  const [usedColors, setUsedColors] = useState({
    white: true,
    blue: true,
    red: true,
    green: true,
    yellow: true,
  });

  const [users, setUsers] = useState({});

  const [userProfile, setUserProfile] = useState({});

  return (
    <ColorContext.Provider
      value={{
        usedColors,
        setUsedColors,
        users,
        setUsers,
        userProfile,
        setUserProfile,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};

export default ColorContextProvider;
