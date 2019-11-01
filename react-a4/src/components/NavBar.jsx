import React, { Component } from "react";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">
            WEB422 - Project Portal
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
