import React, { useState } from "react";
import { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useLoaderData } from "react-router";
import CourseCart from "../CourseCart/CourseCart";

const CoursesRightSide = () => {
  const [allCourse, setAllCourse] = useState([]);

  useEffect(() => {
    fetch("https://easy-learning-server.vercel.app/course")
      .then((res) => res.json())
      .then((data) => setAllCourse(data));
  }, []);

  return (
    <Row className="d-flex">
      {allCourse.map((course) => (
        <CourseCart key={course.id} course={course}></CourseCart>
      ))}
    </Row>
  );
};

export default CoursesRightSide;
