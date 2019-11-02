import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const MainContainer = (props) => {
  
  // this component is stateless because the sidebar property is passed down from Overview component, this.props.sidebar not this.state.sidebar. 
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     sidebar: "",
  //   };
  // }
    return (
      <div>
        <NavBar />
        <div className="container-fluid">
          <div className="row">
            <SideBar highlight={props.sidebar} />
            <div className=" col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    );
  
}

export default MainContainer;
