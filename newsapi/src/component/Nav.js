import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="box-1">
        <div id="logo">
          {" "}
          <img src="newsapi/public/image/74.jpg" />
        </div>
        <div className="nav-box">
         
            <Link className="rad" to="/">Home</Link>
            <Link className="rad" to="/about">About</Link>
            <Link className="rad" to="/contact">Contact</Link>
            <Link className="rad" to="/login">LogIn</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
