import React, {useState} from "react";
import './ScoreIndicator.scss';

type IScoreIndicatorProps = {
    score: number,
    resetScore: Function
}

function ScoreIndicator(props: IScoreIndicatorProps) {
    return (
        <div className="scoreIndicatorContainer">
            <p className="scoreIndicator" onClick={() => props.resetScore()}>{props.score}</p>
        </div>
    )
}

export default ScoreIndicator;