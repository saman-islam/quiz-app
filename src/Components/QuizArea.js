import React from 'react';
import '../App.css';
import Question from './Question';
import AnswerList from'./AnswerList';
import UserGreetings from'./UserGreetings';
const QuizArea = (props) => {
    const refreshPage = ()=>{
        window.location.reload();
     }
    
    if (props.isFinished) {
        return <div>
        <UserGreetings/>
        <button className="restartButton" onClick={refreshPage}>Start Quiz Again</button>
        </div>
            
    
    }
    return <div className="QuizArea">
       
        <Question DataSet={props.DataSet}/>
        <AnswerList click={props.click}
        DataSet={props.DataSet}/>
      
    </div>;
}

export default QuizArea;