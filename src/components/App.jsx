import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import TapList from './TapList';

function App() {
  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/taplist' component={TapList} />
      </Switch>
    </div>
  );
}

export default App;