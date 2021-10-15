import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

//imports functions.
import { readDeck, updateDeck } from "../../utils/api";

//imports components.
import NavBar from "./NavBar";
import CancelEditButton from "./Buttons/CancelEditButton";

//Edit Deck Screen component.
const EditDeck = () => {
  //sets deck Name and Description and Deck from API with useState.
  const [deckName, setDeckName] = useState("");
  const [deckDesc, setDeckDesc] = useState("");
  const [deck, setDeck] = useState([]);

  //assigns useHistory hook to history variable.
  const history = useHistory();

  //accessing deck.id from params.
  const deckId = useParams().deckId;

  //fetching and sets the name, description and deck from API.
  useEffect(() => {
    async function read() {
      const response = readDeck(deckId);
      const deckFromAPI = await response;
      setDeckName(deckFromAPI.name);
      setDeckDesc(deckFromAPI.description);
      setDeck(deckFromAPI);
    }
    read();
  }, [deckId]);

  //user input changes deck name.
  const deckNameHandler = (event) => {
    setDeckName(event.target.value);
  };

  //uesr input changes deck description.
  const deckDescHandler = (event) => {
    setDeckDesc(event.target.value);
  };

  //uses updateDeck to change the name and description of the deck.id then resets url to deck screen.
  const submitHandler = (event) => {
    event.preventDefault();
    updateDeck({
      id: deckId,
      name: deckName,
      description: deckDesc,
    }).then((deck) => history.push(`/decks/${deck.id}`));
  };

  return (
    <>
      <NavBar deck={deck} />
      <div className="row">
        <div className="col">
          <h1>Edit Deck</h1>
        </div>
      </div>
      <form onSubmit={submitHandler}>
        <div className="row mt-2">
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
              placeholder={deck.name}
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
              placeholder={deck.description}
              value={deckDesc}
              onChange={deckDescHandler}
              className="form-control"
              rows="3"
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

export default EditDeck;
