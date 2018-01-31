import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'

//App Layouts
import Game2018 from './components/Game2018/'
import UserPicture from './components/UserPicture/'

//Import css for the application
import './index.css'

class App extends Component {
  render() {
    return (
        <Router history={browserHistory}>
            <Route exact path="/" component={Game2018}></Route>
            <Route path="/user/:user" title="User Picture" component={UserPicture} />
            <Route path="/game2018" component={Game2018}></Route>
        </Router>
    );
  }
}

export default App;