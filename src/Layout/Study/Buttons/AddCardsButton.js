import React from "react";
import { useHistory } from "react-router-dom";

//imports plus icon.
import Plus from "../../../icons/Plus";

//Add Cards Button Component.
const AddCardsButton = ({ deck }) => {
  //assigns useHistory hook to history variable.
  const history = useHistory();

  return (
    <button
      className="btn btn-primary"
      onClick={() => history.push(`/decks/${deck.id}/cards/new`)}
    >
      {Plus} Add Cards
    </button>
  );
};

export default AddCardsButton;
