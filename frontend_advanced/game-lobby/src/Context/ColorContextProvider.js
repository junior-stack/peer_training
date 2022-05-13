import { useState, useEffect } from "react";
import ColorContext from "./ColorContext";
import { httpsCallable } from "firebase/functions";
import { functions } from "./../Firebase/index";

const ColorContextProvider = ({ children }) => {
  const [usedColors, setUsedColors] = useState({
    white: true,
    blue: true,
    red: true,
    green: true,
    yellow: true,
  });

  const userData = {};

  const [users, setUsers] = useState({});

  useEffect(() => {
    const getDocument = async () => {
      const getAllColors = httpsCallable(functions, "getAllColors");
      const data = await getAllColors();
      data.data.forEach((doc) => {
        userData[doc.userID] = doc.color;
      });
      setUsers(userData);
      const newColors = {
        white: true,
        blue: true,
        red: true,
        green: true,
        yellow: true,
      };
      data.data.forEach((doc) => {
        newColors[doc.color] = false;
      });
      setUsedColors(newColors);
    };
    getDocument();
  }, []);

  return (
    <ColorContext.Provider
      value={{ usedColors, setUsedColors, users, setUsers }}
    >
      {children}
    </ColorContext.Provider>
  );
};

export default ColorContextProvider;
