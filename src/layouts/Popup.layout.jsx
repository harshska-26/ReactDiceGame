import { FcRules } from "react-icons/fc";
import "../layouts/Popup.layout.css";

export const Popup = ({ closeRules }) => {
  return (
    <div className="overlay">
      <div className="Dialog" align="center">
        <h1 align="center">
          <strong>
            <FcRules />
            RULES
          </strong>
        </h1>
        <ol>
          <li>The game has 2 players,playing in rounds.</li>
          <li>
            In each turn,a player rolls a dice as many times as he whishes. Each
            result get added to his ROUND score.
          </li>
          <li>
            BUT, if the player rolls a 1, all from his Round score gets
            lost.After that, it's the next player's turn.
          </li>
          <li>
            The player can choose to "HOLD", which means that his ROUND score
            gets added to his GLOBAL score. After that, it's the next player's
            turn.
          </li>
          <li>
            The first player to reach 50 points GLOBAL score wins the game.
          </li>
          <li>
            you can change the predefined score of 50 in the "Set Target Score"
            input box "GOOD LUCK BUDDY !!!"
          </li>
        </ol>
        <button className="close-button" onClick={closeRules}>
          Close
        </button>
      </div>
    </div>
  );
};

export const HardmodePopup = ({ closeRules }) => {
  return (
    <div className="overlay">
      <div className="Dialog" align="center">
        <h1 align="center">
          <strong>
            <FcRules />
            RULES
          </strong>
        </h1>
        <li>Including the rules before here are some New Rules.</li>
        <li>
          Player looses 20 points his ENTIRE score when he rolls a 6 in a row.
          After that, it's the next player's turn.
        </li>
        <li>
          The Global score is increased to 100 points.so first player reaching
          GLOBAL score wins the game.
        </li>
        <li>
          Another dice is added to make the game faster to reach GLOBAL SCORE
          and interesting.GOOD LUCK BUDDY !!!
        </li>
        <button className="close-button" onClick={closeRules}>
          Close
        </button>
      </div>
    </div>
  );
};

export const EditPlyrComp = ({ onChange, onClose, onEnter }) => {
  return (
    <div className="overlay">
      <div className="Dialog" align="center">
        <h3>
          <b>Enter Player 1 Name:</b>
        </h3>
        <input
          id="inputone"
          type="text"
          onChange={onChange}
          placeholder="Hii! Player1"
        ></input>
        <h3>
          <strong>Enter Player 2 Name:</strong>
        </h3>
        <input
          id="inputtwo"
          onChange={onChange}
          type="text"
          placeholder="Hii! Player2"
        ></input>
        <br />
        <br />
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <button className="close-button" onClick={onEnter}>
          Enter
        </button>
      </div>
    </div>
  );
};
