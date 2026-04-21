import { ButtonGroup } from "../../layouts/ButtonGroup.layout";
import {
  modeControlBtns,
  playerControlBtns,
} from "../../metadata/buttons.metadata";
import "./Bottomline.component.css";

export const BottomLine = ({ funcObj, onChange }) => {
  return (
    <div className="bottom-line">
      <ButtonGroup funcObj={funcObj} dataset={modeControlBtns} />
      <input
        onChange={onChange}
        id="input"
        type="number"
        placeholder="FINAL SCORE"
      />
      <ButtonGroup funcObj={funcObj} dataset={playerControlBtns} />
    </div>
  );
};
