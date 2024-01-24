import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary pt-4 pb-4">
         <h1 className="mx-auto">Student Dashboard</h1>
          <div className="justify-content-end" style={{ marginRight: "20px"}}>
          <Link to="/" className="nav-link">All Students</Link>
          <Link to="/about" className="nav-link">About Devs</Link>
          </div>
        
      </nav>
    </div>
  );
};

export default Header;
