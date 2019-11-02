import React, { Component } from "react";
import {Link} from 'react-router-dom';

class EmployeesPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    };
  }

  componentDidMount() {
    fetch("https://weba1.herokuapp.com/employees")
      .then(res => res.json())
      .then(fetchedEmployees => {
        this.setState({
          employees: fetchedEmployees.sort(this.compare)
        });
      })
      .catch(err => {
        console.log("EMPLOYEES FETCH FAILED: " + err);
      });
  }

  
  // arrow function will prevent the usage of {this.handleClick.bind(this)}
  compare = (emp1, emp2) => {
    
    
    return (parseInt(emp1.Extension) - parseInt(emp2.Extension));

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

    //return parseInt(project1.ProjectName.substring(7).trim()) - parseInt(project2.ProjectName.substring(7).trim()); 
    // if it returns a postive value after the calculation, project 1 will be before project 2, if negative value then it is vice versa. 


  }

  render() {
    // destructuring for easier access to the variable names, less typing. 
    const {employees} = this.state;

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Employees</h3>
        </div>
        <div className="panel-body">
          <div className="table-responsive overview-table">
            <table className="table table-striped table-bordered">
              <tbody>
                {employees.map((singleEmployee, key) => (
                  <tr key={singleEmployee._id} className={singleEmployee._id}>           
                    <td>{singleEmployee.FirstName + " " + singleEmployee.LastName}</td>
                    <td>{singleEmployee.Position.PositionName}</td>  
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link to="/employees" className="btn btn-primary form-control">
            View All Employee Data
          </Link>
        </div>
      </div>
    );
  }
}

export default EmployeesPanel;
