import "./Player.component.css";

export const PlayerComp = ({ activeplayer, name, totalscore }) => {
  let ActiveStat = activeplayer ? "playerBox active" : "playerBox";

  return (
    <div className={ActiveStat}>
      <h2 className="player-name">{name}</h2>
      <p>{totalscore}</p>
    </div>
  );
};
