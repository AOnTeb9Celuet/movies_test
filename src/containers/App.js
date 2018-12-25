import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "../components/header/Header";
import MovieModal from "../components/main/about-modal/MovieModal";
import Poster from "../components/main/posters/Posters";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <WithHeaderRoute exact path="/" component={Poster} />
            <WithHeaderRoute path="/:id" component={MovieModal} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const WithHeaderRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        <div>
          <Header />
          <Component {...props} />
        </div>
      )}
    />
  );
};

export default App;
