import Chart from "./Chart";
import React from "react";

const ChartBar = (props) => {
  if (props.maxValue > 0) {
    return (
      <div className=" min-w-10 mb-4 flex items-center flex-col justify-between py-5 h-60">
        <div className="text-xs" >{props.label}</div>
        <div
          className="bg-[#DB80E2] w-4 rounded-t "
          style={{ height: `${(props.value / props.maxValue) * 100 +10}px` }}
        ></div>
      </div>
    );
  } else {
    return null;
  }
};

export default ChartBar;
