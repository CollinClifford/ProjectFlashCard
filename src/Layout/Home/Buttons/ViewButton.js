import React from "react";
import { useHistory } from "react-router-dom";

//imports Eye icon.
import Eye from "../../../icons/Eye";

//View Deck Button Component.
const ViewButton = ({ item }) => {
  //assigns useHistory hook to history variable.
  const history = useHistory();
  return (
    <button
      className="btn btn-secondary"
      onClick={() => history.push(`/decks/${item.id}`)}
    >
      {Eye} View
    </button>
  );
};

export default ViewButton;
