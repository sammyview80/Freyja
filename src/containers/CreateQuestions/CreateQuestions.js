import React from 'react';

import classes from './CreateQuestions.module.css';

//This conponent need 
const CreateQuestions =(props) => {
    return (
        <React.Fragment>
            <div>
                <h3>Add Essay</h3>
            </div>
            <div className={classes.CreateQuestions}>
                <textarea name="message" rows="10" cols="72" placeholder='Answer' onChange={props.changed} />
                <br />
                <br />
                <button type='submit' onClick={props.onSubmit} className={'btn btn-primary'}>Submit Question</button>
            </div>
        </React.Fragment>
    )
}

export default CreateQuestions;