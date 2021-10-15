import React from "react";
import { useHistory } from "react-router-dom";

//imports Plus icon.
import Plus from "../../../icons/Plus";

//Create Deck Button component.
const CreateDeckButton = () => {
  //sets useHistory hook to history variable.
  const history = useHistory();
  return (
    <button className="btn btn-primary" onClick={() => history.push("/decks/new")}>
      {Plus} Create Deck
    </button>
  );
};

export default CreateDeckButton;
