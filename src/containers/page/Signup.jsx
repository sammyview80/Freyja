import React, { useState } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

import Signup from '../Signup/Signup';

const SignupPage =( props) => {
    const [sucess, setSucess] = useState();
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();
    const email =(event) => {
        setEmail(event.target.value)
    }
    const password = (event) => {
        setPassword(event.target.value)
    }
    async function submit() {
        let data = {
            email: Email,
            username: Email,
            password: Password,
            password2: Password 
        }
        const a = await axios.post('http://127.0.0.1:8000/api/register/', data)
        .then((response) => {
            console.log(response.data);
            props.onSucess(response.data.token);
            setSucess(true)
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <Signup emailChange={(event) => email(event)} passwordChange={(event) => password(event)} submit={submit}/>
            {sucess ? <Redirect to="/" /> : null}
        </div>
    )
}

export default SignupPage