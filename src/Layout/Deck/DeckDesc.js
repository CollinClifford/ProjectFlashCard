import React from "react";

//imports components.
import EditButton from "./Buttons/EditButton";
import StudyButton from "./Buttons/StudyButton";
import AddCardsButton from "./Buttons/AddCardsButton";
import DeleteButton from "./Buttons/DeleteButton";

//Deck Description screen component.
const DeckDesc = ({ deck }) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <h2>{deck.name}</h2>
          <p>{deck.description}</p>
        </div>
      </div>
      <div className="row">
        <div className="col col-11">
          <EditButton deck={deck} />
          <StudyButton deck={deck} />
          <AddCardsButton deck={deck} />
        </div>
        <div className="col col-1">
          <DeleteButton deck={deck} />
        </div>
      </div>
    </>
  );
};

export default DeckDesc;
