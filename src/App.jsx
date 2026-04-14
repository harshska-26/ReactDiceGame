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
// import { diceControlBtns } from "./metadata/buttons.metadata";

const App = () => {
  const [randomNumGen, SetrandomNumGen] = useState(1);
  const [CurrentScore, SetCurrentScore] = useState(0);
  const [playerTwoCS, setplayerTwoCS] = useState(0);
  const [activeplayer, Setactiveplayer] = useState(0);
  const [playeroneTS, SetplayeroneTS] = useState(0);
  const [playertwoTS, SetplayertwoTS] = useState(0);

  const RollDice = () => {
    const randomNum = Math.ceil(Math.random() * 6);
    console.log(randomNum);
    SetrandomNumGen(randomNum);

    if (randomNum === 1) {
      SetCurrentScore(0);
      setplayerTwoCS(0);
      Setactiveplayer(activeplayer === 0 ? 1 : 0);
    } else {
      if (activeplayer === 0) {
        SetCurrentScore((prev) => prev + randomNum);
      } else {
        setplayerTwoCS((prev) => prev + randomNum);
      }
    }
  };

  const HoldFunc = () => {
    if (activeplayer === 0) {
      SetplayeroneTS((prev) => prev + CurrentScore);
      SetCurrentScore(0);
      Setactiveplayer(1);
    } else {
      SetplayertwoTS((prev) => prev + playerTwoCS);
      setplayerTwoCS(0);
      Setactiveplayer(0);
    }
  };

  const funcObj = {
    rollDiceBtn: RollDice,
    holdBtn: HoldFunc,
  };

  return (
    <>
      <div className="entirebox">
        <div>
          <Topline />
        </div>
        <div className="playerbar">
          <PlayerComp totalscore={playeroneTS} name="PLAYER ONE" />
          <ImageComp Num={randomNumGen} />
          <PlayerComp totalscore={playertwoTS} name="PLAYER TWO" />
        </div>
        <div className="scorebar">
          <ScoreComp CurrentScore={CurrentScore} />
          <div className="dicecontrols">
            <ButtonGroup funcObj={funcObj} dataset={diceControlBtns} />
          </div>
          <ScoreComp CurrentScore={playerTwoCS} />
        </div>
        <div>
          <BottomLine />
        </div>
      </div>
    </>
  );
};

export default App;
