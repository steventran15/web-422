import React, { Component } from "react";
import moment from "moment";
import {Link} from 'react-router-dom';

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
          <Link to="/projects" className="btn btn-primary form-control">
            View All Project Data
          </Link>
        </div>
      </div>
    );
  }
}

export default ProjectsPanel;
