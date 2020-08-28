import React from 'react';
import classes from './Signup.module.css';

const Signup =(props) => {
    return(
        <div>
            <div className={classes.Signup}>
                <h3>Signup</h3>
                <div>
                    <h4>Email</h4>
                    <input type="email" name="InputEmail1" placeholder='Email' onChange={props.emailChange}></input>
                </div>
                <div>
                    <h4>Password</h4>
                    <input type='password' name="InputPassword" placeholder='Password' onChange={props.passwordChange}></input>
                </div>
                {/* <div>
                    <h4>Confirm Password</h4>
                    <input type='password' name="InputConfirmPassword" placeholder='Password' onChange={props.confirmPasswordChange}></input>
                </div> */}
                <div>
                    <button type="submit" className={'btn btn-primary'} onClick={props.submit} >SignUp</button>
                </div>
            </div>
        </div>
    )
}

export default Signup;