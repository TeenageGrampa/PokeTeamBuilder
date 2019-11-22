import React from 'react';
import NewTeam from './NewTeam'
import HomePage from './HomePage'
import { Switch, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App" style={{height: '100%', backgroundImage: `url(https://ih1.redbubble.net/image.236310472.7095/flat,1000x1000,075,f.u2.jpg)`}}>
      <Switch>
      <Route path={'/NewTeam'} component={NewTeam} />
      <Route path={'/'} component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
