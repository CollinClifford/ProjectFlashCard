import React from "react";

//imports components.
import EditCardButton from "./Buttons/EditCardButton";
import DeleteCardButton from "./Buttons/DeleteCardButton";

//Card Screen Component.
const Cards = ({ card, deck }) => {
  //Maps the cards to display front and back and edit/delete buttons.
  return card.map((item, index) => {
    return (
      <>
      <div key={index}>
        <div className="border mt-2">
          <div className="row m-2">
            <div className="col">
              <p>{item.front}</p>
            </div>
            <div className="col">
              <p>{item.back}</p>
              <EditCardButton item={item} deck={deck} />
              <DeleteCardButton item={item} deck={deck} />
            </div>
          </div>
        </div>
        </div>
      </>
    );
  });
};

export default Cards;
