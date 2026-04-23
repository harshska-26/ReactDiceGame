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
import {
  EditPlyrComp,
  HardmodePopup,
  Popup,
  WinnerPopup,
} from "./layouts/Popup.layout";

const App = () => {
  const [randomNumbers, SetrandomNumbers] = useState([1, 1]);
  const [start, setStart] = useState(false);
  const [CurrentScore, SetCurrentScore] = useState(0);
  const [activeplayer, Setactiveplayer] = useState(0);
  const [totalScore, SettotalScore] = useState([0, 0]);
  const [WinningScore, SetWinningScore] = useState(50);
  const [rulesOpen, setRulesOpen] = useState(false);
  const [epOpen, setepOpen] = useState(false);
  const [playerNames, SetplayerNames] = useState(["PLAYER ONE", "PLAYER TWO"]);
  const [hardMode, setHardMode] = useState(false);
  const [lastRollSix, setlastRollSix] = useState(false);
  const [win, Setwin] = useState(false);

  const newGameFunc = () => {
    SetCurrentScore(0);
    SettotalScore([0, 0]);
    SetplayerNames(["PLAYER ONE", "PLAYER TWO"]);
    SetrandomNumbers([1, 1]);
    Setactiveplayer(0);
    setStart(false);
  };

  const startGameFunc = () => {
    setStart(!start);
  };

  const winFunc = () => {
    Setwin(true);
    setStart(false);
  };

  const hardModeFunc = () => {
    const updatedPlayerNames = [...playerNames];
    SetplayerNames(updatedPlayerNames);
    setHardMode(!hardMode);
    newGameFunc();
  };

  const nrmlModeFunc = () => {
    const updatedPlayerNames = [...playerNames];
    SetplayerNames(updatedPlayerNames);
    setHardMode(!hardMode);
    newGameFunc();
  };

  const resetTurn = () => {
    SetCurrentScore(0);
    setlastRollSix(false);
    Setactiveplayer((prev) => (prev === 0 ? 1 : 0));
  };

  const RollDice = () => {
    const randomNumOne = Math.ceil(Math.random() * 6);
    const randomNumTwo = Math.ceil(Math.random() * 6);
    const total = randomNumOne + randomNumTwo;
    const hasSix = randomNumOne === 6 || randomNumTwo === 6;
    const hasOne = randomNumOne === 1 || randomNumTwo === 1;

    SetrandomNumbers([randomNumOne, randomNumTwo]);

    if (hardMode && hasSix && lastRollSix) {
      SettotalScore((prev) => {
        const newScore = [...prev];
        newScore[activeplayer] = Math.max(0, newScore[activeplayer] - 20);
        return newScore;
      });
      return resetTurn();
    }

    if (hasOne) {
      return resetTurn();
    }

    SetCurrentScore((prev) => prev + total);
    setlastRollSix(hardMode && hasSix);
  };

  const HoldFunc = () => {
    const updatedScores = [...totalScore];
    activeplayer === 0
      ? (updatedScores[0] += CurrentScore)
      : (updatedScores[1] += CurrentScore);
    SettotalScore(updatedScores);
    updatedScores[activeplayer] >= WinningScore && winFunc();
    SetCurrentScore(0);
    activeplayer === 0 ? Setactiveplayer(1) : Setactiveplayer(0);
  };

  const InputFunc = (e) => {
    console.log(`Winning Score Set to ${e.target.value}`);
    SetWinningScore(e.target.value);
  };

  const RulesDialogFunc = () => {
    setRulesOpen(!rulesOpen);
  };

  const Epfunc = () => {
    SetplayerNames(["PLAYER ONE", "PLAYER TWO"]);
    setepOpen(!epOpen);
  };

  const EditplayerFunc = (e) => {
    let targetedElement = e.target;
    if (targetedElement.id === "inputone") {
      SetplayerNames([targetedElement.value, playerNames[1]]);
    } else {
      SetplayerNames([playerNames[0], targetedElement.value]);
    }
  };

  const epEnterFunc = () => {
    const updatedPlayerNames = [...playerNames];
    SetplayerNames(updatedPlayerNames);
    setepOpen(false);
  };

  const funcObj = {
    newGameBtn: newGameFunc,
    startGameBtn: startGameFunc,
    rollDiceBtn: RollDice,
    holdBtn: HoldFunc,
    rulesModeBtn: RulesDialogFunc,
    editPlayerNameBtn: Epfunc,
    hardModeBtn: hardModeFunc,
    normalModeBtn: nrmlModeFunc,
  };

  let ActiveBg = `sideone ${activeplayer === 0 ? (hardMode ? "hardmode" : "bgOne") : ""}`;
  let ActiveBgtwo = `sideone ${activeplayer === 1 ? (hardMode ? "hardmode" : "bgOne") : ""}`;
  let UiChange = hardMode ? "root bodyBG" : "root";

  return (
    <div className={UiChange}>
      <div className="entirebox">
        <div className={ActiveBg}>
          <PlayerComp
            hardMode={hardMode}
            activeplayer={activeplayer === 0}
            totalscore={totalScore[0]}
            name={playerNames[0]}
          />
          <ScoreComp CurrentScore={activeplayer === 0 ? CurrentScore : 0} />
        </div>
        <div className={ActiveBgtwo}>
          <PlayerComp
            hardMode={hardMode}
            activeplayer={activeplayer === 1}
            totalscore={totalScore[1]}
            name={playerNames[1]}
          />
          <ScoreComp CurrentScore={activeplayer === 1 ? CurrentScore : 0} />
        </div>
        <Topline funcObj={funcObj} />
        {start && <ImageComp randomNums={randomNumbers} />}
        <div className="dicecontrols">
          {start && <ButtonGroup funcObj={funcObj} dataset={diceControlBtns} />}
        </div>
        <BottomLine funcObj={funcObj} onChange={InputFunc} />
        {!hardMode && rulesOpen && <Popup closeRules={RulesDialogFunc} />}
        {hardMode && rulesOpen && (
          <HardmodePopup closeRules={RulesDialogFunc} />
        )}
        {epOpen && (
          <EditPlyrComp
            onEnter={epEnterFunc}
            onChange={EditplayerFunc}
            onClose={Epfunc}
          />
        )}
        {win && (
          <WinnerPopup
            winnerName={playerNames[activeplayer === 0 ? 1 : 0]}
            closeRules={() => {Setwin(false);
              newGameFunc()}}
          />
        )}
      </div>
    </div>
  );
};

export default App;
