import "./Player.component.css";

export const PlayerComp = ({ hardMode, activeplayer, name, totalscore }) => {
  let ActiveStat = activeplayer ? "playerBox active" : "playerBox";
  let HardmodeStat = activeplayer ? `player-name ${hardMode ? "hardmodeBox" : ""} active` : `player-name`;

  return (
    <div className={ActiveStat}>
      <h2 className={HardmodeStat}>{name}</h2>
      <p>{totalscore}</p>
    </div>
  );
};
