import { holdScore } from "../utils/Hold.util";
import { rollDice } from "../utils/Rolldice.util";

export const diceControlBtns = [
  {
    type: "Transparent",
    data: "ROLL DICE",
    onClick: rollDice,
  },
  {
    type: "Transparent",
    data: "HOLD",
  },
];

export const modeControlBtns = [
  {
    type: "Primary",
    data: "NORMAL MODE",
  },
  {
    type: "Secondary",
    data: "HARD MODE",
  },
];

export const playerControlBtns = [
  {
    type: "Secondary",
    data: "RULES MODE",
  },
  {
    type: "Primary",
    data: "EDIT PLAYER NAME",
  },
];

export const diceButtonsWithActions = diceControlBtns.map((btn) => {
  if (btn.data === "ROLL DICE") {
    return { ...btn, onClick: rollDice };
  }
  if (btn.data === "HOLD") {
    return { ...btn, onClick: holdScore };
  }
  return btn;
});

export const playerControlsWithActions = playerControlBtns.map((btn) => {
  if (btn.data === "ROLL DICE") {
    return { ...btn, onClick: rollDice };
  }
  if (btn.data === "HOLD") {
    return { ...btn, onClick: holdScore };
  }
  return btn;
});

export const modeControlsWithActions = modeControlBtns.map((btn) => {
  if (btn.data === "NORMAL MODE") {
    return { ...btn, onClick: rollDice };
  }
  if (btn.data === "HARD MODE") {
    return { ...btn, onClick: holdScore };
  }
  return btn;
});
