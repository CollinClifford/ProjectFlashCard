import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

//imports function.
import { readDeck, readCard, updateCard } from "../../utils/api";

//imports components.
import NavBar from "./NavBar";
import CancelEditButton from "./Buttons/CancelEditButton";

//Edit Card component.
const EditCard = () => {
  //sets up deck, card as well as card front and back useState.
  const [deck, setDeck] = useState([]);
  const [card, setCard] = useState({});
  const [cardFront, setCardFront] = useState("");
  const [cardBack, setCardBack] = useState("");

  //accessing the deck.id and deck.card.id from params.
  const deckId = useParams().deckId;
  const cardId = useParams().cardId;

  //assigns useHistory hook to history variable.
  const history = useHistory();

  //fetches deck info from API.
  useEffect(() => {
    async function read() {
      const response = readDeck(deckId);
      const deckFromAPI = await response;
      setDeck(deckFromAPI);
    }
    read();
  }, [deckId]);

  //fetches card info from API.
  useEffect(() => {
    async function load() {
      const response = readCard(cardId);
      const cardFromAPI = await response;
      setCard(cardFromAPI);
    }
    load();
  }, [cardId]);

  //sets user input to card front.
  const cardFrontHandler = (event) => {
    setCardFront(event.target.value);
  };

  //sets user input to card back.
  const cardBackHandler = (event) => {
    setCardBack(event.target.value);
  };

  //uses updateCard function and then resets url to deck screen.
  const submitHandler = (event) => {
    event.preventDefault();
    updateCard({ ...card, front: cardFront, back: cardBack }).then((deck) =>
      history.push(`/decks/${deck.deckId}`)
    );
  };

  return (
    <>
      <NavBar deck={deck} card={cardId} />
      <div className="row">
        <div className="col">
          <h1>Edit Card</h1>
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
              id="cardFront"
              type="text"
              name="cardFront"
              placeholder={card.front}
              value={card.front}
              onChange={cardFrontHandler}
              className="form-control"
              rows="8"
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
              id="cardBack"
              type="text"
              name="cardBack"
              placeholder={card.back}
              value={card.back}
              onChange={cardBackHandler}
              className="form-control"
              rows="8"
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <CancelEditButton deck={deck} />
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditCard;
