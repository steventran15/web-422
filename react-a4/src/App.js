import React, { Component } from "react";
import {Route, Switch} from 'react-router-dom'; 


import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import MainContainer from "./components/MainContainer";
import ProjectsPanel from "./components/ProjectsPanel";
import EmployeesPanel from "./components/EmployeesPanel";
import TeamsPanel from "./components/TeamsPanel"; 


class App extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <MainContainer>
              <h1 className="page-header">Overview</h1>
              <div className="row">
                <div className="col-md-4">
                  <ProjectsPanel/>
                </div>
                <div className="col-md-4">
                  <TeamsPanel/>
                </div>
                <div className="col-md-4">
                  <EmployeesPanel/>
                </div>
              </div>
            </MainContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
