import React, { useState } from "react";

import { UserWithPass } from "../../Models/UserWithPass";

interface ISignUp {
  authComponentOnChange: () => void;
  onRegister: (user: UserWithPass) => void;
}

const initUser: UserWithPass = {
  username: "",
  email: "",
  password: "",
};

export const SignUp: React.FC<ISignUp> = ({
  authComponentOnChange,
  onRegister,
}) => {
  const [userInfo, setUserInfo] = useState<UserWithPass>(initUser);
  const [initPass, setInitPass] = useState<string>("");

  return (
    <div className="LogInWrapper">
      <div className="welcomeMessageWrapper">
        <div>WELCOME BACK,</div>
        <div className="smallerWelcome">PLEASE CREATE YOUR ACCOUNT.</div>
      </div>
      <div>
        <div className="logInInputWrapper">
          NAME & SURNAME
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
              <span
                onClick={() => {
                  if (initPass !== initUser.password) {
                    alert("Lütfen Şifrelerin Eşleştiğinden Emin Olun");
                  } else {
                    onRegister(userInfo);
                  }
                }}
                className="text"
              >
                SIGNUP
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
