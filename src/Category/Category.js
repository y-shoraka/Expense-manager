import React from "react";
import CategoryBar from "./CategoryBar";
const Category = (props) => {
  return (
    <div className="bg-white-500 rounded mx-3 ">
      {props.categoryList.map((item) => {
        return <CategoryBar name={item.name} value={item.value} icon={item.icon} />;
      })}
    </div>
  );
};
export default Category;
