import { signOut } from "firebase/auth";
import { auth } from "../../Firebase";
import "./NavBar.css";
import { useNavigate } from "react-router";
import { useContext } from "react";
import ColorContext from "../../Context/ColorContext";

const NavBar = () => {
  const { setIsAuth, userProfile } = useContext(ColorContext);
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
    <div className="navbar">
      <div className="GameLobby" onClick={toGameLoby}>
        Game Lobby
      </div>
      <div className="UploadFile" onClick={toUploadFile}>
        Upload a File
      </div>
      <div>{auth.currentUser ? auth.currentUser.email : ""}</div>
      <div>
        <img src={userProfile.url} />
        <button onClick={signout}>Signout</button>
      </div>
    </div>
  );
};

export default NavBar;
