import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import TapList from './TapList';
import NewBeerForm from './NewBeerForm';
import Login from './Login';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterBeerList = []
    };
    this.handleAddingBeerToList = this.handleAddingBeerToList.bind(this);
  }

  handleAddingBeerToList() {
    var newMasterBeerList = this.state.masterBeerList.slice();
    newMasterBeerList.push(newFriend);
    this.setState({ masterBeerList: newMasterBeerList });
  }

  render() {

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/taplist' component={TapList} />
          <Route exact path='/addbeer' render={() => <NewBeerForm onNewBeerCreation={this.handleAddingBeerToList} />} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;