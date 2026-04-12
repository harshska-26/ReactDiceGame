import "./App.css";
import { BottomLine } from "./components/Bottomline.Components/Bottomline.component";
import { TransparentButton } from "./components/Buttons.Components/Button.component";
import { PlayerComp } from "./components/Playerline.Components/Player.component";
import { ScoreComp } from "./components/Score.Compnents/Score.component";
import { Topline } from "./components/Topline.Components/Topline";
import { ButtonGroup } from "./layouts/ButtonGroup.layout";
import { diceControlBtns } from "./metadata/buttons.metadata";

function App() {
  return (
    <>
      <div className="entirebox">
        <div>
          <Topline />
        </div>
        <div className="playerbar">
          <PlayerComp name="PLAYER ONE" />
          <PlayerComp name="PLAYER TWO" />
        </div>
        <div className="scorebar">
          <ScoreComp />
          <div className="dicecontrols">
            <ButtonGroup dataset={diceControlBtns} />
          </div>
          <ScoreComp />
        </div>
        <div>
          <BottomLine />
        </div>
      </div>
    </>
  );
}

export default App;
