import React, { useState } from "react";
import { useNavigate } from "react-router";
import { LANDING_ROUTE } from "../../Enums/ROUTE_PATH_TITLE";
import { User } from "../../Models/User";
import { registerUser } from "../../API/fake_api";

interface ISignUp {
  authComponentOnChange: () => void;
}

const initUser: User = {
  username: "",
  password: "",
};

export const SignUp: React.FC<ISignUp> = ({ authComponentOnChange }) => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState<User>(initUser);
  const [initPass, setInitPass] = useState<string>("");

  const handleLogin = (user: User) => {
    registerUser(user)
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
        <div className="smallerWelcome">PLEASE CREATE YOUR ACCOUNT.</div>
      </div>
      <div>
        <div className="logInInputWrapper">
          NAME -SURNAME
          <input
            type="text"
            onChange={(e) => {
              setUserInfo({ ...userInfo, username: e.target.value });
            }}
            className="AuthInput"
          />
        </div>
        <div className="logInInputWrapper">
          E-MAIL
          <input type="text" className="AuthInput" />
        </div>
        <div className="logInInputWrapper">
          PASSWORD
          <input
            type="text"
            onChange={(e) => {
              setUserInfo({ ...userInfo, password: e.target.value });
            }}
            className="AuthInput"
          />
        </div>
        <div className="logInInputWrapper">
          CONFIRM PASSWORD
          <input
            type="text"
            onChange={(e) => {
              setInitPass(e.target.value);
            }}
            className="AuthInput"
          />
        </div>

        <div className="AuthButtonsWrapper">
          <div>
            <button onClick={authComponentOnChange}>
              <span className="text">LOGIN</span>
            </button>
          </div>

          <div style={{ marginLeft: "6rem" }}>
            <button>
              <span onClick={() => handleLogin(userInfo)} className="text">
                SIGNUP
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
