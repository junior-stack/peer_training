import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../Firebase/index";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = ({ setIsAuth }) => {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sign = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        console.log("here");
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
