import React from "react";
import { useHistory } from "react-router-dom";

//imports function.
import { deleteDeck } from "../../../utils/api";

//imports Trash icon.
import Trash from "../../../icons/Trash";

//Delete Button Component.
const DeleteButton = ({ item }) => {
  //assigns useHistory hook for history variable.
  const history = useHistory();
  //warns user before using deleteDeck and then resets url to home page.
  const clickHandler = () => {
    if (window.confirm("Delete this Deck?\n\nYou will not be able to recover it.")) {
      deleteDeck(item.id);
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
