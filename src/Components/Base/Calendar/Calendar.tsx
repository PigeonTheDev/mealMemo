import React, { useState } from "react";
import { daysOfTheWeek, monthsOfTheYear } from "../../../Enums/CONSTANTS";
import "./Calendar.scss";

interface ICalendar {
  sendSelectedDate: (selectedDate: Date) => void;
}

export const Calendar: React.FC<ICalendar> = ({ sendSelectedDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>();

  const getDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 0);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = [];

    for (let i = 1; i <= lastDay.getDate(); i++) {
      daysInMonth.push(i);
    }

    return {
      firstDay,
      lastDay,
      daysInMonth,
    };
  };

  const changeMonth = (increment: number) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + increment);
    setCurrentDate(newDate);
  };

  const renderHeader = () => (
    <div className="calendar-header">
      <h2>
        {monthsOfTheYear[currentDate.getMonth()]} {currentDate.getFullYear()}
      </h2>

      <button onClick={() => changeMonth(-1)}>&lt;</button>
      <button onClick={() => changeMonth(1)}>&gt;</button>
      <button
        disabled={selectedDate === undefined}
        onClick={() => {
          if (selectedDate) sendSelectedDate(selectedDate);
        }}
      >
        +
      </button>
    </div>
  );

  const renderDaysOfWeek = () => (
    <div className="days-of-week">
      {daysOfTheWeek.map((day) => {
        return (
          <div key={day} className={`day ${day === "Sat" || day === "Sun" ? "weekend" : ""}`}>
            {day}
          </div>
        );
      })}
    </div>
  );

  const handleDayClick = (day: number) => {
    const newSelectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(newSelectedDate);
    // You can perform any other actions here based on the selected date.
  };

  const renderCalendarDays = () => {
    const { firstDay, daysInMonth } = getDaysInMonth();
    const startDay = firstDay.getDay();

    const emptyDays = Array(startDay).fill(null);
    const daysInMonthWithEmpty = [...emptyDays, ...daysInMonth];
    console.log(selectedDate?.getDate());

    return daysInMonthWithEmpty.map((day, index) => {
      return <div key={index} onClick={() => handleDayClick(day)} className={`calendar-day ${day === selectedDate?.getDate() ? "selected" : ""} ${day ? "" : "empty"}`}></div>;
    });
  };

  return (
    <div className="custom-calendar">
      {renderHeader()}
      {renderDaysOfWeek()}
      <div className="calendar-days">{renderCalendarDays()}</div>
    </div>
  );
};
