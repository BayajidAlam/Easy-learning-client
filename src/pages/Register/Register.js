import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Register.css'

const Register = () => {
  return (
    <Form className="register-form mx-auto mt-4">

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
  
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <p>
        Already hava a account?<Link to="/register">Login</Link>
      </p>

      <div>
        <FaGoogle className="alternative-login" />
        <FaGithub className="alternative-login" />
      </div>
    </Form>
  );
};

export default Register;
