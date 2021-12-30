import React from "react";
import "./Calculator.scss";

const data = [
  { key: "25", value: 25 },
  { key: "50", value: 50 },
  { key: "x2", value: "double" },
  { key: "x3", value: "triple" },
  { key: "1", value: 1 },
  { key: "2", value: 2 },
  { key: "3", value: 3 },
  { key: "4", value: 4 },
  { key: "5", value: 5 },
  { key: "6", value: 6 },
  { key: "7", value: 7 },
  { key: "8", value: 8 },
  { key: "9", value: 9 },
  { key: "10", value: 10 },
  { key: "11", value: 11 },
  { key: "12", value: 12 },
  { key: "13", value: 13 },
  { key: "14", value: 14 },
  { key: "15", value: 15 },
  { key: "16", value: 16 },
  { key: "17", value: 17 },
  { key: "18", value: 18 },
  { key: "19", value: 19 },
  { key: "20", value: 20 },
];

type ICalculator = {
    updateScore: Function
}

function Calculator(props: ICalculator) {
  return (
    <div className="calculatorContainer">
      <div className="calculatorGrid">
        {data.map((x) => {
          return (
            <div
              className="calculatorGridItem"
              onClick={() => props.updateScore(x.value)}
            >
              {x.key}
            </div>
          );
        })}
      </div>
      <div className="calculatorControlsRow">
        <div className="calculatorButton">Undo</div>
        <div className="calculatorButton">Miss</div>
      </div>
    </div>
  );
}

export default Calculator;
