import React, { Component } from "react";
import moment from "moment";
//import Moment from "react-moment";

class ProjectsPanel extends Component {
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
        console.log("PROJECTS FETCH FAILED: " + err);
      });
  }

  
  // arrow function will prevent the usage of {this.handleClick.bind(this)}
  compare = (project1, project2) => {
    
     
    // console.log("PROJECT 1: " + project1.ProjectName.substring(8).trim())     
   
    // if (isNaN(parseInt(project1.ProjectName.substring(8).trim())))
    //   console.log('BRUHHHVV')
    // else
    //   console.log('YESSSS')
  

      
    // console.log("PROJECT 2: " + project2.ProjectName.substring(8).trim())
    

    // if (parseInt(project1.ProjectName.substring(8).trim()) < parseInt(project2.ProjectName.substring(8).trim())) {
    //   return -1;
    // }
    // if (parseInt(project1.ProjectName.substring(8).trim()) > parseInt(project2.ProjectName.substring(8).trim())) {
    //   return 1;
    // }    
    // return 0;

    return parseInt(project1.ProjectName.substring(7).trim()) - parseInt(project2.ProjectName.substring(7).trim()); 
    // if it returns a postive value after the calculation, project 1 will be before project 2, if negative value then it is vice versa. 


  }

  render() {
    // destructuring for easier access to the variable names, less typing. 
    const {projects} = this.state;

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Projects</h3>
        </div>
        <div className="panel-body">
          <div className="table-responsive overview-table">
            <table className="table table-striped table-bordered">
              <tbody>
                {projects.map((singleProject, key) => (
                  <tr key={singleProject._id} className={singleProject._id}>           
                    <td>{singleProject.ProjectName}</td>
                    <td>Active {moment().diff(singleProject.ProjectStartDate, 'days')} Days</td>  
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <a href="/projects" className="btn btn-primary form-control">
            View All Project Data
          </a>
        </div>
      </div>
    );
  }
}

export default ProjectsPanel;
