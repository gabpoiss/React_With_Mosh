import React from "react";

// Stateless Functionnal Components

// Destructuring Arguments

const NavBar = ({ totalCounters }) => {
  //   console.log("NavBar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="navbar-brand">
        Navbar
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
