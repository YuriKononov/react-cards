import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import User from './components/User'
import Home from './components/Home'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/user/:id' component={User} />
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
