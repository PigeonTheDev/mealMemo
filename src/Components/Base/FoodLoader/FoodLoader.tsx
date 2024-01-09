import React from "react";
import "./FoodLoader.scss";

interface IFoodLoader {
  isLoading: boolean;
}

export const FoodLoader: React.FC<IFoodLoader> = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }

  return (
    <div className="FoodLoaderBg">
      <div className="FoodLoaderWrapper">
        <h1>Cooking in progress</h1>
        <div id="cooking">
          {/* <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div> */}
          <div id="area">
            <div id="sides">
              <div id="pan"></div>
              <div id="handle"></div>
            </div>
            <div id="pancake">
              <div id="pastry"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
