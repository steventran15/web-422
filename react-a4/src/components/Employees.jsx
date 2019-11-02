import React, { Component } from "react";
import moment from "moment";
import MainContainer from "./MainContainer";

class Employees extends Component {
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
        console.log("EMPLOYEES FETCH FAILED: (From Employees.jsx) " + err);
      });
  } 

   // arrow function will prevent the usage of {this.handleClick.bind(this)}
   compare = (emp1, emp2) => {
    
    return (parseInt(emp1.Extension) - parseInt(emp2.Extension));
    }
 
  render() {

    const {employees} = this.state;

    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <MainContainer sidebar="Employees">
              <h1 className="page-header"><b>Employees</b></h1>
              
            <table className="table table-striped table-bordered">
              <thead> 
                  <tr>
                      <td><b>Name & Position</b></td>
                      <td><b>Address</b></td>
                      <td><b>Phone Num</b></td>
                      <td><b>Hire Date</b></td>
                      <td><b>Salary Bonus</b></td> 
                  </tr>
              </thead>
              <tbody>
                {employees.map((singleEmployee, key) => (
                  <tr key={singleEmployee._id} className={singleEmployee._id}>           
                    <td>{singleEmployee.FirstName + " " + singleEmployee.LastName + " - " + singleEmployee.Position.PositionName}</td>
                    <td>{singleEmployee.AddressStreet + ". " + singleEmployee.AddressCity + " " + singleEmployee.AddressState + ", " + singleEmployee.AddressZip}</td>
                    <td>{singleEmployee.PhoneNum + " ex: " + parseInt(singleEmployee.Extension)}</td>
                    <td>{moment(singleEmployee.HireDate).format('LL')}</td>
                    <td>{"$ " + singleEmployee.SalaryBonus}</td>     
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

export default Employees;
