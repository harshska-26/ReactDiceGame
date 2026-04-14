export const ImageComp = ({ Num }) => {
  return (
    <div className="diceSpace">
      <img
        src={`/src/assets/dice-${Num}.png`}
        alt={`dice ${Num}`}
        className="dice-image"
      />
    </div>
  );
};
