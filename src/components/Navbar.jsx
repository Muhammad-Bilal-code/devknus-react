import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="main">
      <div className="left">
        <h1 className="logo_text">Navbar</h1>
      </div>
      <div className="right">
        <ul>
          <li>
            <Link to="./">Home</Link>
          </li>
          <li>
            <Link to="./about">About</Link>
          </li>
          <li>
            <Link to="./contact">Contact</Link>
          </li>
          <li>
            <Link to="./blogs">Blogs</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
