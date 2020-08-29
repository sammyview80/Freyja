import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Nav.module.css';

const Nav = (props) => {
    return (
        <div className={classes.Nav}>
            <div className={classes.TwoElement}>
                <div className={classes.item1}><NavLink  to="/" activeClassName="nav">Home</NavLink></div> 
                <div className={classes.item2}><NavLink  to="/sam">Score</NavLink></div>
                <div className={classes.item3}><NavLink  to="/create-questions">Add Essay</NavLink></div>
            </div>
            <div className={classes.OneElement}>
                {props.auth ? <div className={classes.item4}><NavLink  to="/logout">Logout</NavLink></div>: <div className={classes.item4}><NavLink  to="/login">Login</NavLink></div>}
                <div className={classes.item5}> <NavLink  to="/signup">Signup</NavLink></div>
            </div>
        </div>
    )
}

export default Nav;