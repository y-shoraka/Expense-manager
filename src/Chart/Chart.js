import React from "react";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  let Values = props.dataPoints.map(datapoint => datapoint.value);
  let totalMax = Math.max(...Values)
  return (
    <div className="flex flex-center justify-evenly sticky top-0 bg-white mb-4 flex-wrap">
      
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
