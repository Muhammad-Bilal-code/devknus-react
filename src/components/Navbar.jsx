import React from "react";
import { Link } from "react-router-dom";
function Navbar({ login, logout, user }) {
  console.log(user);

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
          <li>
            <Link to="./fetch-api">Fetch API</Link>
          </li>
          <li>
            <Link to="./axios">Axios</Link>
          </li>
          <li>
            <Link to="./dashboard">Dashboard</Link>
          </li>

          {user ? (
            <button className="bg-red-950 p-1 rounded" onClick={logout}>
              logout
            </button>
          ) : (
            <button className="bg-sky-500/100 p-1 rounded" onClick={login}>
              login
            </button>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
