import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import loginPage from './pages/loginPage';
import mainPage from './pages/mainPage';
import Nav from './forms/main/navBar';

function Routes() {
    
    return (
        <BrowserRouter>
            <>
              <Nav />
              <Route path="/" component={loginPage} exact= {true}></Route>
              <Route path="/main" component={mainPage}></Route>
            </>
        </BrowserRouter>
    );
}

export default Routes;