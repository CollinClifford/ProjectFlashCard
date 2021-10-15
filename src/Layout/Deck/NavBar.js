import React from "react";
import { Link } from "react-router-dom";

//imports Home icon.
import Home from "../../icons/Home";

//Navigation Bar component for Deck Screen.
const NavBar = ({ deck }) => {
  return (
    <div className="row">
      <div className="col">
        <p>
          <Link to="/">{Home} Home</Link> / {deck.name}
        </p>
      </div>
    </div>
  );
};

export default NavBar;
