import React from "react";
import { Link } from "react-router-dom";

//imports Home icon.
import Home from "../../icons/Home";

//Navigation Bar component for Edit Card screen.
const NavBar = ({ deck, card }) => {
  return (
    <p>
      <Link to="/">{Home} Home</Link> /{" "}
      <Link to={`/decks/${deck.id}`}> Deck {deck.name} </Link> / Edit Card{" "}
      {card}
    </p>
  );
};

export default NavBar;
