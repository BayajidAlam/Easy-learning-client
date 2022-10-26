import React from "react";
import { Link } from "react-router-dom";
import "./CourseCart.css";

const CourseCart = ({ course }) => {
  console.log(course);
  return (
      <div className="my-cart">
        <h3>{course.title}</h3>
        <img className="cart-img" src={course.picture} alt="image not found" />
        <p>Discription: {course.dispcription}</p>
        <Link className="course-btn" to={`/courses/${course.id}`}>Course Details</Link>
      </div>
  );
};

export default CourseCart;
