import React, { useState } from "react";
import Button from "./button";
import TimerControls from "./timercontrols";

type Props = {
  timerMinute?: number;
};

const Timer = ({ timerMinute }: Props) => {
  const [breakTime, setBreakTime] = useState(false);
  const [timerSecond, setTimerSecond] = useState(0);

  return (
    <>
      <div className="timer timer-container">
        <h3>{breakTime ? "Session Break" : null}</h3>
        <h3>Timer</h3>
        <div className="timer timer-time">
          <span>{timerMinute}</span>
          <span>:</span>
          <span>
            {timerSecond === 0
              ? "00"
              : timerSecond < 10
              ? "0" + timerSecond
              : timerSecond}
          </span>
        </div>
      </div>
      <TimerControls />
    </>
  );
};

export default Timer;
