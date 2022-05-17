import React from "react";
const ColorContext = React.createContext({
  usedColors: {
    white: false,
    blue: true,
    red: true,
    green: true,
    yellow: true,
  },

  setUsedColors: () => {},

  users: [],
  setUsers: () => {},

  isAuth: false,
  setIsAuth: () => {},
});

export default ColorContext;
