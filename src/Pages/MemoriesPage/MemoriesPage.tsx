import { Calendar } from "../../Components/Base/Calendar/Calendar";
import { Navbar } from "../../Components/Navbar/Navbar";
import "./MemoriesPage.scss";
import pizza from "./pizza.png";

export const MemoriesPage = () => {
  const handleSelectedDate = (selectedDate: Date) => {
    console.log("to be implemented");
  };

  return (
    <div>
      <Navbar />
      <div className="calendarWrapper">
        <Calendar sendSelectedDate={handleSelectedDate} />
        <div className="ImageCardWrapper">
          <img src={pizza} alt="pizza" />

          <div className="ImageCardText">
            <div>16.11.2023</div>
            <div>Margarita Pizza</div>
            <div>Italy</div>
          </div>
        </div>
      </div>
    </div>
  );
};
