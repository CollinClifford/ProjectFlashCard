import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//import functions.
import { readDeck } from "../../utils/api";

//import components.
import NavBar from "./NavBar";
import DeckDesc from "./DeckDesc";
import Cards from "./Cards";

//Deck components.
const Deck = () => {
  //sets up deck and card using useState.
  const [deck, setDeck] = useState([]);
  const [card, setCard] = useState([]);

  //accessing deck.id from params.
  const deckId = useParams().deckId;

  //grabs deck and cards from API and sets them.
  useEffect(() => {
    async function read() {
      const response = readDeck(deckId);
      const deckFromAPI = await response;
      setDeck(deckFromAPI);
      setCard(deckFromAPI.cards);
    }
    read();
  }, [deckId]);

  //initial deck screen.
  return (
    <>
      <NavBar deck={deck} />
      <DeckDesc deck={deck} />
      <h1>Cards</h1>
      <Cards card={card} deck={deck} />
    </>
  );
};

export default Deck;
