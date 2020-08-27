import React from 'react';

import classes from './Question.module.css';
//This component takes props: id and questionText
const Question = (props) => {
    return (
        <React.Fragment>
            <div onClick={props.single ? null : () => props.sq(props.id)} className={props.single ? classes.QuestionSingle : classes.Question}>
                {props.single ?<p className={classes.Ptag}>Question Title: {props.questionsTitle}</p> : null}
                {props.single ? <h4>Essay:</h4> : null}
                
                <p>
                    {props.single ? props.questionText : <p>{props.id+1}. {props.questionText}</p>}
                </p>
            </div>
        </React.Fragment>
    )
}

export default Question;