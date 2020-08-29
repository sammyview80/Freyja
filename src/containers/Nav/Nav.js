import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Nav.module.css';

const Nav = (props) => {
    return (
        <div className={classes.Nav}>
            <div className={classes.TwoElement}>
                <div className={classes.item1}><NavLink  exact to="/" activeStyle={{font:'grey', textDecoration:'underline'}}>Home</NavLink></div> 
                <div className={classes.item2}><NavLink  exact to="/sam" activeStyle={{font:'grey', textDecoration:'underline'}}>Score</NavLink></div>
                <div className={classes.item3}><NavLink  exact to="/create-questions" activeStyle={{font:'grey', textDecoration:'underline'}}>Add Essay</NavLink></div>
            </div>
            <div className={classes.OneElement}>
                {props.auth ? <div className={classes.item4}><NavLink  to="/logout">Logout</NavLink></div>: <div className={classes.item4}><NavLink exact to="/login" activeStyle={{font:'grey', textDecoration:'underline'}}>Login</NavLink></div>}
                <div className={classes.item5}> <NavLink exact to="/signup" activeStyle={{font:'grey', textDecoration:'underline'}}>Signup</NavLink></div>
            </div>
        </div>
    )
}

export default Nav;