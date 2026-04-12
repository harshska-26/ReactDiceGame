import "./Player.component.css";
export const PlayerComp = ({ name }) => {
  return (
    <div className="playerBox">
      <h2>{name}</h2>
      <h2>0</h2>
    </div>
  );
};
