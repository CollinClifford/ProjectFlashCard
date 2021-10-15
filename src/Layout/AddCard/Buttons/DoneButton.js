import React from "react";
import { useHistory } from "react-router-dom";

//Done Button.
const DoneButton = ({ deck }) => {
  //assigns useHistory hook to history variable.
  const history = useHistory();

  return (
    //sets Done button to return user to the deck screen.
    <button
      className="btn btn-secondary"
      onClick={() => history.push(`/decks/${deck.id}`)}
    >
      Done
    </button>
  );
};

export default DoneButton;
