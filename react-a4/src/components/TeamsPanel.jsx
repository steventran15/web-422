import React, { Component } from "react";
import {Link} from 'react-router-dom';

class TeamsPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: []
    };
  }

  componentDidMount() {
    fetch("https://weba1.herokuapp.com/teams")
      .then(res => res.json())
      .then(fetchedTeams => {
        this.setState({
          teams: fetchedTeams.sort(this.compare)
        });
      })
      .catch(err => {
        console.log("TEAMS FETCH FAILED: " + err);
      });
  }

  
  // arrow function will prevent the usage of {this.handleClick.bind(this)}
  compare = (team1, team2) => {

    return parseInt(team1.TeamName.substring(4).trim()) - parseInt(team2.TeamName.substring(4).trim()); 
    // if it returns a postive value after the calculation, project 1 will be before project 2, if negative value then it is vice versa. 
  }

  render() {
    // destructuring for easier access to the variable names, less typing. 
    const {teams} = this.state;

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Teams</h3>
        </div>
        <div className="panel-body">
          <div className="table-responsive overview-table">
            <table className="table table-striped table-bordered">
              <tbody>
                {teams.map((singleTeam, key) => (
                  <tr key={singleTeam._id} className={singleTeam._id}>           
                    <td>{singleTeam.TeamName}</td>
                    <td>{singleTeam.Employees.length} Employees</td>  
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link to="/teams" className="btn btn-primary form-control">
            View All Team Data
          </Link>
        </div>
      </div>
    );
  }
}

export default TeamsPanel;
