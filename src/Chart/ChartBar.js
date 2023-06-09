import React from "react";

const ChartBar = (props) => {
  let height = (props.value / props.maxValue) * 100 + 10 ;
  if (props.maxValue > 0) {
    return (
      <div className=" min-w-10 mb-4 flex items-center flex-col justify-between py-5 h-60">
        <div className="text-xs">{props.label}</div>
        <div className="bg-[#fcdbff] h-[200px] rounded">
          <div style={{height: `calc(200px - ${height}px)` }}></div>
        <div
          className="bg-[#DB80E2] w-5 rounded-t "
          style={{ height: `${height}px` }}
        ></div></div>
      </div>
    );
  } else {
    return null;
  }
};

export default ChartBar;
