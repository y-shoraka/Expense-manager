import React, { useState } from "react";
import "./ExpenseForm.css";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Avatar } from "@mui/material";
import Expenses from "./Expenses";
const Mainpage = () => {
  let [expenseInput, setExpenseInput] = useState({
    Amount: "",
    Category: "",
    Name: "",
    Date: "",
  });
  let [expenseList, setExpenseList] = useState([]);
  const AmountHandler = (event) => {
    setExpenseInput((prevState) => {
      return { ...prevState, Amount: event.target.value };
    });
  };
  const CategoryHandler = (event) => {
    console.log(event.target.value);
    setExpenseInput((prevState) => {
      return { ...prevState, Category: event.target.value };
    });
  };
  const NameHandler = (event) => {
    setExpenseInput((prevState) => {
      return { ...prevState, Name: event.target.value };
    });
  };
  const DateHandler = (event) => {
    setExpenseInput((prevState) => {
      return { ...prevState, Date: event.target.value };
    });
  };
  let [formDisplay, setFormDisplay] = useState("notDisplayed");
  const closeAddExpense = (event) => {
    event.preventDefault();
    setFormDisplay("notDisplayed");
  };
  const openAddExpense = (event) => {
    event.preventDefault();
    setFormDisplay("displayed");
  };
  const submitHandler = (event) => {
    event.preventDefault();
    setExpenseList((PrevList) => {
      return [...PrevList, expenseInput];
    });
    setExpenseInput({
      Amount: "",
      Category: "",
      Name: "",
      Date: "",
    });
  };
  let [ChartDisplay, setChartDisplay] = useState("hidden");

  const openChart = (event) => {
    event.preventDefault();
    setChartDisplay("block");
  };
  const closeChart = (event) =>{event.preventDefault(); 
  setChartDisplay("hidden")}
  return (
    <div>
      <div className="sticky flex flex-row justify-start py-5 align-center">
        <div className="avatar mx-5">
          <Avatar src="/broken-image.jpg" />
        </div>
        <div>
          <div className="text-xs text-gray-500">Welcome!</div>
          <div>John Doe</div>
        </div>
      </div>

      <Expenses
        className="snap-y mb-[200px]"
        list={expenseList}
        ChartDisplay={ChartDisplay}
      />
      <div className={`z-50 absolute top-0 ${formDisplay}`}>
        <form
          className="rounded-t-lg z-50 fixed w-full h-screen"
          onSubmit={submitHandler}
        >
          <button className="closing-btn" onClick={closeAddExpense}>
            <CloseRoundedIcon />
          </button>
          <div className="expense-price">
            <div className="addExpense">Add Expense</div>
            <input
              type="number"
              min={0.01}
              step={0.01}
              placeholder="$ 0"
              value={expenseInput.Amount}
              onChange={AmountHandler}
            />
          </div>
          <div className="category">
            <select
              name="Category"
              value={expenseInput.Category}
              onChange={CategoryHandler}
            >
              <option
                selected={true}
                disabled={true}
                value="none"
                className="text-grey"
              >
                Select the Category
              </option>
              <option value="Food & Drinks">Food & Drinks</option>
              <option value="Clothes & Accessories">
                Clothes & Accessories
              </option>
              <option value="Pet Caring">Pet Caring</option>
              <option value="Home rent">Home rent</option>
              <option value="Furnitures">Furnitures</option>
              <option value="Health">Health</option>
            </select>
          </div>
          <div className="name w-full">
            <input
              type="name"
              placeholder="Name of Product"
              value={expenseInput.Name}
              onChange={NameHandler}
            ></input>
          </div>
          <div className="date">
            <input
              type="date"
              value={expenseInput.Date}
              onChange={DateHandler}
            />
          </div>
          <div className="fixed bottom-0 w-full py-4 ">
            <button className="rounded bg-gradient-to-r from-[#1FABE0] via-[#8684F4] via-[#D772DD] to-[#F8917D] py-4 mb-5 w-1/2">
              Save
            </button>
          </div>
        </form>
      </div>
      <div className=" flex justify-evenly items-center sticky bottom-0 p-4 bg-white w-full rounded-t-3xl mt-5 ">
        <a href="/">
          <button
          onClick={closeChart}
          >Home</button>
        </a>
        <button
          onClick={openAddExpense}
          className="transition ease-in-out delay-150 text-3xl hover:scale-110 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-r from-[#1FABE0] via-[#8684F4] via-[#D772DD] to-[#F8917D] rounded-full w-20 h-20 bg-black p-5 text-white text-center"
        >
          +
        </button>
        <a href="/">
          <button onClick={openChart}>Chart</button>
        </a>
      </div>
    </div>
  );
};

export default Mainpage;
