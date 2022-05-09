import "./theme/App.css";
import GameLoby from "./Components/GameLoby/game_loby";
import Helloworld from "./Components/Helloworld";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import userContext from "./Context/userContext";
import colorContext from "./Context/colorContext";

function App() {
  const [users, setUsers] = useState(["white", "white", "white", "white"]);
  const usersValue = { users, setUsers };

  const [usedColors, setusedColors] = useState({
    white: false,
    blue: true,
    red: true,
    green: true,
    yellow: true,
  });
  const colorsValue = { usedColors, setusedColors };

  return (
    <userContext.Provider value={usersValue}>
      <colorContext.Provider value={colorsValue}>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<GameLoby />} />
              <Route path="/helloworld" element={<Helloworld />} />
            </Routes>
          </div>
        </Router>
      </colorContext.Provider>
    </userContext.Provider>
  );
}

export default App;
