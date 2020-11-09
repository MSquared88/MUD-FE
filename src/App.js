import React from 'react';
import './App.css';

import AppRouter from './components/AppRouter';

//context
import LoginProvider from './contexts/Login/LoginProvider';

//components
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div cla ssName="App">
                <LoginProvider>
                    <AppRouter />
                </LoginProvider>
            </div>
        </Router>
    );
}

export default App;
