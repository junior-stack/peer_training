import "./theme/App.css";
import GameLoby from "./Components/GameLoby/game_loby";
import Helloworld from "./Components/Helloworld";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ColorContextProvider from "./Context/ColorContextProvider";

function App() {
  return (
    <ColorContextProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<GameLoby />} />
            <Route path="/helloworld" element={<Helloworld />} />
          </Routes>
        </div>
      </Router>
    </ColorContextProvider>
  );
}

export default App;
