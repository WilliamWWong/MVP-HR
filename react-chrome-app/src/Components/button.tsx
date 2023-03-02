import React from "react";

type Props = {
  NameofClass: string;
  buttonLabel: string;
  onClick: (event: React.SyntheticEvent) => void;
};
//React.SyntheticEvent - umbrella catchall for event

const Button = ({ NameofClass, buttonLabel, onClick }: Props) => {
  return (
    <>
      <button
        className={`button ${NameofClass}`}
        name={buttonLabel}
        onClick={onClick}
      >
        {buttonLabel}
      </button>
    </>
  );
};

export default Button;
