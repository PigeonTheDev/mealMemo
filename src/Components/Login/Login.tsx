import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router";
import { LANDING_ROUTE } from "../../Enums/ROUTE_PATH_TITLE";
import { User } from "../../Models/User";
import { loginUser } from "../../API/fake_api";

interface ILogin {
  authComponentOnChange: () => void;
}

const initUser: User = {
  username: "",
  password: "",
};

export const Login: React.FC<ILogin> = ({ authComponentOnChange }) => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState<User>(initUser);

  const handleLogin = (user: User) => {
    loginUser(user)
      .then((data) => {
        console.log(data);
        navigate(`${LANDING_ROUTE.PATH}`);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="LogInWrapper">
      <div className="welcomeMessageWrapper">
        <div>WELCOME BACK,</div>
        <div className="smallerWelcome">PLEASE LOGIN TO YOUR ACCOUNT.</div>
      </div>
      <div>
        <div className="logInInputWrapper">
          E-MAIL ADDRESS
          <input
            onChange={(e) => {
              setUserInfo({ ...userInfo, username: e.target.value });
            }}
            type="text"
            className="AuthInput"
          />
        </div>
        <div className="logInInputWrapper">
          PASSWORD
          <input
            onChange={(e) => {
              setUserInfo({ ...userInfo, password: e.target.value });
            }}
            type="text"
            className="AuthInput"
          />
        </div>

        <div className="AuthOperationsWrapper">
          <div>
            <input type="checkbox" /> STAY LOGGED IN
          </div>

          <div className="forgotPassword">FORGOT PASSWORD</div>
        </div>
        <div className="AuthButtonsWrapper">
          <div>
            <button>
              <span onClick={() => handleLogin(userInfo)} className="text">
                LOGIN
              </span>
            </button>
          </div>

          <div style={{ marginLeft: "6rem" }}>
            <button onClick={authComponentOnChange}>
              <span className="text">SIGNUP</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
