import React from "react";

const SubNavbar = () => {
  return (
    <div className="subnav">
      <div className="sub-navbar">
        <a href="#redirectLink">Register</a>
        <span className="dot">.</span>
        <a href="#redirectLink">Sign in</a>
        <span className="dot">.</span> <a href="#redirectLink">Help</a>
        <span className="dot">.</span>
        <div className="dropdown-m me-4">
          <button className="dropbtn">
            Got To
            <i className="fa fa-caret-down ms-2"></i>
          </button>
          <div className="dropdown-content" id="dropdownMenu">
            <a href="#redirectLink">Power Apps Community</a>
            <a href="#redirectLink">Welcome to the Community</a>
            <a href="#redirectLink">Get help witth Power Apps</a>
            <a href="#redirectLink">Building Power Apps</a>
            <a href="#redirectLink">Microsoft Dataverse</a>
            <a href="#redirectLink">AI Builder</a>
            <a href="#redirectLink">Power Apps Governance and Administering</a>
            <a href="#redirectLink">AI Builder</a>
            <a href="#redirectLink">Power Apps Pro Dev & ISV</a>
            <a href="#redirectLink">Power Apps Portals</a>
            <a href="#redirectLink">Connector Development</a>
            <a href="#redirectLink">Power Query</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
