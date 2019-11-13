import React from 'react';
import NewTeam from './NewTeam'
import HomePage from './HomePage'
import { Switch, Route} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path={'/NewTeam'} component={NewTeam} />
      <Route path={'/'} component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
