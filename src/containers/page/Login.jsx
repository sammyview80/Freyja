import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import Login from '../Login/Login';

const LoginPage =( props) => {
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();
    const [sucess, setSucess] = useState(false);
    const email =(event) => {
        setEmail(event.target.value)
    }
    const password = (event) => {
        setPassword(event.target.value)
    }
    async function submit() {
        const data = {
            username: Email, 
            password: Password
        }
        const r = await axios.post('http://127.0.0.1:8000/api/login/', data)
        .then(response => {
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('user_id', response.data.user_id)
            setSucess(true)
            props.onSucess()
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            {sucess ? <Redirect to='/sam' />: null}
            <Login emailChange={(event) => email(event)} passwordChange={(event) => password(event)} submit={submit}/>
        </div>
    )
}

export default LoginPage;