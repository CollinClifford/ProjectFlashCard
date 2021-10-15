import React from "react";
import { Route, Switch } from "react-router-dom";

//imports components.
import Header from "./Header";
import HomePage from "./Home/HomePage";
import CreateDeck from "./CreateDeck/CreateDeck";
import Deck from "./Deck/Deck";
import Study from "./Study/Study";
import EditDeck from "./EditDeck/EditDeck";
import AddCard from "./AddCard/AddCard";
import EditCard from "./EditCard/EditCard";
import NotFound from "./NotFound";

//switches between routes with user paths.
function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/decks/new">
            <CreateDeck />
          </Route>

          <Route exact path="/decks/:deckId">
            <Deck />
          </Route>

          <Route exact path="/decks/:deckId/study">
            <Study />
          </Route>

          <Route exact path="/decks/:deckId/edit">
            <EditDeck />
          </Route>

          <Route exact path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>

          <Route exact path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
