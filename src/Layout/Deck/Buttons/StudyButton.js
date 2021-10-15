import React from "react";
import { useHistory } from "react-router-dom";

//import Book icon.
import Book from "../../../icons/Book";

//Study Deck Button component.
const StudyButton = ({ deck }) => {
  //assigns useHistory hook to history variable.
  const history = useHistory();

  return (
    <button
      className="btn btn-primary"
      onClick={() => history.push(`/decks/${deck.id}/study`)}
    >
      {Book} Study
    </button>
  );
};

export default StudyButton;
