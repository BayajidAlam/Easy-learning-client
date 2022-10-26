import React from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import './Register.css'
import toast from "react-hot-toast";
import { Toaster } from 'react-hot-toast';
import { GoogleAuthProvider } from "firebase/auth";

const Register = () => {

  const { googleSignIn, providerGoogleLogIn } = useContext(AuthContext)
  const googleProvider = new GoogleAuthProvider()

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const photoURL = form.photoURL.value
    const email = form.email.value
    const password = form.password.value
    console.log(name,photoURL,email,password);

    createUser (email,password)
  }

  const createUser = (email,password) => {
    googleSignIn(email,password)
    .then(result=> {
      const user = result.user
      console.log(user);
      toast.success('User created Successfully!')
    })
    .catch(error=> {
      console.error(error)
      toast.error(error.message)
    })
  }

  const handleGoogleSignIn = () => {
    providerGoogleLogIn(googleProvider)
    .then(result=> {
      const user = result.user
      toast.success('Signed In with google Successfully')
    })
    .catch(error=>{
      console.error(error)
      toast.error(error.message)
    })
  }
  return (
    <Form onSubmit={handleSubmit} className="register-form mx-auto mt-4">

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter Full name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhotoURL">
        <Form.Label>PhotoURL</Form.Label>
        <Form.Control type="text" name="photoURL" placeholder="Enter photoURL" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>
  
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <p>
        Already hava a account?<Link to="/login">Login</Link>
      </p>

      <div className="icon-container">
        <FaGoogle onClick={handleGoogleSignIn} className="alternative-login" />
        <FaGithub className="alternative-login" />
      </div>
      <Toaster/>
    </Form>
  );
};

export default Register;
