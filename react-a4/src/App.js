/********************************************************************************* 
 * * WEB422 – Assignment 04 *
 *  I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this 
 * * assignment has been copied manually or electronically from any other source (including web sites) or * 
 * * distributed to other students. *
 * 
 * 
 * Name: Steven Tran Student ID: 105629174 Date: November 1st, 2019 
 * 
********************************************************************************/
 

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
