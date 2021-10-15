import React from "react";
import { Link } from "react-router-dom";

//imports Home icon.
import Home from "../../icons/Home";

//Navigation Bar component for Create Deck component.
const NavBar = () => {
  return (
    <p>
      <Link to="/"> {Home} Home</Link> / Create Deck,
    </p>
  );
};

export default NavBar;
