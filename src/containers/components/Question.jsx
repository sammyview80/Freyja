import React, { useEffect, Fragment } from 'react';
import uniqid from 'uniqid';
import _ from 'lodash';

import QuestionForm from './QuestionForm';
import { connect } from 'react-redux';

import { selectQuestion } from '../../actions/selected';
import { getQuestions } from '../../actions/questions';

const Questions = ({ selectQuestion, getQuestions, fetchedQuestions }) => {
  useEffect(() => {
    getQuestions();    
  }, []);

  const renderQuestions = () => {
    if (_.isEmpty(fetchedQuestions)) {
      return (
        <span>Loading</span>
      );
    } else {
      return (
        <Fragment>
          { fetchedQuestions.map(question => {
            return (
            <li
              onClick={() => selectQuestion(question)}
              key={uniqid()}
              className="list-group-item"
            >
              {question.question}
            </li>              
            );
          })}
        </Fragment>
      )
    }
  }

  return (
    <div>
      <h5>Questions</h5>

      <div className="card" style={{width: '18rem', cursor: 'pointer'}}>
        <ul className="list-group list-group-flush">
          {renderQuestions()}
        </ul>
      </div>
      <QuestionForm />
    </div>
  );
};

const mapStateToProps = (state) => ({
  fetchedQuestions: state.questions.questions
})

export default connect(mapStateToProps, { selectQuestion, getQuestions })(Questions);