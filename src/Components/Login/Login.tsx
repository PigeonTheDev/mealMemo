import React, { useState } from "react";
import "./Login.scss";

import { UserWithPass } from "../../Models/UserWithPass";

interface ILogin {
  authComponentOnChange: () => void;
  onLogin: (user: UserWithPass) => void;
}

const initUser: UserWithPass = {
  username: "",
  email: "",
  password: "",
};

export const Login: React.FC<ILogin> = ({ authComponentOnChange, onLogin }) => {
  const [userInfo, setUserInfo] = useState<UserWithPass>(initUser);

  return (
    <div className="LogInWrapper">
      <div className="welcomeMessageWrapper">
        <div>WELCOME BACK,</div>
        <div className="smallerWelcome">PLEASE LOGIN TO YOUR ACCOUNT.</div>
      </div>
      <div>
        <div className="logInInputWrapper">
          User Name
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
              <span onClick={() => onLogin(userInfo)} className="text">
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
