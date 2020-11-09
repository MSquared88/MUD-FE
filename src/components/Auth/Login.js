import React, { useState, useContext } from 'react';
import axios from 'axios';

import { LoginContext } from '../../contexts/Login/LoginContext';

//Styled Components
import {
    LoginForm,
    LoginContext1,
    LoginBtn,
    LoginHeader,
} from '../StyledWidgets';

// Login
const Login = (props) => {
    const { setStatus } = useContext(LoginContext);

    const [user, setNewUser] = useState({
        username: '',
        password: '',
    });

    const handleChanges = (e) => {
        setNewUser({ ...user, [e.target.name]: e.target.value });
    };

    const login = (e) => {
        e.preventDefault();

        axios
            .post('https://build-week-mud.herokuapp.com/api/login/', user)
            .then((res) => {
                console.log('Login', res.data.key);
                localStorage.setItem('token', res.data.key);
                console.log(localStorage.getItem('token'));
                props.history.push('/game-view');
                setStatus(true);
            })
            .catch((err) => {
                console.log('Login Error', err.response);
            });
    };

    return (
        <div>
            <LoginForm onSubmit={login}>
                <LoginContext1>
                    <LoginHeader>
                        <h1>Welcome Back</h1>
                    </LoginHeader>
                    <div className="login-form">
                        <label>Username:</label>
                        <input
                            className="login-form"
                            type="text"
                            name="username"
                            placeholder="username"
                            value={user.username}
                            required
                            onChange={handleChanges}
                        />
                    </div>

                    <div className="login-form">
                        <label>Password:</label>
                        <input
                            className="login-form"
                            type="password"
                            name="password"
                            placeholder="password"
                            value={user.password}
                            required
                            onChange={handleChanges}
                        />
                    </div>
                    <LoginBtn type="submit">Login</LoginBtn>
                </LoginContext1>
            </LoginForm>
        </div>
    );
};

export default Login;
