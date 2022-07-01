import React from "react";

const Footer = () => {
  return (
    <div className="row d-flex justify-content-around footer mt-5 py-5">
      <div className="col-5 col-sm-3 col-lg-2 d-flex flex-column ms-3 my-4">
        <h5 className="my-2">Power Platform</h5>
        <a href="#redirecturl" className="my-1">
          Overview
        </a>
        <a href="#redirecturl" className="my-1">
          Power BI
        </a>
        <a href="#redirecturl" className="my-1">
          Power Apps
        </a>
        <a href="#redirecturl" className="my-1">
          Power Automate
        </a>
        <a href="#redirecturl" className="my-1">
          Power Virtual Agents
        </a>
      </div>
      <div className="col-5 col-sm-3 col-lg-2 d-flex flex-column ms-3 my-4">
        <h5 className="my-2"> Browse</h5>
        <a href="#redirecturl" className="my-1">
          Sample apps
        </a>
        <a href="#redirecturl" className="my-1">
          Services
        </a>
      </div>
      <div className="col-5 col-sm-3 col-lg-2 d-flex flex-column ms-3 my-4">
        <h5 className="my-2"> Downloads</h5>
        <a href="#redirecturl" className="my-1">
          Studio
        </a>
        <a href="#redirecturl" className="my-1">
          iOS
        </a>
        <a href="#redirecturl" className="my-1">
          Android
        </a>
      </div>
      <div className="col-5 col-sm-3 col-lg-2 d-flex flex-column ms-3 my-4">
        <h5 className="my-2"> Learn</h5>
        <a href="#redirecturl" className="my-1">
          Documentation
        </a>
        <a href="#redirecturl" className="my-1">
          Support
        </a>
        <a href="#redirecturl" className="my-1">
          Community
        </a>
        <a href="#redirecturl" className="my-1">
          Give feedback
        </a>
        <a href="#redirecturl" className="my-1">
          Blog
        </a>
        <a href="#redirecturl" className="my-1">
          Partners
        </a>
      </div>
      <div className="row">
        <div className="ms col-5 col-sm-3 col-lg-2 d-flex flex-column ml my-4">
          <h5 className="my-2">Power Apps</h5>
          <a href="#redirecturl" className="my-1">
            Sign in
          </a>
          <a href="#redirecturl" className="my-1">
            Sign up
          </a>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="ms col-12 d-flex flex-row col-lg-6 ml my-4">
          <p className="me-5">&copy; 2022 Microsoft</p>
          <span>Follow Power Apps</span>
          <a href="#redirecturl" title="Feed">
            <i className="fa fa-feed"></i>
          </a>
          <a href="#redirecturl" title="Follow us on Youtube">
            <i className="fa fa-youtube"></i>
          </a>
          <a href="#redirecturl" title="Follow us on Twitter">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
        <div className="ml-terms col-12 col-lg-3">
          <a href="#redirecturl" title="Feed">
            Privacy & cookies
          </a>
          <a
            href="#redirecturl"
            title="Follow us on Youtube"
            className="mx-3 my-2"
          >
            Terms of use
          </a>
          <a href="#redirecturl" title="Follow us on Twitter">
            Trademarks
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
