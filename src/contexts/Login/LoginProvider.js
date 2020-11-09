import React, { useState } from 'react';
import { LoginContext } from './LoginContext';

export default function LoginProvider({ children }) {
    const [status, setStatus] = useState(!!localStorage.getItem('token'));

    return (
        <>
            <LoginContext.Provider value={{ status, setStatus }}>
                {children}
            </LoginContext.Provider>
        </>
    );
}
