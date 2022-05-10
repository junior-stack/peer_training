import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "./../../Firebase/index"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";

const SignIn = ({setIsAuth}) =>{

  let navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const sign = async () => {
    signInWithEmailAndPassword(auth, email, password).then((result) =>{
      localStorage.setItem("isAuth", true)
      setIsAuth(true)
      navigate("/")
    }).catch((error) =>{
      console.error(error)
    })


  }

  return (
    <div class="modal">
      <button onClick={sign}>Sign in</button>
      <form name="SignInform">
        <input 
        name="email"
        placeholder="Email..." 
        onChange={(event) =>{
          setEmail(event.target.value)
        }}
        />
        <input name="password"
        placeholder="password..."
        onChange={(event) =>{
          setPassword(event.target.value)
        }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SignIn;