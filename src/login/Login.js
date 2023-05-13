import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { AuthContext } from "../util/AuthContext";
import "./login.css";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const [error, setError] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/");
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  };
  return (
    <div className="login">
      <span>Login</span>
      <form className="loginForm" onSubmit={handleLogin}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Email ID"
          onChange={(e) => setEmail(e.target.value)}
          ref={emailRef}
        ></input>

        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setpassword(e.target.value)}
          ref={passwordRef}
        ></input>

        <button className="loginButton button">LOGIN</button>
      </form>
      <span>
        <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
          username:kunalaarse@firebase.dev password:kunalaarse
        </Link>
        {error && <span>Error found</span>}
      </span>
    </div>
  );
}

export default Login;
