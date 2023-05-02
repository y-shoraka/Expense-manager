import Chart from "./Chart/Chart";
import ExpenseItem from "./ExpenseItem";
import React from "react";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import PetsIcon from '@mui/icons-material/Pets';
import CottageIcon from '@mui/icons-material/Cottage';
import ChairIcon from '@mui/icons-material/Chair';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
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
  const Categories = [
    {icon:<FastfoodIcon/> ,name: "Food & Drinks", value: 0 },
    {icon:<CheckroomIcon/>, name: "Clothes & Accessories", value: 0 },
    {icon:<PetsIcon/>, name: "Pet Caring", value: 0 },
    {icon:<CottageIcon/> ,name: "Home rent", value: 0 },
    {icon:<ChairIcon/> ,name: "Furnitures", value: 0 },
    {icon:<HealthAndSafetyIcon/> ,name: "Health", value: 0 },
  ];

  for (const expense in props.list) {
    let newDate = new Date(list[expense].Date).getMonth();
    ChartDatapoint[newDate].value += parseInt(list[expense].Amount);
  }
  //console.log(ChartDatapoint);

  for (const expense in props.list) {
    let CategoryName = list[expense].Category;
    if (CategoryName === "Food & Drinks") {
      Categories[0].value += parseInt(list[expense].Amount);
    } else if (CategoryName === "Clothes & Accessories") {
      Categories[1].value += parseInt(list[expense].Amount);
    } else if (CategoryName === "Pet Caring") {
      Categories[2].value += parseInt(list[expense].Amount);
    } else if (CategoryName === "Home rent") {
      Categories[3].value += parseInt(list[expense].Amount);
    } else if (CategoryName === "Furnitures") {
      Categories[4].value += parseInt(list[expense].Amount);
    } else if (CategoryName === "Health") {
      Categories[5].value += parseInt(list[expense].Amount);
    }
  }
  console.log(Categories);
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
        <div>
          <Chart categoryList={Categories} dataPoints={ChartDatapoint} display={props.ChartDisplay} />
        </div>
      
      </div>
      <div className="h-screen">{listedItems}</div>
    </div>
  );
};

export default Expenses;
