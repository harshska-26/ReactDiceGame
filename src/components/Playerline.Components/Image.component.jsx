import dice1 from "../../assets/dice-1.png";
import dice2 from "../../assets/dice-2.png";

export const ImageComp = () => {
  return (
    <>
      <div className="diceSpace">
        <img src={dice1} alt="dice" className="dice-image" />
        <img src={dice2} alt="dicetwo" className="dice-image" />
      </div>
    </>
  );
};
