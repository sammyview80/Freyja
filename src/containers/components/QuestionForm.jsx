import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import _ from 'lodash';

import { evaluateAnswer } from '../../actions/selected';

const QuestionForm = ({ selectedQuestion }) => {
  const [answer, setAnswer] = useState('');
  const dispatch = useDispatch();

  const analyze = (e) => {
    e.preventDefault();
    dispatch(evaluateAnswer(answer))
  }

  if (_.isEmpty(selectedQuestion)) {
    return (
      <span>No Question Selected</span>
    );
  }
  return (
      <div className="mt-4">
        QuestionForm
        <form onSubmit={analyze}>
          <div className="form-group">
            <label>{`${selectedQuestion.selectedQuestion}`}</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={e => setAnswer(e.target.value)}>
            </textarea>
            <button className="btn btn-primary mt-2" type="submit">Analyze</button>
          </div>
        </form>
      </div>
  )
};

const mapStateToProps = state => {
  return {
    selectedQuestion: state.selected
  }
}

export default connect(mapStateToProps)(QuestionForm);