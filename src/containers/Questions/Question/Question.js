import React from 'react';

import classes from './Question.module.css';
//This component takes props: id and questionText
const Question = (props) => {
    return (
        <React.Fragment>
            <div className={props.single ? classes.QuestionSingle : classes.Question}>
                {props.single ? <div><h3>Question Title:</h3><p className={classes.Ptag}>"{props.questionsTitle}"</p></div> : null}
                {props.single ? <h4>Author: {props.author}</h4> : null}
                {props.single ? <h4>TIme: {props.time}</h4> : null}
                {props.author ? <h3>Essay:</h3>: null}
                <p>
                    {props.single ? 
                    <p className={classes.Essay}>{props.questionText}</p> 
                    : <div className={classes.QuestionItem}>
                        <div><p onClick={props.single ? null : () => props.sq(props.id)}>{props.id+1}. {props.questionText} extra &nbsp;&nbsp;</p>
                        <button onClick={() => props.deleteQuestion(props.id)} className={'btn btn-primary'}>Delete</button>
                        </div>
                      </div>}
                </p>
            </div>
        </React.Fragment>
    )
}

export default Question;