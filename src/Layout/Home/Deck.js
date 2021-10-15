import React from "react";

//imports components.
import ViewButton from "./Buttons/ViewButton";
import StudyButton from "./Buttons/StudyButton";
import DeleteButton from "./Buttons/DeleteButton";

//Deck Component.
const Deck = ({ deck }) => {
  //maps deck to display deck name, cards, description, and buttons.
  return deck.map((item, index) => {
    return (
      <div key={index} className="border mt-2">
        <div className="row m-2">
          <div className="col col-11">
            <h1>{item.name}</h1>
          </div>
          <div className="col col-1">
            {item.cards.length} cards
          </div>
        </div>
        <div className="row m-2">
          <div className="col">
            <p>{item.description}</p>
          </div>
        </div>
        <div className="row m-2">
          <div className="col col-11">
            <ViewButton item={item} />
            <StudyButton item={item} />
          </div>
          <div className="col col-1">
            <DeleteButton item={item} />
          </div>
        </div>
      </div>
    );
  });
};

export default Deck;
