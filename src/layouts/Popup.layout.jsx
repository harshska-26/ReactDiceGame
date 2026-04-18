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
        <h3>first Rule</h3>
        <h3>Second Rule</h3>
        <h3>Third Rule</h3>
        <h3>fourth Rule</h3>
        <h3>fifth Rule</h3>
        <button className="close-button" onClick={closeRules}>
          Close
        </button>
      </div>
    </div>
  );
};

export const EditPlyrComp = ({ onChange, onClose }) => {
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
      </div>
    </div>
  );
};
