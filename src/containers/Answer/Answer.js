import React from 'react';

import classes from './Answer.module.css';

const Answer =(props) => {
    return(
        <div className={classes.Answer}>
            <input type='text' placeholder='Answer' onChange={props.changed} />
            <button type='submit' onClick={props.gradeMe}>Grade Me</button>
        </div>
    )
}

export default Answer;