import React from "react";
import ChartBar from "./ChartBar";
import { useState } from "react";
import userEvent from "@testing-library/user-event";

const Chart = (props) => {
  
  let Values = props.dataPoints.map(datapoint => datapoint.value);
  let totalMax = Math.max(...Values)
  return (
    <div className={`h-screen w-full fixed top-0 z-40 flex flex-center justify-evenly bg-white mb-4 flex-wrap ${props.display}`}>
      
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
