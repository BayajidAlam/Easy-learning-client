import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CourseCart.css";

const CourseCart = ({ course }) => {
  const { title, dispcription, picture, id } = course
  return (
    <Col className="text-center col-lg-6 col-sm-12">
       
       <h3>{title}</h3>
        <img  className="cart-img img-fluid" src={picture} alt="image not found" />
        <p>{(dispcription.length> 100)?dispcription.slice(0,100):dispcription}... </p>
        <Link className="course-btn" to={`/courses/${id}`}>Course Details</Link>
      
    </Col>

  );
};

export default CourseCart;
