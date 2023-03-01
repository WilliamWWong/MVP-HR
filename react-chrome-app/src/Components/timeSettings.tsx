import React from "react";
type Props = {
  settingsName: string;
  time: Number;
};

const timeSettings = ({ settingsName, time }: Props) => {
  const changeTime = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };
  return (
    <>
      <div>
        <button name="increase" onClick={changeTime}>
          Up
        </button>
        <p>{settingsName}</p>
        <p>{time.toString()}</p>
        <button name="decrease" onClick={changeTime}>
          Down
        </button>
      </div>
    </>
  );
};

export default timeSettings;
