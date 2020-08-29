import React from 'react';
import Question from './Question/Question';

import classes from './Questions.module.css';

//This component takes array of question as props named: questionsArray
const Questions = (props) => {
    const questionSets = props.questionArray.map((ques, idx) => {
        return (<Question key={idx} id={idx} questionText={ques} sq={props.singleQuestion} deleteQuestion={props.deleteQuestion}/>)
    })
    return(
        <div className={classes.Questions}>
            <h1>Questions Sets</h1>
            <ul>
                {questionSets}
                <br />
            </ul>
        </div>
    )

}

export default Questions;