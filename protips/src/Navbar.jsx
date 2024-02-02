import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="head">
        <div className="topic">
        <Link to="/">Kalvium❤️</Link>
        </div>
        <div className="info">
        <Link to="/contacts">Contacts</Link>
        <Link to="/forms">Registration Form</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;