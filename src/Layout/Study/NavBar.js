import React from "react";
import { Link } from "react-router-dom";

//imports Home icon.
import Home from "../../icons/Home";

//Navigation Bar component for Study screen.
const NavBar = ({ deck }) => {
  return (
      <p>
        <Link to="/">{Home} Home</Link> /
        <Link to={`/decks/${deck.id}`}> {deck.name} </Link> / Study
      </p>
  );
};

export default NavBar;
