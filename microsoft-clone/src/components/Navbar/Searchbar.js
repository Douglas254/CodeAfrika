import React from "react";

const Searchbar = () => {
  return (
    <div className="searchbar">
      <div className="dropdown">
        <button
          className="btn dropdown-toggle me-5 text-light"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          This board
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li>
            <a className="dropdown-item bg" href="#redirect">
              All community
            </a>
          </li>
          <li>
            <a className="dropdown-item bg" href="#redirect">
              This category
            </a>
          </li>
          <li>
            <a className="dropdown-item bg" href="#redirect">
              This board
            </a>
          </li>
          <li>
            <a className="dropdown-item bg" href="#redirect">
              Knowledge base
            </a>
          </li>
          <li>
            <a className="dropdown-item bg" href="#redirect">
              Users
            </a>
          </li>
        </ul>
      </div>
      <form action="" className="me-5">
        <input
          type="search"
          id="search"
          className="me-5"
          name="search"
          placeholder="Search all content"
        />
        <i className="fa fa-search" aria-hidden="true"></i>
      </form>
    </div>
  );
};

export default Searchbar;
