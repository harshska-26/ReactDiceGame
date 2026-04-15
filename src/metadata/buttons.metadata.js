import { FaDice, FaDiceFive, FaRegEdit } from "react-icons/fa";
import { FcRules } from "react-icons/fc";
import { GiAndroidMask } from "react-icons/gi";
import { SiAseprite } from "react-icons/si";

export const diceControlBtns = [
  {
    type: "Transparent",
    data: "ROLL DICE",
    id: "rollDiceBtn",
    icon: FaDice,
  },
  {
    type: "Transparent",
    data: "HOLD",
    id: "holdBtn",
    icon: FaDiceFive,
  },
];

export const modeControlBtns = [
  {
    type: "Primary",
    data: "NORMAL MODE",
    id: "normalModeBtn",
    icon: SiAseprite,
  },
  {
    type: "Secondary",
    data: "HARD MODE",
    id: "hardModeBtn",
    icon: GiAndroidMask,
  },
];

export const playerControlBtns = [
  {
    type: "Secondary",
    data: "RULES",
    id: "rulesModeBtn",
    icon: FcRules,
  },
  {
    type: "Primary",
    data: "EDIT PLAYER NAME",
    id: "editPlayerNameBtn",
    icon: FaRegEdit,
  },
];

// export const diceButtonsWithActions = diceControlBtns.map((btn) => {
//   if (btn.data === "ROLL DICE") {
//     return { ...btn, onClick: rollDice };
//   }
//   if (btn.data === "HOLD") {
//     return { ...btn, onClick: holdScore };
//   }
//   return btn;
// });

// export const playerControlsWithActions = playerControlBtns.map((btn) => {
//   if (btn.data === "ROLL DICE") {
//     return { ...btn, onClick: rollDice };
//   }
//   if (btn.data === "HOLD") {
//     return { ...btn, onClick: holdScore };
//   }
//   return btn;
// });

// export const modeControlsWithActions = modeControlBtns.map((btn) => {
//   if (btn.data === "NORMAL MODE") {
//     return { ...btn, onClick: rollDice };
//   }
//   if (btn.data === "HARD MODE") {
//     return { ...btn, onClick: holdScore };
//   }
//   return btn;
// });
