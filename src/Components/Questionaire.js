import React from 'react';
import '../App.css';
import DataSet from'../Data/DataSet';
import QuizArea from './QuizArea';
import ScoreArea from './ScoreArea';

class Questionaire extends React.Component {
    constructor(){
        super();
        this.state = {
            current: 0,
            DataSet: DataSet,
            correct: 0,
            incorrect: 0,
            isFinished: false
        }
        this.click = this.click.bind(this);
    }

    click(choice){
        if(choice === this.state.DataSet[this.state.current].correct){
            this.setState({correct: this.state.correct+1})
        }else{
            this.setState({incorrect: this.state.incorrect+1})
        }
        if(this.state.current===  this.state.DataSet.length - 1){
            this.setState({isFinished:true})
        }else{
            this.setState({current: this.state.current + 1})
        }
    }

    render() {
        return <div className="Questionaire">
            <QuizArea click= {this.click}
            isFinished={this.state.isFinished} 
            DataSet={this.state.DataSet[this.state.current]} />
            <ScoreArea correct={this.state.correct} incorrect={this.state.incorrect}/>

        </div>;
    }
}


export default Questionaire;