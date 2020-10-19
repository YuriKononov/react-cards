import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import User from './components/User';
import Home from './components/Home';
import Contacts from './components/contacts/contacts';
import SignUpForm from './components/signupForm/signUpForm';
import LoginForm from './components/signupForm/loginForm';
import PrivatePath from './components/privatePath';
import Projects from './components/projects/projects';
import Project from './components/projects/project';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivatePath path="/user/:id" component={User} />
          <PrivatePath exact path="/contacts" component={Contacts} />
          <PrivatePath exact path="/projects" component={Projects} />
          <PrivatePath exact path="/projects/:id" component={Project} />
          <Route path="/reg" component={SignUpForm} />
          <Route path="/log" component={LoginForm} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
