import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { AuthContext } from "../util/AuthContext";
import "./login.css";

function Login() {
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
      <div>
        <form onSubmit={handleLogin}>
          <div>
            <img src="" alt="" />
            <input
              type="email"
              placeholder="Email ID"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>

          <div>
            <img src="" alt="" />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setpassword(e.target.value)}
            ></input>
          </div>

          <button className="button">LOGIN</button>
        </form>
        <span>
          Don't Have a Account ?
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "black" }}
          >
            username:kunalaarse@dev.com password:kunalaarse
          </Link>
          {error && <span>Error found</span>}
        </span>
      </div>
    </div>
  );
}

export default Login;
