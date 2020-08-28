import React from 'react';
import { Redirect } from 'react-router';


const Logout = (props) => {
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    return (
        <Redirect to='/sam' />
    )
}

export default Logout;