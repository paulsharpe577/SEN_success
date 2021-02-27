import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <header>
 {/* Navigation */}
  <nav className="navbar navbar-default navbar-fixed-top navbar-shrink">
    <div className="container">
      {/* Brand and toggle get grouped for better mobile display */}
      <div className="navbar-header page-scroll">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="#top" className="navbar-brand page-scroll" href="#page-top">SEN Success</a>  
      </div>
      {/* Collect the nav links, forms, and other content for toggling */}
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
          <li className="hidden active">
            <a href="#page-top" />
          </li>
          <li className>
            <a className="page-scroll" href="#services">Values</a>
          </li>
          <li className>
            <a className="page-scroll" href="#portfolio">About</a>
          </li>
          <li className>
            <a className="page-scroll" href="#about">Services</a>
          </li>
          <li className>
            <a className="page-scroll" href="#testimonials">Testimonials</a>
          </li>
          <li className>
            <a className="page-scroll" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      {/* /.navbar-collapse */}
    </div>
    {/* /.container-fluid */}
  </nav>
    </header>
  );
}

export default NavBar;