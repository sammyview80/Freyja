import React, { useState } from 'react';

import axios from 'axios';

import Questions from '../Questions/Questions';
import Question from '../Questions/Question/Question';
import Answer from '../Answer/Answer';
import Grade from '../Grade/Grade';
import CreateQuestion from '../CreateQuestions/CreateQuestions';
import { useEffect } from 'react';





function Sam() {
  const [questions , setQuestions] = useState(Array()); // Array of questions
  const [questionsTitle, setQuestionTitle] = useState(Array())
  const [currentQuestion, setCurrentQuestion] = useState();  //current question state
  const [answer, setAnswer] = useState(''); // User answer state
  const [grade, setGrade] = useState(); // Grade result
  const [showGrade, setShowGrade] = useState(false); // For showing the grade.
  const [responseGrade, setResponseGrade] = useState(Object());
  const [author, setAuthor] = useState(Array());
  const [date, setDate] = useState(Array());
  const [ids, setIds] = useState(Array());

  const fetchQuestions =() => {

    axios.get('http://127.0.0.1:8000/api/questions/')
    .then((response) => {
      let Questions = Array();
      let Titles = Array();
      let Author = Array();
      let Date = Array();
      let Id = Array();
      // let d = new Date();
      const dataResponse = response.data;
      for (let key in dataResponse){
        Questions.push(dataResponse[key]['question'])
        Titles.push(dataResponse[key]['question'].slice(0, 100))
        Author.push(dataResponse[key]['username'])
        Date.push(dataResponse[key]['timestamp'].slice(0, 10))
        Id.push(dataResponse[key]['id'])
      }
      setQuestions([...Questions])
      setQuestionTitle([...Titles])
      setAuthor([...Author])
      setDate([...Date])
      setIds([...Id])
    
    })
    .catch(error => {
      console.log(error)
    })
  }



  async function postAnswer() {
    axios.defaults.headers = {
        'Authorization': `Token ${localStorage.getItem('token')}`,
    }
    const index = ids[questions.findIndex((qs) => qs === currentQuestion.props.questionText)];
    const data =  await axios.post('http://127.0.0.1:8000/api/score/' + index + '/', {
      answer: answer
    }).then(response => {
      let data = response.data;
      setResponseGrade({...responseGrade, ...data})
      let remark;
      if (data.predicted_score <= data.pass_score){
        remark = 'Not so good!'
      }
      else if (data.predicted_score >= data.pass_score){
        remark = 'Good job!'
      }
      else {
        remark = 'Prefect!'
      }
      let resultGrade = <Grade grade={data.predicted_score} lowScore={data.low_score} fullScore={data.full_score} passScore={data.pass_score} answer={answer} remark={remark} />
      setGrade(resultGrade)
      setShowGrade(true)
    })
    .catch(error => console.log(error))
  }
  useEffect(fetchQuestions, []);
  
  const singleQuestionHandler = (id) => {
    // On click on the question we get id and render the question to dom
    let qs;
    qs = <Question id={id} questionText={questions[id]} questionsTitle={questionsTitle[id]} author={author[id]} time={date[id]} single/>
    setCurrentQuestion(qs) // updating the state of currentquestion
    setShowGrade(false)
  }
  const inputAnswerHandler =(event) => {
    // When ever the use enter the answer the answer state update
    let inputAnswer = event.target.value;
    setAnswer(inputAnswer);
  }
  async function deleteQuestionHandler(id) {
    axios.defaults.headers = {
      'Authorization': `Token ${localStorage.getItem('token')}`,
    }
    const index = ids[id];
    await axios.delete('http://127.0.0.1:8000/api/question/delete/'+index + '/')
    .then(response => {
      console.log(response);
      window.location.reload(false);
    })
    .catch(error => console.log(error))
  }
  return (
    <div className="App">
      <div>
        <Questions questionArray={questionsTitle} singleQuestion={singleQuestionHandler} deleteQuestion={deleteQuestionHandler}/>
      </div>
      {currentQuestion}
      {currentQuestion ? <Answer changed={(event) => inputAnswerHandler(event)} gradeMe={postAnswer}/> : null}
      {showGrade ? grade: null}
    </div>  );
}

export default Sam;
