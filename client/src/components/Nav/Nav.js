import React from "react";

const Nav = (props) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="/">
      React Reading List
    </a>
    <div onClick={props.toggleShowNavPop}>
      I'm a Ham Button
    </div>
  </nav>
);

export default Nav;
