import React from "react";
import "./ExpenseItem.css";
function ExpenseItem() {
  let Dates = new Date();
  let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="expenseChart">
      <div className="time">
        <div className="month">August</div>
        <div className="yaer">2020</div>
        <div className="day">14</div>
      </div>

      <div className="expenseName">
        <div className="category">Category</div>toilet paper
      </div>
      <div className="Price">$ 24</div>
    </div>
  );
}

export default ExpenseItem;
