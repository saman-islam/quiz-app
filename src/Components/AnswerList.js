import React from 'react';
import '../App.css';
import Answers from'./Answers';


const AnswerList = (props) => {
    const options = [];
    for(let i=0; i<props.DataSet.options.length; i++){
        options.push(<Answers choice={i} click={props.click} answers={props.DataSet.options[i]}/>);
    }
    return <div>
        {options}
        
    </div>;
}



export default AnswerList;