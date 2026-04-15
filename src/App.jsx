import { useState } from "react";
import "./App.css";
import { BottomLine } from "./components/Bottomline.Components/Bottomline.component";
import { TransparentButton } from "./components/Buttons.Components/Button.component";
import { ImageComp } from "./components/Playerline.Components/Image.component";
import { PlayerComp } from "./components/Playerline.Components/Player.component";
import { ScoreComp } from "./components/Score.Compnents/Score.component";
import { Topline } from "./components/Topline.Components/Topline.component";
import { ButtonGroup } from "./layouts/ButtonGroup.layout";
import { diceControlBtns } from "./metadata/buttons.metadata";
import { EditPlyrComp, Popup } from "./layouts/Popup.layout";

const App = () => {
  const [randomNumbers, SetrandomNumbers] = useState([1, 1]);
  const [CurrentScore, SetCurrentScore] = useState(0);
  const [activeplayer, Setactiveplayer] = useState(0);
  const [totalScore, SettotalScore] = useState([0, 0]);
  const [WinningScore, SetWinningScore] = useState(50);
  const [rulesOpen, setRulesOpen] = useState(false);
  const [epOpen, setepOpen] = useState(false);
  const [playerNames, SetplayerNames] = useState(["PLAYER ONE", "PLAYER TWO"]);

  const RollDice = () => {
    const randomNumone = Math.ceil(Math.random() * 6);
    const randomNumtwo = Math.ceil(Math.random() * 6);
    const randomNum = randomNumone + randomNumtwo;
    SetrandomNumbers([randomNumone, randomNumtwo]);
    if (randomNumone === 1 || randomNumtwo === 1) {
      SetCurrentScore(0);
      Setactiveplayer(activeplayer === 0 ? 1 : 0);
    } else {
      SetCurrentScore((prev) => prev + randomNum);
    }
  };

  const HoldFunc = () => {
    const updatedScores = [...totalScore];
    activeplayer === 0
      ? (updatedScores[0] += CurrentScore)
      : (updatedScores[1] += CurrentScore);
    SettotalScore(updatedScores);
    SetCurrentScore(0);
    activeplayer === 0 ? Setactiveplayer(1) : Setactiveplayer(0);
  };

  const InputFunc = (e) => {
    console.log(`Winning Score Set to ${e.target.value}`);
    SetWinningScore(e.target.value);
  };

  const RulesDialogFunc = () => {
    console.log(rulesOpen);
    rulesOpen ? setRulesOpen(false) : setRulesOpen(true);
  };

  const Epfunc = () => {
    console.log(rulesOpen);
    epOpen ? setepOpen(false) : setepOpen(true);
  };

  const EditplayerFunc = (e) => {
    SetplayerNames(e.target.value);
  };

  const funcObj = {
    rollDiceBtn: RollDice,
    holdBtn: HoldFunc,
    rulesModeBtn: RulesDialogFunc,
    editPlayerNameBtn: Epfunc,
  };

  let ActiveBg = activeplayer ? "entirebox bgOne" : "entirebox bgTwo";

  return (
    <>
      <div className={ActiveBg}>
        <div>
          <Topline />
        </div>
        <div className="playerbar">
          <PlayerComp
            activeplayer={activeplayer === 0}
            totalscore={totalScore[0]}
            name={playerNames[0]}
          />
          <ImageComp randomNums={randomNumbers} />
          <PlayerComp
            activeplayer={activeplayer === 1}
            totalscore={totalScore[1]}
            name={playerNames[1]}
          />
        </div>
        <div className="scorebar">
          <ScoreComp CurrentScore={activeplayer === 0 ? CurrentScore : 0} />
          <div className="dicecontrols">
            <ButtonGroup funcObj={funcObj} dataset={diceControlBtns} />
          </div>
          <ScoreComp CurrentScore={activeplayer === 1 ? CurrentScore : 0} />
        </div>
        <BottomLine funcObj={funcObj} onChange={InputFunc} />
        {rulesOpen && <Popup />}
        {epOpen && <EditPlyrComp />}
      </div>
    </>
  );
};

export default App;
