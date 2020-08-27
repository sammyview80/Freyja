import React from 'react';
import Question from './Question/Question';

//This component takes array of question as props named: questionsArray
const Questions = (props) => {
    const questionSets = props.questionArray.map((ques, idx) => {
        return (<Question key={idx} id={idx} questionText={ques} sq={props.singleQuestion}/>)
    })
    return(
        <div>
            <h1>Questions Sets</h1>
            <ul>
                {questionSets}
            </ul>
        </div>
    )

}

export default Questions;