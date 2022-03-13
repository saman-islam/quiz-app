import React from 'react';
import '../App.css';
import TotalCorrect from './TotalCorrect';
import TotalIncorrect from './TotalIncorrect';

const ScoreArea = (props) => {
    return <div className="ScoreArea">
        
        <TotalCorrect correct = {props.correct}/>
        <TotalIncorrect incorrect = {props.incorrect}/>
    </div>;
}
export default ScoreArea;