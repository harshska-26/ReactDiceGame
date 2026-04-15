import { MdOutlineWifiProtectedSetup } from "react-icons/md";
import { Button } from "../Buttons.Components/Button.component";
import { PrimaryButton } from "../Buttons.Components/Button.component";
import "./Topline.component.css";

export const Topline = () => {
  return (
    <div className="header">
      <Button
        type="Transparent"
        data="NEW GAME"
        icon={MdOutlineWifiProtectedSetup}
      />
    </div>
  );
};
