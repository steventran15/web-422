import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

//import NavBar from "./components/NavBar";
//import SideBar from "./components/SideBar";
//import MainContainer from "./components/MainContainer";

import Projects from "./components/Projects";
import Employees from "./components/Employees";
import Teams from "./components/Teams";
import Overview from "./components/Overview";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => (
          <Overview />
        )}>
        </Route>
        <Route exact path='/projects' render={() => (
          <Projects />
        )}>
        </Route>
        <Route exact path='/teams' render={() => (
          <Teams />
        )}>
        </Route>
        <Route exact path='/employees' render={() => (
          <Employees />
        )}>
        </Route>

        <Route render={() => (
          <NotFound />  
        )}>
        </Route>
      </Switch>
    );
  }
}

export default App;
