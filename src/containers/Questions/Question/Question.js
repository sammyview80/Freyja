import React from 'react';

import classes from './Question.module.css';
//This component takes props: id and questionText
const Question = (props) => {
    console.log(props.author)
    return (
        <React.Fragment>
            <div onClick={props.single ? null : () => props.sq(props.id)} className={props.single ? classes.QuestionSingle : classes.Question}>
                {props.single ? <div><h3>Question Title:</h3><p className={classes.Ptag}>"{props.questionsTitle}"</p></div> : null}
                {props.single ? <h4>Essay:</h4> : null}
                {props.author ? <h4>{props.author}</h4>: null}
                
                <p>
                    {props.single ? <p className={classes.Essay}>{props.questionText}</p> : <p>{props.id+1}. {props.questionText}</p>}
                </p>
            </div>
        </React.Fragment>
    )
}

export default Question;