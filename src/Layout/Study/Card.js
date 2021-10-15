import React, { useState, useEffect } from "react";
import { useParams, useHistory, useRouteMatch } from "react-router-dom";

//import functions.
import { listCards } from "../../utils/api";

//import components.
import FlipButton from "./Buttons/FlipButton";
import NextButton from "./Buttons/NextButton";

//Card component.
const Card = () => {
  //sets all cards, current Card, which side of the card is displayed and id number.
  const [card, setCard] = useState({});
  const [currentCard, setCurrentCard] = useState("");
  const [cardFlip, setCardFlip] = useState("");
  const [count, setCount] = useState(1);

  //accesses deck.id from params.
  const deckId = useParams().deckId;
  //assigns useHistory hook to history variable.
  const history = useHistory();
  //assigns route URL.
  const url = useRouteMatch();

  // grans cards from API and sets all cards, currentCard and the front of current Card.
  useEffect(() => {
    async function list() {
      const response = listCards(deckId);
      const cardFromAPI = await response;
      // setCard(cardFromAPI);
      setCurrentCard(cardFromAPI[0]);
      setCardFlip(cardFromAPI[0].front);
    }
    list();
  }, [deckId]);

  //flips card when clicked.
  const clickHandler = () => {
    setCardFlip(currentCard.back);
  };

  //Next Button handler.
  const nextHandler = (event) => {
    //if the card is not the last card it advances the card.
    //else it prompts user before restting or reutnrs to homepage.
    if (count < card.length) {
      setCount((currentCount) => currentCount + 1);
      setCurrentCard(card[count]);
      setCardFlip(currentCard.front);
    } else {
      if (
        window.confirm(
          "Restart cards? Click 'cancel' to return to the home page."
        )
      ) {
        setCardFlip(currentCard.back);
        setCurrentCard(card[0]);
        setCount(1);
        history.push(url);
      } else {
        history.push("/");
      }
    }
  };

  //if the card is on the back it retuns this screen.
  if (cardFlip === currentCard.back) {
    return (
      <>
        <div className="row">
          <div className="col">
            <h2>
              Card {count} of {card.length}
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>{currentCard.back}</p>
          </div>
        </div>
        <div className="row">
          <div className="col col-1">
            <FlipButton clickHandler={clickHandler} />
          </div>
          <div className="col col-1">
            <NextButton nextHandler={nextHandler} />
          </div>
        </div>
      </>
    );
  } else {
    //else it returns this screen.
    return (
      <>
        <div className="row">
          <div className="col">
            <h2>
              Card {count} of {card.length}
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>{currentCard.front}</p>
          </div>
        </div>
        <div className="row">
          <div className="col col-1">
            <FlipButton clickHandler={clickHandler} />
          </div>
        </div>
      </>
    );
  }
};

export default Card;
