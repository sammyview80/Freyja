import React from 'react';
import { connect } from 'react-redux';

const QuestionForm = ({ selectedQuestion }) => {
  if (selectedQuestion) {
    return (
      <div>
        QuestionForm
        <form>
          <div className="form-group">
            <label>{`${selectedQuestion}`}</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </form>
      </div>
    );
  }
  return (
    <span>Not Selected</span>
  )
};

const mapStateToPros = state => {
  return {
    selectedQuestion: state.selected
  }
}

export default connect(mapStateToPros)(QuestionForm);