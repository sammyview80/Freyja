import React from 'react';

import classes from './Grade.module.css';


//Grade take props: remarks, grade, answer
const Grade =(props) => {
    return (
        <div className={classes.Grade}>

            <h1>Grade: {props.grade}</h1>
            <p>Remarks: {props.remark}</p>

            <div>
                <h1>Your Submission:</h1>
                <p>{props.answer}</p>
            </div>
            
        </div>
    )
}

export default Grade;