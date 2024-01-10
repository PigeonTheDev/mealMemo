import { Navbar } from "../../Components/Navbar/Navbar";
import exampleFood from "./exampleFood.png";
import "./LandingPage.scss";
const currentDate = new Date();

export const LandingPage = () => {
  console.log(currentDate.getDay());
  return (
    <>
      <Navbar />
      <div className="LandingWrapper">
        <div className="LandingTextWrapper">
          <div className="LandingTextHeader">KEEP YOUR FOOD IN YOUR MEMORIES</div>
          <div className="LandingText">YOUR CULINARY JOURNEY STARTS HERE</div>
          <div className="landingButtonWrapper">
            <div className="landingButton">Explore ➤</div>
          </div>
        </div>
        <img src={exampleFood} alt="food" />
        <div className="landingLeft" />
      </div>
    </>
  );
};
