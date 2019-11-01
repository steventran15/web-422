import React, { Component } from 'react';


import NavBar from "./NavBar";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import ProjectsPanel from "./ProjectsPanel";
import EmployeesPanel from "./EmployeesPanel";
import TeamsPanel from "./TeamsPanel"; 
//import Overview from "./components/Overview";


const Overview = () => {
    return ( 
        <div>
        <div className="container-fluid">
          <div className="row">
            <MainContainer sidebar="Overview">
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
 
export default Overview;