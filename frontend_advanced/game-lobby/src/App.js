import "./theme/App.css";
import GameLoby from "./Page/GameLobby/game_loby";
import Helloworld from "./Components/Helloworld";
import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import SignIn from "./Page/SignUp/SignIn";
import UploadPage from "./Page/UploadPage";
import ColorContext from "./Context/ColorContext";

function App() {
  const { isAuth, setIsAuth } = useContext(ColorContext);

  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Navigate to="/login" />} />
        <Route
          path="/gamelobby"
          element={isAuth ? <GameLoby /> : <Navigate to="/login" />}
        />
        <Route path="/helloworld" element={<Helloworld />} />
        <Route path="/login" element={<SignIn setIsAuth={setIsAuth} />} />
        <Route
          path="/upload"
          element={isAuth ? <UploadPage /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
}

export default App;
