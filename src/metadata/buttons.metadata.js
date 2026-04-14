export const diceControlBtns = [
  {
    type: "Transparent",
    data: "ROLL DICE",
    id: "rollDiceBtn",
  },
  {
    type: "Transparent",
    data: "HOLD",
    id: "holdBtn",
  },
];

export const modeControlBtns = [
  {
    type: "Primary",
    data: "NORMAL MODE",
    id: "normalModeBtn",
  },
  {
    type: "Secondary",
    data: "HARD MODE",
    id: "hardModeBtn",
  },
];

export const playerControlBtns = [
  {
    type: "Secondary",
    data: "RULES MODE",
    id: "rulesModeBtn",
  },
  {
    type: "Primary",
    data: "EDIT PLAYER NAME",
    id: "editPlayerNameBtn",
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
