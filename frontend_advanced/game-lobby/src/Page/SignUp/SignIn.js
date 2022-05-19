import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import ColorContext from "../../Context/ColorContext";
import { getAllColors, login } from "../../API/api";

const SignIn = ({ setIsAuth }) => {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userData = {};

  const { setUsers, setUsedColors, setUserProfile } = useContext(ColorContext);

  const getDocument = async () => {
    const data = await getAllColors();
    console.log("data: ", data);
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

  const sign = async () => {
    login(email, password)
      .then(async (result) => {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        getDocument();
        setUserProfile({
          url: `http://localhost:3000/profile/profile-image/${result.data.url}`,
          email: email,
          userID: result.data.userID,
        });
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
