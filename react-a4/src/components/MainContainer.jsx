import React, { Component } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar: "",
    };
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="container-fluid">
          <div className="row">
            <SideBar highlight={this.state.sidebar} />
            <div className=" col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const MainContainer = props => {

// };

export default MainContainer;
