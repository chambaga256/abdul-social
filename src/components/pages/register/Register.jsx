import { useContext, useRef } from "react";
import "./register.css";
import { CircularProgress } from "@material-ui/core";

export default function Register() {
 ;

 

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">AbdulSocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox">
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
        
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              
            />
            <button className="loginButton" type="submit">
             
                "SignUp"
            
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              
                "Have account login"
            
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
