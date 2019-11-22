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
      masterBeerList: []
    };
    this.handleAddingBeerToList = this.handleAddingBeerToList.bind(this);
    this.handleSubtractPint = this.handleSubtractPint.bind(this);
  }

  handleAddingBeerToList(newBeer) {
    var newMasterBeerList = this.state.masterBeerList.slice();
    newMasterBeerList.push(newBeer);
    this.setState({ masterBeerList: newMasterBeerList });
  }

  handleSubtractPint(searchId) {
    var newMasterBeerList = this.state.masterBeerList.slice();
    for (let i = 0; i < newMasterBeerList.length; i++) {
      if (newMasterBeerList[i].id == searchId) {
        if (newMasterBeerList[i].pints > 1) {
          newMasterBeerList[i].pints--;
        }
        else {
          newMasterBeerList[i].pints = 0;
        }
      }
    }
    this.setState({ masterBeerList: newMasterBeerList });
  }

  render() {

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/taplist' render={() => <TapList tapList={this.state.masterBeerList} onSubtractPint={this.handleSubtractPint} />} />
          <Route exact path='/addbeer' render={() => <NewBeerForm onNewBeerCreation={this.handleAddingBeerToList} />} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;