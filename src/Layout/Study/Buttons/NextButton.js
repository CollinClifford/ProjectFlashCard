import React from "react";

//Next Button Component.
const NextButton = ({ nextHandler }) => {
  return (
    <button className="btn btn-primary" onClick={nextHandler}>
      Next
    </button>
  );
};

export default NextButton;
