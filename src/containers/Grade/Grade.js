import React from 'react';


//Grade take props: remarks, grade, answer
const Grade =(props) => {
    return (
        <div>

            <h1>Grade: {props.grade}</h1>
            <p>{props.remark}</p>

            <div>
                <h1>Your Submission</h1>
                <p>{props.answer}</p>
            </div>
            
        </div>
    )
}

export default Grade;