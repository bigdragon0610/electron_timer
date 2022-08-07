import React from "react";

const TimerBtn = ({ icon }) => {
  return (
    <button className="bg-blue-300 text-xl text-white w-14 h-10 shadow-md rounded-md">
      {icon}
    </button>
  );
};

export default TimerBtn;
