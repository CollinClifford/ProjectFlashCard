import React from "react";
import { useHistory } from "react-router-dom";

//imports pencil icon.
import Pencil from "../../../icons/Pencil";

//Edit Deck Button component.
const EditButton = ({ deck }) => {
  //assigns useHistory hook to history variable.
  const history = useHistory();

  return (
    <button
      className="btn btn-secondary"
      onClick={() => history.push(`/decks/${deck.id}/edit`)}
    >
      {Pencil} Edit
    </button>
  );
};

export default EditButton;
