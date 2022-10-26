import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import CourseCart from '../CourseCart/CourseCart';

const CoursesRightSide = () => {
  const [allCourse,setAllCourse] = useState([])


  useEffect(()=>{
      fetch('http://localhost:5000/course')
      .then(res=>res.json())
      .then(data=>setAllCourse(data))
  },[])

  return (
    <div>
        {
          allCourse.map(course=><CourseCart key={course.id} course={course}></CourseCart>)
        }
    </div>
  );
};

export default CoursesRightSide;