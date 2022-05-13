import "./theme/App.css";
import GameLoby from "./Page/GameLobby/game_loby";
import Helloworld from "./Components/Helloworld";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./Firebase";
import { useState } from "react";
import SignIn from "./Page/SignUp/SignIn";
import UploadPage from "./Page/UploadPage";

function App() {
  console.log("app");
  console.log("curr user: ", auth.currentUser);
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  const signout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };

  const toGameLoby = () => {
    navigate("/gamelobby");
  };

  const toUploadFile = () => {
    navigate("/upload");
  };

  return (
    <div className="App">
      <div className="navbar">
        <div>{auth.currentUser ? auth.currentUser.email : ""}</div>
        {auth.currentUser ? (
          <div className="GameLobby" onClick={toGameLoby}>
            Game Lobby
          </div>
        ) : (
          ""
        )}
        {auth.currentUser ? (
          <div className="UploadFile" onClick={toUploadFile}>
            Upload a File
          </div>
        ) : (
          ""
        )}
        <div>
          {auth.currentUser ? <button onClick={signout}>Signout</button> : ""}
        </div>
      </div>
      <Routes>
        <Route path="*" element={<Navigate to="/login" />} />
        <Route
          path="/gamelobby"
          element={isAuth ? <GameLoby /> : <Navigate to="/login" />}
        />
        <Route path="/helloworld" element={<Helloworld />} />
        <Route path="/login" element={<SignIn setIsAuth={setIsAuth} />} />
        <Route path="/upload" element={<UploadPage />} />
      </Routes>
    </div>
  );
}

export default App;
