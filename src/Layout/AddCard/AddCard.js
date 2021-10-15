import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//imports functions.
import { readDeck, createCard } from "../../utils/api";

//imports navigational components.
import NavBar from "./NavBar";
import DoneButton from "./Buttons/DoneButton";

//Add card component.
const AddCard = () => {
  //sets up the useState for deck to be returned from API.
  const [deck, setDeck] = useState([]);
  //Sets the useState for front and back of Cards.
  const [cardFront, setCardFront] = useState("");
  const [cardBack, setCardBack] = useState("");

  //accesses the deck.id from the params.
  const deckId = useParams().deckId;

  //useEffect to accress deck information from API.
  useEffect(() => {
    async function read() {
      const response = readDeck(deckId);
      const deckFromAPI = await response;
      setDeck(deckFromAPI);
    }
    read();
  }, [deckId]);

  //asssigns user import to back of card.
  const cardFrontHandler = (event) => {
    setCardFront(event.target.value);
  };

  //assigns user input to back of card.
  const cardBackHandler = (event) => {
    setCardBack(event.target.value);
  };

  // Uses createCard function to set the user's input to the db and then resets the input screens.
  const submitHandler = (event) => {
    event.preventDefault();
    createCard(deckId, {
      front: cardFront,
      back: cardBack,
    });
    setCardFront("");
    setCardBack("");
  };

  return (
    <>
      <NavBar deck={deck} />
      <div className="row">
        <div className="col">
          <h1>{deck.name}</h1>
          <h1>Add Card</h1>
        </div>
      </div>
      <form onSubmit={submitHandler}>
        <div className="row">
          <div className="col">
            <label htmlFor="cardFront">Front</label>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <textarea
              input="cardFront"
              type="text"
              name="cardFront"
              placeholder="Front side of card"
              value={cardFront}
              onChange={cardFrontHandler}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <label htmlFor="cardBack">Back</label>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <textarea
              input="cardBack"
              type="text"
              name="cardBack"
              placeholder="Back side of card"
              value={cardBack}
              onChange={cardBackHandler}
              className="form-control"
              rows="3"
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <DoneButton deck={deck} />
            <button className="btn btn-primary" type="submit">
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddCard;
