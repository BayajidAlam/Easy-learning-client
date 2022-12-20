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

import Tippy from "@tippyjs/react";
import { toast, Toaster } from "react-hot-toast";


const Header = () => {
  const { user,signOutUser } = useContext(AuthContext);

  const handleSignOut = () =>{
    signOutUser()
    .then(()=>{

    })
    .catch((error)=>{
      toast.error(error.message)
    })
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="light">
      <Container>
        <div>
          <Link to="/login">
            <img className="img-brand" src={Brand} alt="" />
          </Link>
          {/* <Navbar.Brand className="text-white" href="/">
            Easy Learn
          </Navbar.Brand> */}
          <Link className="link text-white fs-3" to="/">
            Easy Learning
          </Link>
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
            {user?.uid ? <>
              <div className="link">
                {user?.photoURL ? (
                  <Tippy content={user.displayName}>
                    <Image
                      className="tooltips-img rounded-circle"
                      style={{ height: "40px" }}
                      src={user.photoURL}
                    />
                  </Tippy>
                ) : (
                  <FaUserAlt className="text-warning" />
                )}
              </div>
            </> : (
              <Link className="link text-white" to="/login">
                LOGIN
              </Link>
            )}

            {user?.uid? <button onClick={handleSignOut} className="link text-white btn p-0">SIGN OUT</button>:""}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Toaster/>
    </Navbar>
  );
};

export default Header;
