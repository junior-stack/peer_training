import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../Firebase/index";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { httpsCallable } from "firebase/functions";
import { functions } from "./../../Firebase/index";
import { useContext } from "react";
import ColorContext from "../../Context/ColorContext";

const SignIn = ({ setIsAuth }) => {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userData = {};

  const { setUsers, setUsedColors, setUserProfile } = useContext(ColorContext);

  const getDocument = async () => {
    const getAllColors = httpsCallable(functions, "getAllColors");
    const data = await getAllColors();
    data.data.forEach((doc) => {
      userData[doc.userID] = doc.color;
    });
    setUsers(userData);
    const newColors = {
      white: true,
      blue: true,
      red: true,
      green: true,
      yellow: true,
    };
    data.data.forEach((doc) => {
      newColors[doc.color] = false;
    });
    setUsedColors(newColors);
  };

  const getUserProfile = async () => {
    const getProfile = httpsCallable(functions, "getProfile");
    getProfile({ uid: auth.currentUser.uid }).then((result) => {
      setUserProfile({ url: result.data.url });
    });
  };

  const sign = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async (result) => {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        getDocument();
        getUserProfile();
        navigate("/gamelobby");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="modal">
      <div>
        <h1>Sign in</h1>
      </div>
      <input
        name="email"
        placeholder="Email..."
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <input
        name="password"
        placeholder="password..."
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <button onClick={sign}>Submit</button>
    </div>
  );
};

export default SignIn;
