import React from "react";

interface ISignUp {
  authComponentOnChange: () => void;
}

export const SignUp: React.FC<ISignUp> = ({ authComponentOnChange }) => {
  return (
    <div className="LogInWrapper">
      <div className="welcomeMessageWrapper">
        <div>WELCOME BACK,</div>
        <div className="smallerWelcome">PLEASE CREATE YOUR ACCOUNT.</div>
      </div>
      <div>
        <div className="logInInputWrapper">
          NAME -SURNAME
          <input type="text" className="AuthInput" />
        </div>
        <div className="logInInputWrapper">
          E-MAIL
          <input type="text" className="AuthInput" />
        </div>
        <div className="logInInputWrapper">
          PASSWORD
          <input type="text" className="AuthInput" />
        </div>
        <div className="logInInputWrapper">
          CONFIRM PASSWORD
          <input type="text" className="AuthInput" />
        </div>

        <div className="AuthButtonsWrapper">
          <div>
            <button onClick={authComponentOnChange}>
              <span className="text">LOGIN</span>
            </button>
          </div>

          <div style={{ marginLeft: "6rem" }}>
            <button>
              <span className="text">SIGNUP</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
