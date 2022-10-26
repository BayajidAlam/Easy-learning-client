import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './CourseCart.css'

const CourseCart = ({course}) => {
console.log(course)
  return (
    <div className="card-container">
        <p>{course.id} </p>
    </div>
  );
};

export default CourseCart;
