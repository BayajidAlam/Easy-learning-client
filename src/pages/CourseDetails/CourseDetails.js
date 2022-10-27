import React from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';
import './CourseDetails.css'



const CourseDetails = () => {
  const courseData = useLoaderData()

  return (
    <div className='container text-center'>
      <div>
      <h2>{courseData.title}</h2>
      </div>
      <img className='course-img' src={courseData.picture} alt="" />
      <p className='text'>Dispcription: {courseData.dispcription}</p>
      <div className='d-flex justify-content-between'>
        <p className='text'>Duration: {courseData.duration}</p>
        <p className='text'>Price: {courseData.price}</p>
      </div>
      <div className='text-center'>
        <Link to={'/cheeckout'}>  <button className='course-btn'>Get Premium Access</button></Link>
      </div>
    </div>
  );
};

export default CourseDetails;