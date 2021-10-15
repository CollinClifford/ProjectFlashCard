import React from "react";
import { useHistory } from "react-router-dom";

//import deleteCard function.
import { deleteCard } from "../../../utils/api/index";

//import Trash icon.
import Trash from "../../../icons/Trash";

//Delete Card Button Component.
const DeleteCardButton = ({ item, deck }) => {
  //assigns useHistory hook to history variable.
  const history = useHistory();

  //warns user before deleting card and resets url to deck screen.
  const clickHandler = () => {
    if (
      window.confirm("Delete this Card?\n\nYou will not be able to recover it.")
    ) {
      deleteCard(item.id);
      history.push(`/decks/${deck.id}`);
    }
  };

  return (
    <button className="btn btn-danger" onClick={clickHandler}>
      {Trash}
    </button>
  );
};

export default DeleteCardButton;
