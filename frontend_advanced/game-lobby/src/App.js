import "./theme/App.css";
import GameLoby from "./Components/GameLoby/game_loby";
import Helloworld from "./Components/Helloworld";
import { Routes, Route, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./Firebase";
import { useState } from "react";
import SignIn from "./Page/SignUp/SignIn";

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const navigate = useNavigate()

  const signout = () =>{
    signOut(auth).then(() =>{
      localStorage.clear()
      setIsAuth(false)
      navigate('/login')
    })
  }

  return (
    <div className="App">
      <div className="navbar">
        <button onClick={ signout }>Signout</button>
      </div>
      <Routes>
        <Route path="/" element={<GameLoby />} />
        <Route path="/helloworld" element={<Helloworld />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
