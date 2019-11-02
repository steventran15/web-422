import React, { Component } from "react";
import moment from "moment";
import MainContainer from "./MainContainer";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    fetch("https://weba1.herokuapp.com/projects")
      .then(res => res.json())
      .then(fetchedProjects => {
        this.setState({
          projects: fetchedProjects.sort(this.compare)
        });
      })
      .catch(err => {
        console.log("PROJECTS FETCH FAILED: (From Projects.jsx) " + err);
      });
  } 

   // arrow function will prevent the usage of {this.handleClick.bind(this)}
   compare = (project1, project2) => {
    
     return parseInt(project1.ProjectName.substring(7).trim()) - parseInt(project2.ProjectName.substring(7).trim()); 
    // if it returns a postive value after the calculation, project 1 will be before project 2, if negative value then it is vice versa. 


    }

  render() {

    const {projects} = this.state;

    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <MainContainer sidebar="Projects">
              <h1 className="page-header">Projects</h1>
              <div className="row">
              <div className="table-responsive overview-table">
            <table className="table table-striped table-bordered">
              <thead>
                  <tr>
                      <td>Name</td>
                      <td>Description</td>
                      <td>Start Date</td>
                      <td>End Date</td>
                  </tr>
              </thead>
              <tbody>
                {projects.map((singleProject, key) => (
                  <tr key={singleProject._id} className={singleProject._id}>           
                    <td>{singleProject.ProjectName}</td>
                    <td>{singleProject.ProjectDescription}</td>
                    <td>{moment().format(singleProject.ProjectStartDate, 'LL')}</td>
                    <td>Active {moment().diff(singleProject.ProjectStartDate, 'days')} Days</td>  
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
                
              </div>
            </MainContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
