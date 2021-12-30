import React, { useState } from "react";
import "./ScoreTracker.scss";
import Calculator from "./Calculator";
import ScoreIndicator from "./ScoreIndicator";

function ScoreTracker() {
  const [score, setScore] = useState(501);

  let updateScore = (val: number) => {
    setScore(score - val);
  };

  let resetScore = () => {
    let result = window.prompt("Enter new value", "501");
    if (result !== null) {
      let newValue: number = +result;
      if (typeof newValue === "number" && newValue <= 701 && newValue >= 0) {
        setScore(newValue);
      }
    }
  };

  return (
    <div className="scoreTrackerContainer">
      <ScoreIndicator score={score} resetScore={resetScore} />
      <Calculator updateScore={updateScore} />
    </div>
  );
}

export default ScoreTracker;
