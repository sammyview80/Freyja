import React from 'react';

//This component takes props: id and questionText
const Question = (props) => {
    return (
        <React.Fragment>
            <div onClick={() => props.sq(props.id)}>
                {props.single ?<h1>Question Set: {props.id}</h1> : null}
                <p>
                    {props.id +1 }. {props.questionText}
                </p>
            </div>
        </React.Fragment>
    )
}

export default Question;