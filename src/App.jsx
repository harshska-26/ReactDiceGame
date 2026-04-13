import "./App.css";
import { BottomLine } from "./components/Bottomline.Components/Bottomline.component";
import { TransparentButton } from "./components/Buttons.Components/Button.component";
import { ImageComp } from "./components/Playerline.Components/Image.component";
import { PlayerComp } from "./components/Playerline.Components/Player.component";
import { ScoreComp } from "./components/Score.Compnents/Score.component";
import { Topline } from "./components/Topline.Components/Topline.component";
import { ButtonGroup } from "./layouts/ButtonGroup.layout";
import { diceButtonsWithActions } from "./metadata/buttons.metadata";
// import { diceControlBtns } from "./metadata/buttons.metadata";

function App() {
  return (
    <>
      <div className="entirebox">
        <div>
          <Topline />
        </div>
        <div className="playerbar">
          <PlayerComp name="PLAYER ONE" />
          <ImageComp />
          <PlayerComp name="PLAYER TWO" />
        </div>
        <div className="scorebar">
          <ScoreComp />
          <div className="dicecontrols">
            <ButtonGroup dataset={diceButtonsWithActions} />
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
