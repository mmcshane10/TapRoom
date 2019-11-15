import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import TapList from './TapList';
import NewBeerForm from './NewBeerForm';

function App() {
  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/taplist' component={TapList} />
        <Route exact path='/addbeer' component={NewBeerForm} />
      </Switch>
    </div>
  );
}

export default App;