import React from 'react';
import {Navbar , Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'

const Navhai = () => {

    const element = <FontAwesomeIcon icon={faRocket} />
    
    return (
        <div className="container">
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <NavLink className="navbar-brand" to="/"> {element} </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <NavLink className="nav-link" to="/">Red</NavLink>
              <NavLink className="nav-link" to="/blue">Blue</NavLink>
              <NavLink className="nav-link" to="/green">Green</NavLink>
              <NavLink className="nav-link" to="/yellow">Yellow</NavLink>
              <NavLink className="nav-link" to="/pink">Pink</NavLink>
              <NavLink className="nav-link" to="/purple">Purple</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
};

export default Navhai;