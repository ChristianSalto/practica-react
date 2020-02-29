import React, { Component } from 'react';
import './App.css';
import Register from '../src/components/register/Register'
import Login from '../src/components/login/Login';
import ListAds from '../src/components/listAds/ListAds';
import Details from '../src/components/details/Details';
import CreateAds from '../src/components/createAds/CreateAds';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from '../src/privateRoute/PrivateRoute';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Register} />
            <Route path="/login" component={Login} />

            <PrivateRoute path="/listAds" component={ListAds} />
            <PrivateRoute path="/details" component={Details} />
            <PrivateRoute path="/edit" component={CreateAds} />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
