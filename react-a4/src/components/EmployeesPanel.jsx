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
