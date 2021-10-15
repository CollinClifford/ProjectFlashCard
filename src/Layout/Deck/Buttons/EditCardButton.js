import React from "react";
import { useHistory } from "react-router-dom";

//import Pencil icon.
import Pencil from "../../../icons/Pencil";

//Edit Card Button Component.
const EditCardButton = ({ item, deck }) => {
  //assigns useHistory hook to history variable.
  const history = useHistory();

  return (
    <button
      className="btn btn-secondary"
      onClick={() => history.push(`/decks/${deck.id}/cards/${item.id}/edit`)}
    >
      {Pencil} Edit
    </button>
  );
};

export default EditCardButton;
