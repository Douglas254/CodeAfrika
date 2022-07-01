import React from "react";
import logo from "../../assets/logo-maroon.png";

const TopNavbar = () => {
  return (
    <nav className="navbar ms-4 navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#redirectLink">
          <img
            id="imagelogo"
            className="img-fluid"
            src={logo}
            alt="microsoft logo"
          />
          <span id="separator">|</span>
          <span className="logotext">Power Apps</span>
        </a>

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

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown bordert">
              <a
                className="nav-link dropdown-toggle"
                href="#redirectLink"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Product
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#redirectLink">
                    AI Builder
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#redirectLink">
                    Automate processes
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#redirectLink">
                    Azure + Power Apps
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#redirectLink">
                    Build Apps
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#redirectLink">
                    Connect data
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#redirectLink">
                    Portals
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#redirectLink">
                Pricing
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#redirectLink"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Partners
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#redirectLink">
                    Overview
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#redirectLink">
                    Become a Partner
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#redirectLink">
                    Find a partner
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#redirectLink">
                    Find partner offers
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#redirectLink">
                    Partner GTM Resources
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#redirectLink"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Learn
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#redirectLink">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#redirectLink">
                    Customer Stories
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#redirectLink">
                    Developer Plan
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#redirectLink">
                    Documentation
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#redirectLink">
                    For IT Leaders
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#redirectLink">
                    Roadmap
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#redirectLink">
                    Self-paced learning
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#redirectLink">
                    Webinars
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#redirectLink">
                    App development topics
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#redirectLink"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Support
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#redirectLink">
                    Overview
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#redirectLink">
                    Issues
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#redirectLink">
                    Give feedback
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#redirectLink"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Community
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#redirectLink">
                    Overview
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#redirectLink">
                    Forums
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#redirectLink">
                    Galleries
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#redirectLink">
                    Submit ideas
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#redirectLink">
                    User groups
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
