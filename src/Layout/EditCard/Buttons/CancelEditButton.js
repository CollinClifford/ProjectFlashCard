import React from "react";
import { useHistory } from "react-router-dom";

//Cancel Edit Card Button.
const CancelEditButton = ({ deck }) => {
  //assigns useHistory hook to history variable.
  const history = useHistory();

  return (
    <button
      className="btn btn-secondary"
      onClick={() => history.push(`/decks/${deck.id}`)}
    >
      Cancel
    </button>
  );
};

export default CancelEditButton;
