import React from "react";
import { Link } from "react-router-dom";

//imports icon.
import Home from "../../icons/Home";

//Navigation bar for Add Card.
const NavBar = ({ deck }) => {
  return (
    <p>
      <Link to="/">{Home} Home</Link> /{" "}
      <Link to={`/decks/${deck.id}`}>{deck.name}</Link> / Add Card
    </p>
  );
};

export default NavBar;
