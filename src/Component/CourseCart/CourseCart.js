import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CourseCart.css";

const CourseCart = ({ course }) => {
  console.log(course);
  return (
    <Col className="text-center col-lg-6">
       
       <h3>{course.title}</h3>
        <img className="cart-img img-fluid" src={course.picture} alt="image not found" />
        <p>Discription: {course.dispcription}</p>
        <Link className="course-btn" to={`/courses/${course.id}`}>Course Details</Link>
      
    </Col>

  );
};

export default CourseCart;
