import React from "react";

//Flip Button Component.
const FlipButton = ({ clickHandler }) => {
  return (
    <button className="btn btn-secondary" onClick={clickHandler}>
      Flip
    </button>
  );
};

export default FlipButton;
