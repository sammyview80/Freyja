import React, { useState } from 'react';

import axios from 'axios';

import Questions from '../Questions/Questions';
import Question from '../Questions/Question/Question';
import Answer from '../Answer/Answer';
import Grade from '../Grade/Grade';
import { useEffect } from 'react';





function Sam() {
  const [questions , setQuestions] = useState(Array()); // Array of questions
  const [questionsTitle, setQuestionTitle] = useState(Array())
  const [currentQuestion, setCurrentQuestion] = useState();  //current question state
  const [answer, setAnswer] = useState(''); // User answer state
  const [grade, setGrade] = useState(); // Grade result
  const [showGrade, setShowGrade] = useState(false); // For showing the grade.
  const [responseGrade, setResponseGrade] = useState(Object());


  const fetchQuestions =() => {
    axios.get('http://127.0.0.1:8000/api/questions/')
    .then((response) => {
      let Questions = Array();
      let Titles = Array();
      const dataResponse = response.data;
      for (let key in dataResponse){
        Questions.push(dataResponse[key]['question'])
        Titles.push(dataResponse[key]['question'].slice(0, 100))
      }
      setQuestions([...questions, ...Questions])
      setQuestionTitle([...questionsTitle, ...Titles])
    
    })
    .catch(error => {
      console.log(error)
    })
  }



  async function postAnswer() {
    const index = questions.findIndex((qs) => qs === currentQuestion.props.questionText) + 1;
    const data =  await axios.post('http://127.0.0.1:8000/api/score/' + index + '/', {
      answer: answer
    }).then(response => {
      let data = response.data;
      setResponseGrade({...responseGrade, ...data})
      console.log(response.data);
      let remark;
      if (response.data.predicted_score <= response.data.pass_score){
        remark = 'Not so good!'
      }
      else if (response.data.predicted_score >= response.data.pass_score){
        remark = 'Good job!'
      }
      else {
        remark = 'Prefect!'
      }
      let resultGrade = <Grade grade={response.data.predicted_score} answer={answer} remark={remark} />
      setGrade(resultGrade)
      setShowGrade(true)
    })
    .catch(error => console.log(error))
  }
  useEffect(fetchQuestions, []);
  
  const singleQuestionHandler = (id) => {
    // On click on the question we get id and render the question to dom
    let qs;
    qs = <Question id={id} questionText={questions[id]} questionsTitle={questionsTitle[id]} single/>
    setCurrentQuestion(qs) // updating the state of currentquestion
    setShowGrade(false)
  }
  const inputAnswerHandler =(event) => {
    // When ever the use enter the answer the answer state update
    let inputAnswer = event.target.value;
    setAnswer(inputAnswer);
  }
  return (
    <div className="App">
      <nav></nav>
      <Questions questionArray={questionsTitle} singleQuestion={singleQuestionHandler}/>
      {currentQuestion}
      {currentQuestion ? <Answer changed={(event) => inputAnswerHandler(event)} gradeMe={postAnswer}/> : null}
      {showGrade ? grade: null}
    </div>  );
}

export default Sam;
