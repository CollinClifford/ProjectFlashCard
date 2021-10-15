import React from "react";
import { useHistory } from "react-router-dom";

//imports function.
import { deleteDeck } from "../../../utils/api/index";

//imports Trash icon.
import Trash from "../../../icons/Trash";

//Delete Deck Button component.
const DeleteButton = ({ deck }) => {
  //assigns useHistory hook to history variable.
  const history = useHistory();

  //warns user before using deleteDeck function and then resets url to homepage.
  const clickHandler = () => {
    if (
      window.confirm("Delete this Deck?\n\nYou will not be able to recover it.")
    ) {
      deleteDeck(deck.id);
      history.push("/");
    }
  };

  return (
    <button className="btn btn-danger" onClick={clickHandler}>
      {Trash}
    </button>
  );
};

export default DeleteButton;
