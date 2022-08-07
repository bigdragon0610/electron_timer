import React from "react";
import TimerBtn from "./TimerButton";

const TimerButtons = () => {
  return (
    <section className="mt-5 font-bold flex gap-5 justify-center">
      <TimerBtn icon="▶" />
      <TimerBtn icon="↑" />
      <TimerBtn icon="↓" />
    </section>
  );
};

export default TimerButtons;
