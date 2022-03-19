import React, { useState, useEffect, useContext } from "react";

import { Link, useNavigate } from "react-router-dom";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Badge from "@mui/material/Badge";


const Navbar = () => {

  const navigate = useNavigate();


  const handleLogin = () => {
    navigate("/login");
  };
  const handleProfile = () => {
    navigate("/profile");
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-info"
      style={{
        position: "sticky",
        top: "0",
        zIndex: 2,
      }}
    >
      <div className="container-fluid">
        <Link smooth={true} to="/" className="navbar-brand" href="#">
          F_Diary
        </Link>
        <div className="ml-4"></div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse navbaritems"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item " style={{ cursor: "pointer" }}>
              <span
                smooth={true}
                onClick={() => navigate("/irrigration")}
                className="nav-link navbar-toggler"
                data-bs-target="#navbarNavDropdown"
                data-bs-toggle="collapse"
                href="#"
              >
                Irrigation
              </span>
            </li>

            <li className="nav-item " style={{ cursor: "pointer" }}>
              <span
                smooth={true}
                onClick={() => navigate("/user/wishlist")}
                className="nav-link navbar-toggler"
                data-bs-target="#navbarNavDropdown"
                data-bs-toggle="collapse"
                href="#"
              >
                Spray
              </span>
            </li>
            <li className="nav-item" style={{ cursor: "pointer" }}>
              <span
                smooth={true}
                onClick={"handleLogout"}
                className="nav-link navbar-toggler"
                data-bs-target="#navbarNavDropdown"
                data-bs-toggle="collapse"
                href="#"
              >
                Sales
              </span>
            </li>
            <li className="nav-item" style={{ cursor: "pointer" }}>
              <span
                smooth={true}
                onClick={"handleLogout"}
                className="nav-link navbar-toggler"
                data-bs-target="#navbarNavDropdown"
                data-bs-toggle="collapse"
                href="#"
              >
                Expenses
              </span>
            </li>

            <li className="nav-item" style={{ cursor: "pointer" }}>
              <span
                smooth={true}
                onClick={handleLogin}
                className="nav-link navbar-toggler"
                data-bs-target="#navbarNavDropdown"
                data-bs-toggle="collapse"
                href="#"
              >
                {" "}
                Log In
              </span>
            </li>

            <li className="nav-item" style={{ cursor: "pointer" }}>
              <span
                smooth={true}
                onClick={() => navigate("/register")}
                className="nav-link navbar-toggler"
                data-bs-target="#navbarNavDropdown"
                data-bs-toggle="collapse"
                href="#"
              >
                Register
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
