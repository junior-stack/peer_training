import React from "react";
const colorContext = React.createContext({
  usedColors: {
    white: false,
    blue: true,
    red: true,
    green: true,
    yellow: true,
  },

  setUsedColors: () => {},
});

export default colorContext;
