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
              <h1 className="page-header"><b>Projects</b></h1>
              
            <table className="table table-striped table-bordered">
              <thead> 
                  <tr>
                      <td><b>Name</b></td>
                      <td><b>Description</b></td>
                      <td><b>Start Date</b></td>
                      <td><b>End Date</b></td> 
                  </tr>
              </thead>
              <tbody>
                {projects.map((singleProject, key) => (
                  <tr key={singleProject._id} className={singleProject._id}>           
                    <td>{singleProject.ProjectName}</td>
                    <td>{singleProject.ProjectDescription}</td>
                    <td>{moment(singleProject.ProjectStartDate).format('LL')}</td>
                    <td>{(singleProject.ProjectEndDate === null) ? 'n/a' : moment(singleProject.ProjectEndDate).format('LL')}</td>     
                  </tr>
                ))}
              </tbody>
            </table>
          
            </MainContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
