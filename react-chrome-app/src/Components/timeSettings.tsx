import React, { SetStateAction } from "react";
import Button from "./button";
type Props = {
  settingsName: string;
  time: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
};
//Dispatch<SetStateAction<number>>

const timeSettings = ({ settingsName, time, setState }: Props) => {
  const changeTimeDown = (event: React.SyntheticEvent) => {
    if (time > 0) {
      setState(time - 1);
    }
  };
  const changeTimeUp = (event: React.SyntheticEvent) => {
    setState(time + 1);
  };
  return (
    <>
      <div>
        <h3 className="time-settings--name">{settingsName}</h3>
        <div className="time-settings">
          <Button
            NameofClass={"button--increase"}
            buttonLabel={"Up"}
            onClick={changeTimeUp}
          />
          <p className="time-settings time-settings--text">
            {time.toString()} Minutes
          </p>
          <Button
            NameofClass="button button--decrease"
            buttonLabel={"Down"}
            onClick={changeTimeDown}
          />
        </div>
      </div>
    </>
  );
};

export default timeSettings;
