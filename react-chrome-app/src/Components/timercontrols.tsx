import React from "react";
import Button from "./button";

const TimerControls = () => {
  const handlePlayClick = () => {
    alert("hi");
  };

  const handleStopClick = () => {
    alert("hi");
  };

  const handleRefreshClick = () => {
    alert("hi");
  };
  return (
    <>
      <div className="timer timer-controls">
        <Button
          NameofClass="button button-play"
          buttonLabel="Play"
          onClick={handlePlayClick}
        />
        <Button
          NameofClass="button button-stop"
          buttonLabel="Stop"
          onClick={handleStopClick}
        />
        <Button
          NameofClass="button button-refresh"
          buttonLabel="Refresh"
          onClick={handleRefreshClick}
        />
      </div>
    </>
  );
};

export default TimerControls;
