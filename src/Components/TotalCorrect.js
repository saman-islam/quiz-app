import React from 'react';
import '../App.css';
const TotalCorrect = (props) => {
    return <div className="Correct">
        <h3>Correct: {props.correct}</h3>
    </div>;
}
export default TotalCorrect;
