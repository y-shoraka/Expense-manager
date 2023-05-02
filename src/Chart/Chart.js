import React from "react";
import ChartBar from "./ChartBar";
import Category from "../Category/Category";
import { useState } from "react";
import userEvent from "@testing-library/user-event";

const Chart = (props) => {
  let Values = props.dataPoints.map((datapoint) => datapoint.value);
  let totalMax = Math.max(...Values);
  return (
    <div
      className={`h-screen w-full fixed top-0 z-40  bg-white  ${props.display}`}
    >
      <div className="bg-gray-200 flex flex-center justify-evenly mb-4 flex-wrap h-1/2 ">
        {props.dataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMax}
            label={dataPoint.label}
          />
        ))}
      </div>
      <div>
        <Category
          categoryList={props.categoryList} /*display={props.display}*/
        />
      </div>
    </div>
  );
};

export default Chart;
