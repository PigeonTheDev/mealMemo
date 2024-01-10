import { useSelector } from "react-redux";
import { Navbar } from "../../Components/Navbar/Navbar";
import settingsFood from "./settingsFood.png";
import "./SettingsPage.scss";
import { GlobalState } from "../../Redux/reducers";
import { User } from "../../Models/User";

export const SettingsPage = () => {
  const user: User = useSelector((state: GlobalState) => state.user);
  const localStorageUser = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <>
      <Navbar />
      <div className="SettingsWrapper">
        <div className="SettingsProfileWrapper">
          <div className="SettingsProfileHeader">PROFILE</div>
          <div>
            <div className="SettingsProfileItemHeader">NAME</div>
            <div className="SettingsProfileItemValue">* {user.username ? user.username : localStorageUser.username}</div>
          </div>

          <div>
            <div className="SettingsProfileItemHeader">E-MAIL</div>
            <div className="SettingsProfileItemValue">* {user.email ? user.email : localStorageUser.email}</div>
          </div>
        </div>
        <img src={settingsFood} alt="food" />
        <div className="SettingsFormWrapper">
          <div className="SettingsFormHeader">WANT TO CHANGE PASSWORD</div>
          <div>
            <div className="SettingsFormItemHeader">CURRENT PASSWORD</div>
            <input />
          </div>
          <div>
            <div className="SettingsFormItemHeader">NEW PASSWORD</div>
            <input />
          </div>
          <div>
            <div className="SettingsFormItemHeader">CONFIRM NEW PASSWORD</div>
            <input />
          </div>
          <button>
            <span className="text">CHANGE</span>
          </button>
        </div>
        <div className="leftOrange" />
      </div>
    </>
  );
};
