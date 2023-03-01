import React, { useState } from "react";

type Props = {
  timerMinute?: number;
};

const Timer = ({ timerMinute }: Props) => {
  const [breakTime, setBreakTime] = useState(false);
  const [timerSecond, setTimerSecond] = useState(0);

  return (
    <>
      <h3>{breakTime ? "Session Break" : null}</h3>
      <h3>Timer</h3>
      <span>{timerMinute}</span>
      <span>:</span>
      <span>
        {timerSecond === 0
          ? "00"
          : timerSecond < 10
          ? "0" + timerSecond
          : timerSecond}
      </span>
    </>
  );
};

export default Timer;
