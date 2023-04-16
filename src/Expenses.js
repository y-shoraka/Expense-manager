import ExpenseItem from "./ExpenseItem";
//import { useState } from "react";

const Expenses = (props) => {
    
    let goo = props.list
    //.map((props) => {return "hello " + props.Name})
  console.log(goo)
let listedItems = goo.map((item) => {return <ExpenseItem Name={item.Name} Amount={item.Amount} Date={item.Date} Cat={item.Category}/>})
  return listedItems ;
};

export default Expenses;
