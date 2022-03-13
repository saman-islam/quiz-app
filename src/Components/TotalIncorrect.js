import React from 'react';
import '../App.css';
const TotalIncorrect = (props) => {
    return <div className="Incorrect">
        <h3>Incorrect: {props.incorrect}</h3>
    </div>;
}
export default TotalIncorrect;