import React, { Component } from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Team from './Components/Team/Team';
import data from './data.js';

class App extends Component {
  render() {
        return (
      <div className="App">
          <header className='App-header'>
                <nav>
                    <NavLink exact to='/'>Home</NavLink>
                    <NavLink to='/team'>Team</NavLink>
                </nav>
              <Switch>
                  <Route exact path = '/' component={Home}/>
                  <Route path = '/team' render={(props) => <Team {...props} data={data}/>}/>
              </Switch>
          </header>
      </div>
    );
  }
}
export default App;
