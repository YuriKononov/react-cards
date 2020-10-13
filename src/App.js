import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import User from './components/User'
import Home from './components/Home'
import UsersPage from './components/contacts/contacts';
import Contacts from './components/contacts/contacts';
import SignUpForm from './components/signupForm/signUpForm';
import LoginForm from './components/signupForm/loginForm';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/user/:id' component={User} />
          <Route path='/contacts' component={Contacts} />
          <Route path='/reg' component={SignUpForm} />
          <Route path='/log' component={LoginForm} />
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
