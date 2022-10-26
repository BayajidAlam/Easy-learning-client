import React from "react";
import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Brand from "../../assets/easy-icon-13.png";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import "./Header.css";
import { FaUserAlt } from "react-icons/fa";
import { Image } from "react-bootstrap";

const Header = () => {

  const { user } = useContext(AuthContext)

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
            <Link className="link">
              {
                user.photoURL? <Image style={{height: '40px'}} src={user.photoURL}/>:<FaUserAlt className="text-warning"/>
              }
            </Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
