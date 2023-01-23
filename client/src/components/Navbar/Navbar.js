import React from "react";
import "./style.css";

const logo = require("../../Assets/howdyneighbor_4.png");

export default function Navbar({ currentPage, handlePageChange }) {
  return (
    <div className="container container-flex navbar">
      <img src={logo} alt="logo"></img>
      <ul className="nav nav-tabs nav-flex">
        <li className="nav-item">
          <a
            id="linkColor"
            href="/login"
            onClick={() => handlePageChange("Login")}
            className={currentPage === "Login" ? "nav-link active" : "nav-link"}
          >
            LOGIN
          </a>
        </li>
        <li className="nav-item">
          <a
            id="linkColor"
            href="/signup"
            onClick={() => handlePageChange("Signup")}
            className={
              currentPage === "Signup" ? "nav-link active" : "nav-link"
            }
          >
            SIGN UP
          </a>
        </li>
        <li className="nav-item">
          <a
            id="linkColor"
            href="/about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            ABOUT US
          </a>
        </li>
        <li className="nav-item">
          <a
            id="linkColor"
            href="/donate"
            onClick={() => handlePageChange("Donate")}
            className={
              currentPage === "Donate" ? "nav-link active" : "nav-link"
            }
          >
            DONATE
          </a>
        </li>
      </ul>
    </div>
  );
}
