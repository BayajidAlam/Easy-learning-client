import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { Toaster } from 'react-hot-toast';


const googleProvider = new GoogleAuthProvider()
const gitHubProvider = new GithubAuthProvider()
const Login = () => {
  const { providerGoogleLogIn, signInExistingUser, githubSignIn } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    handleSignIn(email,password)
  }
  console.log(location);
  const handleGoogleSignIn = () => {
    providerGoogleLogIn(googleProvider)
    .then(result=>{
      const user = result.user
      toast.success('Signed In with google Successfully')
      navigate(from, { replace: true });
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
      navigate(from, { replace: true });
    })
    .catch(error=> {
      const errorMessage = error.message
      toast.error(errorMessage)
    })
  }

  const handleSignInWithGitHub = () => {
    githubSignIn(gitHubProvider)
    .then(result=>{
      navigate(from, { replace: true });
      toast.success('Successfully signed in with github')
    })
    .catch(error=>{
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
        <FaGithub onClick={handleSignInWithGitHub} className="alternative-login" />
      </div>
    <Toaster></Toaster>
    </Form>
  );
};

export default Login;
