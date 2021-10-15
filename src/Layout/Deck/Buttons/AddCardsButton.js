import React from "react";
import { useHistory } from "react-router-dom";

//imports Plus icon.
import Plus from "../../../icons/Plus";

//Add Cards Button component.
const AddCardsButton = ({ deck }) => {
  //sets useHistory hook to history variable.
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
