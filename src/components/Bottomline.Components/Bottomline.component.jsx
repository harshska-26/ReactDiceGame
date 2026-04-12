import { ButtonGroup } from "../../layouts/ButtonGroup.layout";
import {
  modeControlBtns,
  playerControlBtns,
} from "../../metadata/buttons.metadata";
import "./Bottomline.component.css";

export const BottomLine = () => {
  return (
    <div className="bottom-line">
      <ButtonGroup dataset={modeControlBtns} />
      <input id="input" type="number" placeholder="Final Score" />
      <ButtonGroup dataset={playerControlBtns} />
    </div>
  );
};
