import React from "react";
const userContext = React.createContext({
  users: [],
  setUsers: () => {},
});
export default userContext;
