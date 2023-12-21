import React from "react";
import "./Login.scss";

interface ILogin {
  authComponentOnChange: () => void;
}

export const Login: React.FC<ILogin> = ({ authComponentOnChange }) => {
  return (
    <div className="LogInWrapper">
      <div className="welcomeMessageWrapper">
        <div>WELCOME BACK,</div>
        <div className="smallerWelcome">PLEASE LOGIN TO YOUR ACCOUNT.</div>
      </div>
      <div>
        <div className="logInInputWrapper">
          E-MAIL ADDRESS
          <input type="text" className="AuthInput" />
        </div>
        <div className="logInInputWrapper">
          PASSWORD
          <input type="text" className="AuthInput" />
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
              <span className="text">LOGIN</span>
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
