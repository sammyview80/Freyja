import React from 'react';
import uniqid from 'uniqid';

import questions from '../../questions';
import QuestionForm from './QuestionForm';
import { connect } from 'react-redux';

import { selectQuestion } from '../../actions/selected';

const Questions = ({ selectQuestion, selectedQuestion }) => {
  return (
    <div>
      <h5>Questions</h5>

      <div className="card" style={{width: '18rem', cursor: 'pointer'}}>
        <ul className="list-group list-group-flush">
          { questions.questions.map(question => {
            return (
            <li
              onClick={() => selectQuestion(question)}
              key={uniqid()}
              className="list-group-item"
            >
              {question}
            </li>              
            );
          })}
        </ul>
      </div>
      <QuestionForm />
    </div>
  );
};

export default connect(null, { selectQuestion })(Questions);