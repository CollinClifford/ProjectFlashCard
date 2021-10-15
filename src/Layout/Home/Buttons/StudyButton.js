import React from "react";
import { useHistory } from "react-router-dom";

//imports Book icon.
import Book from "../../../icons/Book";

//Study Deck button component.
const StudyButton = ({ item }) => {
  //assigns useHistory hook to history variable.
  const history = useHistory();

  return (
    <button
      className="btn btn-secondary"
      onClick={() => history.push(`/decks/${item.id}/study`)}
    >
      {Book} Study
    </button>
  );
};

export default StudyButton;
