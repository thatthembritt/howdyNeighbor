import React from "react";
import "./style.css";

const logo = require("../../Assets/howdyneighbor_4.png");

export default function NavbarLoggedIn({ currentPage, handlePageChange }) {
  return (
    <div className="container container-flex">
      <img src={logo} alt="logo"></img>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            id="linkColor"
            href="/search"
            onClick={() => handlePageChange("Search")}
            className={
              currentPage === "Search" ? "nav-link active" : "nav-link"
            }
          >
            FIND HELP
          </a>
        </li>
        <li className="nav-item">
          <a
            id="linkColor"
            href="/about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            ABOUT
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
        <li className="nav-item">
          <a
            id="linkColor"
            href="/logout"
            onClick={() => handlePageChange("Logout")}
            className={
              currentPage === "Logout" ? "nav-link active" : "nav-link"
            }
          >
            LOGOUT
          </a>
        </li>
      </ul>
    </div>
  );
}
