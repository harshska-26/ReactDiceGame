import "./Player.component.css";
export const PlayerComp = ({ name, totalscore }) => {
  return (
    <div className="playerBox">
      <h2>{name}</h2>
      <h2>{totalscore}</h2>
    </div>
  );
};
