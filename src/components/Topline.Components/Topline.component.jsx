import { MdOutlineWifiProtectedSetup } from "react-icons/md";
import { Button } from "../Buttons.Components/Button.component";
import { PrimaryButton } from "../Buttons.Components/Button.component";
import "./Topline.component.css";
import { gameControlBtns } from "../../metadata/buttons.metadata";
import { ButtonGroup } from "../../layouts/ButtonGroup.layout";

export const Topline = ({ funcObj }) => {
  return (
    <div className="header">
      <ButtonGroup funcObj={funcObj} dataset={gameControlBtns} />
    </div>
  );
};
