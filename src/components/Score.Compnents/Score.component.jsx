// import { useState } from "react";
import "./Score.component.css";

export const ScoreComp = ({ CurrentScore }) => {
  return (
    <div className="score">
      <h2>CURRENT</h2>
      <p>{CurrentScore}</p>
    </div>
  );
};
