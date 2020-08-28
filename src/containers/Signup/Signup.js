import React from 'react';
import classes from './Signup.module.css';

const Signup =(props) => {
    return(
        <div>
            <form>
                <div className={classes.Signup}>
                    <h3>Signup</h3>
                    <div>
                        <h4>Email</h4>
                        <input type="email" name="InputEmail1" placeholder='Email'></input>
                    </div>
                    <div>
                        <h4>Password</h4>
                        <input type='password' name="InputPassword" placeholder='Password'></input>
                    </div>
                    <div>
                        <h4>Confirm Password</h4>
                        <input type='password' name="InputConfirmPassword" placeholder='Password'></input>
                    </div>
                    <div>
                        <button type="submit" className={'btn btn-primary'}>SignUp</button>
                    </div>
                </div>
                </form>
        </div>
    )
}

export default Signup;