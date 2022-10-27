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
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useState } from "react";
import Tippy from "@tippyjs/react";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(true);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("logout sucrss");
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
            Easy Learn
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
            {user?.uid ? (
              <Link className="link">
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
              </Link>
            ) : (
              <Link className="link text-white" to="/login">
                LOGIN
              </Link>
            )}

            <button onClick={handleLogOut} variant="dark">
              LogOut
            </button>
            <Tippy content="click in the middle for toggle">
              <div className={darkMode ? "dark-mode" : "light-mode"}>
                <div className="icon-container">
                  <span style={{ color: darkMode ? "gray" : "yellow" }}>
                    <HiOutlineSun />
                  </span>

                  <div className="switch-checkbox">
                    <label className="switch">
                      <input
                        type="checkbox"
                        onChange={() => setDarkMode(!darkMode)}
                      />
                      <span className="slider-round"></span>
                    </label>
                  </div>
                  <span style={{ color: darkMode ? "#c96dfd" : "gray" }}>
                    <HiOutlineMoon />
                  </span>
                </div>
              </div>
            </Tippy>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
