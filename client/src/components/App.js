import React from 'react'
import NavBar from './navbar/NavBar'
import {BrowserRouter, Route} from 'react-router-dom';
import Main from './home/Main';
import SignUp from './signup/SignUp';
import Login from './login/Login';
import Dashboard from './dashboard/Dashboard';
import authGuard from '../components/HOCs/authGuard';
import loggedInGuard from './HOCs/loggedInGuard';

const App = () => {
    return(
        <div className="container"><BrowserRouter>
            <NavBar />
            <Route exact path="/" component={Main} />
            <Route exact path="/sign-up" component={loggedInGuard(SignUp)} />
            <Route exact path="/login" component={loggedInGuard(Login)} />
            <Route exact path="/dashboard" component={authGuard(Dashboard)} />
            </BrowserRouter>
        </div>
    )
}

export default App