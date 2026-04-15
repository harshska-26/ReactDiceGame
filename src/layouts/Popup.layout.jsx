import { useState } from "react";
import "../layouts/Popup.layout.css";

export const Popup = () => {
  const [showRules, setShowRules] = useState(false);

  if (showRules) {
    return null;
  }

  const closefunc = () => {
    console.log(showRules);
    setShowRules(true);
  };

  return (
    <div className="overlay">
      <div className="RulesDialog">
        <h1 align="center">RULES</h1>
        <h3>first Rule</h3>
        <h3>Second Rule</h3>
        <h3>Third Rule</h3>
        <h3>fourth Rule</h3>
        <h3>fifth Rule</h3>
        <button className="close-button" onClick={closefunc}>
          Close
        </button>
      </div>
    </div>
  );
};

export const EditPlyrComp = () => {
  return (
    <div className="RulesDialog">
      <h3>
        <strong>Enter Player 1 Name:</strong>
      </h3>
      <input type="text" placeholder="Hii! Player1"></input>
      <h3>
        <strong>Enter Player 2 Name:</strong>
      </h3>
      <input type="text" placeholder="Hii! Player2"></input>
    </div>
  );
};
