import React, { useState, useEffect } from "react";
import "./ScoreTracker.scss";
import Calculator from "./Calculator";
import ScoreIndicator from "./ScoreIndicator";
import e from "express";

function ScoreTracker() {
  const [score, setScore] = useState(501);
  const [turnScore, setTurnScore] = useState(0);
  const [turnCounter, setTurnCounter] = useState(0);

  let double = false;
  let triple = false;

  let updateScore = (val: any) => {
    if (val == "double") {
      double = true;
    } else if (val == "triple") {
      triple = true;
    } else {
      let num = val;
      if (double) {
        num = num * 2;
        double = false;
      }
      if (triple) {
        num = num * 3;
        triple = false;
      }
      setTurnScore(turnScore + num);
      setTurnCounter(turnCounter + 1);
    }
  };

  useEffect(() => {
    if (turnCounter >= 3) {
      setScore(score - turnScore);
      setTurnCounter(0);
      setTurnScore(0);
    }
  }, [turnCounter]);

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
      <ScoreIndicator
        turnScore={turnScore}
        score={score}
        resetScore={resetScore}
      />
      <Calculator updateScore={updateScore} />
    </div>
  );
}

export default ScoreTracker;
