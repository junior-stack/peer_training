import { useState, useEffect } from "react";
import ColorContext from "./ColorContext";
import { getDocs, collection, doc } from "firebase/firestore";
import { db } from "./../Firebase/index";
const ColorContextProvider = ({ children }) => {
  const [usedColors, setUsedColors] = useState({
    white: true,
    blue: true,
    red: true,
    green: true,
    yellow: true,
  });

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getDocument = async () => {
      const data = await getDocs(collection(db, "userColor"));
      setUsers(
        data.docs.map((doc) => {
          return doc.data().color;
        })
      );
      const newColors = {
        white: true,
        blue: true,
        red: true,
        green: true,
        yellow: true,
      };
      data.docs.forEach((doc) => {
        newColors[doc.data().color] = false;
      });
      console.log(newColors);
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
