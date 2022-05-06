import "./theme/App.css";
import GameLoby from "./Components/GameLoby/game_loby";
import Helloworld from "./Components/Helloworld";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useMemo, useState } from "react";
import Context from "./Context/context";

function App() {
  const [colors, setColors] = useState({
    users: ["white", "white", "white", "white"],
    white: false,
    blue: true,
    red: true,
    green: true,
    yellow: true,
  });

  const value = useMemo(() => ({ colors, setColors }), [colors]);

  return (
    <Context.Provider value={value}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<GameLoby />} />
            <Route path="/helloworld" element={<Helloworld />} />
          </Routes>
        </div>
      </Router>
    </Context.Provider>
  );
}

export default App;
