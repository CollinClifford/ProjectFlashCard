import React from "react";

import { useHistory } from "react-router-dom";

//Cancel Create Deck Button component
const CancelCreateButton = () => {
  //assigns useHistory hook to history variable
  const history = useHistory();

  return (
    <button className="btn btn-secondary" onClick={() => history.push("/")}>
      Cancel
    </button>
  );
};

export default CancelCreateButton;
