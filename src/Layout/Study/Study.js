import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//imports functions.
import { readDeck } from "../../utils/api";

//imports components.
import NavBar from "./NavBar";
import Title from "./Title";
import AddCardsButton from "./Buttons/AddCardsButton";
import Card from "./Card";

//Study screen Component.
const Study = () => {
  //sets deck and cards with useState.
  const [deck, setDeck] = useState([]);
  const [card, setCard] = useState([]);

  //accesses the deck.id from param
  const deckId = useParams().deckId;

  //grabs deck and cards from API.
  useEffect(() => {
    async function read() {
      const response = readDeck(deckId);
      const deckFromAPI = await response;
      setDeck(deckFromAPI);
      setCard(deckFromAPI.cards);
    }
    read();
  }, [deckId]);

  //if the cards are two or zero it returns this screen.
  if (card.length < 2) {
    return (
      <>
        <NavBar deck={deck} />
        <Title deck={deck} />
        <h2>Not enough cards.</h2>
        <p>
          You need at least 3 cards to study. There are {card.length} cards in
          this deck.
        </p>
        <AddCardsButton deck={deck} />
      </>
    );
  } else {
    //else it returns the flashcards.
    return (
      <>
        <NavBar deck={deck} />
        <Title deck={deck} />
        <div className="border">
          <div className="m-2">
            <Card card={card} />
          </div>
        </div>
      </>
    );
  }
};

export default Study;
