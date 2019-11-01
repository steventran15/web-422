import React, { Component } from "react";
import {Route, Switch} from 'react-router-dom'; 


import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import MainContainer from "./components/MainContainer";
import ProjectsPanel from "./components/ProjectsPanel";
import EmployeesPanel from "./components/EmployeesPanel";
import TeamsPanel from "./components/TeamsPanel"; 
import Overview from "./components/Overview";


class App extends Component {
  render() {
    return (
      <Overview/>
    );
  }
}

export default App;
