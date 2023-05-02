import React from "react";

const CategoryBar = (props) => {
  return (
    <div className="flex justify-around border-2 rounded-md my-3 shadow-lg">
      <div className="w-1/6 h-10 p-2 text-center ">{props.icon}</div>
      <div className="w-4/6 text-left p-2">{props.name}</div>
      <div className="w-1/6 p-2 text-center" >${props.value}</div>
    </div>
  );
};
export default CategoryBar;
