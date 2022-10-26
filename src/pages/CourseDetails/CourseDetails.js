import React from 'react';
import { useLoaderData } from 'react-router';
import './CourseDetails.css'

const CourseDetails = () => {
  const courseData = useLoaderData()
  console.log(courseData.picture)
  return (
    <div className='container text-center'>
      <h2>{courseData.title}</h2>
      <img className='course-img' src={courseData.picture} alt="" />
      <p>Dispcription: {courseData.dispcription}</p>
      <div className='d-flex justify-content-between'>
        <p>Duration: {courseData.duration}</p>
        <p>Price: {courseData.price}</p>
      </div>
      <div className='text-center'>
        <button>Purchage Now </button>
      </div>
    </div>
  );
};

export default CourseDetails;