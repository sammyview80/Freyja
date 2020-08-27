import React from 'react';

const Answer =(props) => {
    return(
        <div>
            <input type='text' placeholder='Answer' onChange={props.changed}/>
            <button type='submit' onClick={props.gradeMe}>Grade Me</button>
        </div>
    )
}

export default Answer;