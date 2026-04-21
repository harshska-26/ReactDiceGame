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
  const [hardMode, setHardMode] = useState(false)
  const [lastRollSix, setlastRollSix] = useState(false)

  const newGameFunc = () => {
    SetCurrentScore(0);
    SettotalScore([0, 0]);
    SetplayerNames(["PLAYER ONE", "PLAYER TWO"]);
    SetrandomNumbers([1, 1]);
    Setactiveplayer(0);
  };

  const hardModeFunc = () => {
    const updatedPlayerNames = [...playerNames]
      SetplayerNames(updatedPlayerNames)
    setHardMode(!hardMode)
    newGameFunc();
  }

  const RollDice = () => {
    const randomNumone = Math.ceil(Math.random() * 6);
    const randomNumtwo = Math.ceil(Math.random() * 6);
    const randomNum = randomNumone + randomNumtwo;
    SetrandomNumbers([randomNumone, randomNumtwo]);
      if (hardMode) {
        if (randomNumone === 6 || randomNumtwo === 6) {
          if (lastRollSix === true) {
            SettotalScore((prev) => {
              const newScore = [...prev];
              newScore[activeplayer] = Math.max(0, newScore[activeplayer] - 10);
              return newScore;
            });
            SetCurrentScore(0)
            Setactiveplayer(activeplayer === 0 ? 1 : 0)
            setlastRollSix(false);
          } else {
            setlastRollSix(true)
            SetCurrentScore((prev) => prev + randomNum)
          }
        } else {
          if (randomNumone === 1 || randomNumtwo === 1) {
            SetCurrentScore(0);
            Setactiveplayer(activeplayer === 0 ? 1 : 0);
          }
          else {
            setlastRollSix(false);
            SetCurrentScore((prev) => prev + randomNum)
          }
        }
      } else {
        if (randomNumone === 1 || randomNumtwo === 1) {
          SetCurrentScore(0);
          Setactiveplayer(activeplayer === 0 ? 1 : 0);
          setlastRollSix(false);
        } else {
          SetCurrentScore((prev) => prev + randomNum);
          setlastRollSix(false);
        }
      }
    }
  


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
      setRulesOpen(!rulesOpen);
    };

    const Epfunc = () => {
      SetplayerNames(["PLAYER ONE", "PLAYER TWO"])
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
      const updatedPlayerNames = [...playerNames]
      SetplayerNames(updatedPlayerNames)
      setepOpen(false)
    }

    const funcObj = {
      rollDiceBtn: RollDice,
      holdBtn: HoldFunc,
      rulesModeBtn: RulesDialogFunc,
      editPlayerNameBtn: Epfunc,
      hardModeBtn: hardModeFunc,
    };

    let ActiveBg = activeplayer ? "sideone" : "sideone bgOne";
    let ActiveBgtwo = activeplayer ? "sideone bgOne" : "sideone";
    let UiChange = hardMode ? "root bodyBG" : "root";


    return (
      <div className={UiChange}>
        <div className="entirebox">
          <div className={ActiveBg}>
            <PlayerComp
              activeplayer={activeplayer === 0}
              totalscore={totalScore[0]}
              name={playerNames[0]}
            />
            <ScoreComp CurrentScore={activeplayer === 0 ? CurrentScore : 0} />
          </div>
          <div className={ActiveBgtwo}>
            <PlayerComp
              activeplayer={activeplayer === 1}
              totalscore={totalScore[1]}
              name={playerNames[1]}
            />
            <ScoreComp CurrentScore={activeplayer === 1 ? CurrentScore : 0} />
          </div>
          <Topline onClick={newGameFunc} />
          <ImageComp randomNums={randomNumbers} />
          <div className="dicecontrols">
            <ButtonGroup funcObj={funcObj} dataset={diceControlBtns} />
          </div>
          <BottomLine funcObj={funcObj} onChange={InputFunc} />
          {rulesOpen && <Popup closeRules={RulesDialogFunc} />}
          {epOpen && <EditPlyrComp onEnter={epEnterFunc} onChange={EditplayerFunc} onClose={Epfunc} />}
        </div>
      </div>
    );
  };

  export default App;
