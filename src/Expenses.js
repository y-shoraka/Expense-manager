import Chart from "./Chart/Chart";
import ExpenseItem from "./ExpenseItem";
import React from "react";
//import { useState } from "react";

const Expenses = (props) => {
  let list = props.list;
  console.log(list);
  const ChartDatapoint = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense in props.list) {
    let newDate = new Date(list[expense].Date).getMonth();
    ChartDatapoint[newDate].value += parseInt(list[expense].Amount);
  }
  console.log(ChartDatapoint);
  let listedItems = list.map((item) => {
    return (
      <ExpenseItem
        key={Math.random()}
        Name={item.Name}
        Amount={item.Amount}
        Date={item.Date}
        Cat={item.Category}
      />
    );
  });

  return (
    <div>
      <div>
        <Chart dataPoints= {ChartDatapoint} display={props.ChartDisplay} />
      </div>
      <div className="h-screen">{listedItems}</div>
    </div>
  );
};

export default Expenses;
