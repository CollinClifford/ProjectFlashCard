import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { createDeck } from "../../utils/api";

//imports components.
import NavBar from "./NavBar";
import CancelCreateButton from "./Buttons/CancelCreateButton";

//Create Deck component.
const CreateDeck = () => {
  //sets up Deck Name and Deck Description useStates.
  const [deckName, setDeckName] = useState("");
  const [deckDesc, setDeckDesc] = useState("");

  //assigns useHistory hook to history variable.
  const history = useHistory();

  //Sets user input to Deck Name.
  const deckNameHandler = (event) => {
    setDeckName(event.target.value);
  };

  //Sets user input to Deck Description.
  const deckDescHandler = (event) => {
    setDeckDesc(event.target.value);
  };

  //uses createDeck function to create a deck in the db then pushes user to the deck screen.
  const submitHandler = (event) => {
    event.preventDefault();
    createDeck({
      name: deckName,
      description: deckDesc,
    }).then((deck) => history.push(`/decks/${deck.id}`));
  };

  return (
    <>
      <NavBar />
      <div className="row">
        <div className="col">
          <h1>Create Deck</h1>
        </div>
      </div>
      <form onSubmit={submitHandler}>
        <div className="row">
          <div className="col">
            <label htmlFor="deckName">Name</label>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              id="deckName"
              type="text"
              name="deckName"
              placeholder="Deck Name"
              value={deckName}
              onChange={deckNameHandler}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <label htmlFor="deckDesc">Description</label>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <textarea
              id="deckDesc"
              type="text"
              name="deckDesc"
              placeholder="Brief description of deck"
              value={deckDesc}
              onChange={deckDescHandler}
              className="form-control"
              rows="3"
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <CancelCreateButton />
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateDeck;
