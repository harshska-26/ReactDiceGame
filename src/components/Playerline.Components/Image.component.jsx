export const ImageComp = ({ randomNums }) => {
  return (
    <div className="diceSpace">
      <img
        src={`/src/assets/dice-${randomNums[0]}.png`}
        alt={`dice ${randomNums[0]}`}
        className="dice-image"
      />
      <img
        src={`/src/assets/dice-${randomNums[1]}.png`}
        alt={`dice ${randomNums[1]}`}
        className="dice-image"
      />
    </div>
  );
};
