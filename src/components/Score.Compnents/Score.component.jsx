// import { useState } from "react";
import "./Score.component.css";

export const ScoreComp = ({ CurrentScore }) => {
  return (
    <div className="score">
      <h2>CURRENT</h2>
      <h2>{CurrentScore}</h2>
    </div>
  );
};
