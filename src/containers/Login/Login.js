import React from 'react';
import classes from './Login.module.css';

const Login =(props) => {
    return(
        <div>
            <form>
                <div className={classes.Login}>
                    <h3>Login</h3>
                    <div>
                        <h4>Email</h4>
                        <input type="email" name="InputEmail1" placeholder='Email'></input>
                    </div>
                    <div>
                        <h4>Password</h4>
                        <input type='password' name="InputPassword" placeholder='Password'></input>
                    </div>
                    <div>
                        <button type="submit" className={'btn btn-primary'}>Login</button>
                    </div>
                </div>
                </form>
        </div>
    )
}

export default Login;