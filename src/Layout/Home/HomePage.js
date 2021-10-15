import React, { useEffect, useState } from "react";

//imports functions.
import { listDecks } from "../../utils/api/index";

//imports components.
import CreateDeckButton from "./Buttons/CreateDeckButton";
import Deck from "./Deck";

//Homepage Screen component.
const HomePage = () => {
  //sets deck using useState.
  const [deck, setDeck] = useState([]);

  //grabs deck from API using listDecks function.
  useEffect(() => {
    async function loadDeck() {
      const response = await listDecks();
      setDeck(response);
    }
    loadDeck();
  }, []);

  return (
    <div className="container">
      <CreateDeckButton />
      <Deck deck={deck} />
    </div>
  );
};

export default HomePage;
