import React, { Component } from "react";
import MainContainer from "./MainContainer";

class Teams extends Component {
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
        console.log("TEAMS FETCH FAILED: (From Teams.jsx) " + err);
      });
  } 

   // arrow function will prevent the usage of {this.handleClick.bind(this)}
   compare = (team1, team2) => {
    
    return parseInt(team1.TeamName.substring(4).trim()) - parseInt(team2.TeamName.substring(4).trim());    
    // if it returns a postive value after the calculation, project 1 will be before project 2, if negative value then it is vice versa. 
    }
 
  render() {

    const {teams} = this.state;

    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <MainContainer sidebar="Teams">
              <h1 className="page-header"><b>Teams</b></h1>
              
            <table className="table table-striped table-bordered">
              <thead> 
                  <tr>
                      <td><b>Name</b></td>
                      <td><b>Projects</b></td>
                      <td><b>Employees</b></td>
                      <td><b>TeamLead</b></td> 
                  </tr>
              </thead>
              <tbody>
                {teams.map((singleTeam, key) => (
                  <tr key={singleTeam._id} className={singleTeam._id}>           
                    <td>{singleTeam.TeamName}</td>
                    <td>
                    <ul> 
                        {singleTeam.Projects.map((eachProject, key) => ( 
                            
                            <li key={key}>{eachProject.ProjectName}</li>

                        ))}
                    </ul>
                    </td>
                    <td>{singleTeam.Employees.length} Employees</td>  
                    <td>{singleTeam.TeamLead.FirstName + " " + singleTeam.TeamLead.LastName}</td> 
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

export default Teams;
