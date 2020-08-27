import React, { useState } from 'react';
import './App.css';

import Questions from './containers/Questions/Questions';
import Question from './containers/Questions/Question/Question';
import Answer from './containers/Answer/Answer';
import Grade from './containers/Grade/Grade';

function App() {
  const [questions , setQuestions] = useState(['What is you name?', 'What is your father name?', 'What is you mother name?']); // Array of questions
  const [currentQuestion, setCurrentQuestion] = useState();  //current question state
  const [answer, setAnswer] = useState(''); // User answer state
  const [grade, setGrade] = useState(); // Grade result
  
  const singleQuestionHandler = (id) => {
    // On click on the question we get id and render the question to dom
    let qs;
    qs = <Question id={id} questionText={questions[id]} />
    setCurrentQuestion(qs) // updating the state of currentquestion
  }
  const inputAnswerHandler =(event) => {
    // When ever the use enter the answer the answer state update
    let inputAnswer = event.target.value;
    setAnswer(inputAnswer);
  }

  const gradeMeHandler = () => {
    let resultGrade;
    console.log(answer)
    // All ai logic here after the grade me button is clicked asyncly.
    // update the state of using setGrade after prediction
    let g = 10; // g comes from backend 
    resultGrade = <Grade grade={g} answer={answer} remark={'Great'} />
    console.log(resultGrade)
    setGrade(resultGrade)
  }
  console.log(grade)
  return (
    <div className="App">
      <Questions questionArray={questions} singleQuestion={singleQuestionHandler}/>
      {currentQuestion}
      {currentQuestion ? <Answer changed={(event) => inputAnswerHandler(event)} gradeMe={gradeMeHandler}/> : null}
      {grade ? grade: null}
    </div>  );
}

export default App;
