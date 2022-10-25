import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Brand from "../../assets/easy-icon-13.png";
import "./Header.css";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="light">
      <Container>
        <div>
          <img className="img-brand" src={Brand} alt="" />
          <Navbar.Brand className="text-white" href="/">
            Easy Learn
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link className="link text-white" to="/courses">
              COURSES
            </Link>
            <Link className="link text-white" to="/FAQ">
              FAQ
            </Link>
            <Link className="link text-white" to="/blogs">
              BLOGS
            </Link>
            <Link className="link text-white" to="/login">
              LOGIN
            </Link>
          </Nav>
          <div>
            <Link className="link white">Theme</Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
