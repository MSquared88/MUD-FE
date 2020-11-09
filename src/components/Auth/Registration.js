import React, { useState } from 'react';
import axios from 'axios';

//Styled Components
import { RegisterForm, Context, RegisterBtn } from '../StyledWidgets';

// Registration
const Registration = (props) => {
    const [newUser, setNewUser] = useState({
        username: '',
        email: '',
        password1: '',
        password2: '',
    });

    const handleChanges = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    };

    const register = (e) => {
        e.preventDefault();
        console.log(newUser);
        axios
            .post(
                'https://build-week-mud.herokuapp.com/api/registration/',
                newUser,
            )
            .then((res) => {
                console.log('Register:', res.data);
                localStorage.setItem('token', res.data.key);
                props.history.push('/login');
            })
            .catch((err) => {
                console.log('Registration Error:', err.response);
            });

        setNewUser('');
    };

    return (
        <div>
            <RegisterForm>
                <Context>
                    <div className="registration-form">
                        <label>Username:</label>
                        <input
                            className="registration-form"
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={newUser.username}
                            required
                            onChange={handleChanges}
                        />
                    </div>

                    <div className="registration-form">
                        <label htmlFor="email">Email:</label>
                        <input
                            className="registration-form"
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={newUser.email}
                            required
                            onChange={handleChanges}
                        />
                    </div>

                    <div className="registration-form">
                        <label>Password:</label>
                        <input
                            className="registration-form"
                            type="password"
                            name="password1"
                            placeholder="create a password"
                            value={newUser.password1}
                            required
                            onChange={handleChanges}
                            minLength="8"
                        />
                    </div>

                    <div className="registration-form">
                        <label>Confirm Password:</label>
                        <input
                            className="registration-form"
                            type="password"
                            name="password2"
                            placeholder="confirm password"
                            value={newUser.password2}
                            required
                            onChange={handleChanges}
                            minLength="8"
                        />
                    </div>
                    <RegisterBtn type="submit" onClick={register}>
                        Register
                    </RegisterBtn>
                </Context>
            </RegisterForm>
        </div>
    );
};

export default Registration;
