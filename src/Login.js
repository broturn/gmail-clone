import React from "react";
import { login } from "./features/userSlice";
import { auth, provider } from "./firebase.js";
import "./Login.css";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";

function Login() {
    const dispatch = useDispatch();
  const signIn = () => {
    auth.signInWithPopup(provider)
    .then(({ user }) => {
      dispatch(
        login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        })
        );
    }); 
    .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg"
          alt=""
        />
        <Button variant="contained" color="primary" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
