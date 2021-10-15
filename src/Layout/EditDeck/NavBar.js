import React from "react";
import { Link } from "react-router-dom";

//imports home icon.
import Home from "../../icons/Home";

// Navigation Bar component for Edit Deck screen.
const NavBar = ({ deck }) => {
  return (
    <p>
      <Link to="/">{Home} Home </Link> /{" "}
      <Link to={`/decks/${deck.id}`}> {deck.name} </Link> / Edit Deck
    </p>
  );
};

export default NavBar;
