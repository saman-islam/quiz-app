import React from 'react';
import '../App.css';
const Answers = (props) => {
    return <div>
        <button type="button" className="btnAnswer" onClick={()=>props.click(props.choice)}>{props.answers}</button>
    </div>;
}

export default Answers;