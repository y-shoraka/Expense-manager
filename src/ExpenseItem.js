import React from "react";
import "./ExpenseItem.css";
function ExpenseItem(props) {
  let Dates = new Date(props.Date);
  let Year = Dates.getFullYear();
  let monthNum = Dates.getMonth();
  let Day = Dates.getDay();
  let Months = ["January", "February", "March", "April", "May", "June", "July" , "August" , "September" , "October" , "November"];
console.log({Dates})
  return (
    <div className="expenseChart">
      <div className="time">
        <div className="month">{Months[monthNum]}</div>
        <div className="yaer">{Year}</div>
        <div className="day">{Day}</div>
      </div>

      <div className="expenseName">
        <div className="category">{props.Cat}</div>{props.Name}
      </div>
      <div className="Price">$ {props.Amount}</div>
    </div>
  );
}

export default ExpenseItem;
