import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { Toaster } from 'react-hot-toast';


const googleProvider = new GoogleAuthProvider()

const Login = () => {
  const { providerGoogleLogIn, signInExistingUser } = useContext(AuthContext)
  const navigate = useNavigate()
  const location =useLocation()
  const from = location.state?.from?.pathname || '/'

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    handleSignIn(email,password)
  }
  
  const handleGoogleSignIn = () => {
    providerGoogleLogIn(googleProvider)
    .then(result=>{
      const user = result.user
      toast.success('Signed In with google Successfully')
      navigate(from, {replace: true})
    })
    .catch(error=>{
      console.error(error)
      toast.error(error.message)
    })
  }

  const handleSignIn = (email,password) => {
    signInExistingUser(email,password)
    .then(result=> {
      const user = result.user
      toast.success('Login successfully')
      navigate(from, {replace: true})
    })
    .catch(error=> {
      const errorMessage = error.message
      toast.error(errorMessage)
    })
  }

  return (
    <Form onSubmit={handleSubmit} className="mx-auto mt-4 my-form">

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
      
      <p>
        Don't have account?<Link to="/register">Register</Link>
      </p>

      <div className="icon-container">
        <FaGoogle onClick={handleGoogleSignIn} className="alternative-login" />
        <FaGithub className="alternative-login" />
      </div>
    <Toaster></Toaster>
    </Form>
  );
};

export default Login;
