import React from 'react';
import '../App.css';
const Question = (props) => {
    return <div>
        <h1 className="Question">{props.DataSet.question}</h1>
    </div>;
}

export default Question;