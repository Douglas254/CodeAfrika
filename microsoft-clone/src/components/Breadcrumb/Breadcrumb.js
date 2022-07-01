import React from "react";

const Breadcrumb = () => {
  return (
    <nav className="ms-4" aria-label="breadcrumb">
      <ol className="breadcrumb ms-2">
        <li className="breadcrumb-item">
          <a href="#redirecturl">Power Apps Community</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#redirecturl">Forums</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#redirecturl">Get Help with Power Apps</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#redirecturl">Building Power Apps</a>
        </li>
      </ol>
      <h1 className="title ms-2 mt-3">
        Detail screen problem not displaying correct information
      </h1>
      <div className="row mt-3">
        <div className="col-8 d-flex justify-content-end align-items-center">
          <button className="btn btnReply">Reply</button>

          <div className="dropdown">
            <a
              className="btn btnTopicOptions dropdown-toggle ms-1 text-light"
              href="#redirecturl"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Topic Options
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <a className="dropdown-item py-2" href="#redirecturl">
                  Subscribe to RSS Feed
                </a>
              </li>
              <li>
                <a className="dropdown-item py-2 disabled" href="#redirecturl">
                  Mark Topic as New <br />
                  Mark Topic as Read
                </a>
              </li>
              <li>
                <a className="dropdown-item py-2 disabled" href="#redirecturl">
                  Float this Topic for Curent User <br />
                  Bookmark <br />
                  Subscribe
                </a>
              </li>
              <li>
                <a className="dropdown-item py-2" href="#redirecturl">
                  Printer Friendly Page
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-4 align-self-end breadcrumbparagraph">
          <b> Helpful Resources</b>
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumb;
