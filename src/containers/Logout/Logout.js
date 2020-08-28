import React from 'react';
import { Redirect } from 'react-router';


const Logout = (props) => {
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    window.location.reload(false);
    return (
        <Redirect to='/sam' />
    )
}

export default Logout;