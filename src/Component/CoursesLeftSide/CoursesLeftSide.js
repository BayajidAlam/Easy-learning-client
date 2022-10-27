import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./CourseLeftSide.css";

const CoursesLeftSide = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://easy-learning-server.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div>
      <h2>All Course</h2>
      <div className="course-leftside">
        {courses.map((course) => (
          <p key={course.id}>
            <Link to={`/courses/${course.id}`}>{course.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default CoursesLeftSide;
