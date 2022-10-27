import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './CheeckOut.js.css'

const CheeckOut = () => {
  
  const handlePurchage = () => {
    toast.success("You have Purchage this course successfully!")
  }

  return (
    <div className='main'>
      <div className='cheek'>
        <p className='text-center'>CheeckOut Now</p>
        <p>Course name: </p>
        <p>Course Price: </p>
        <div className='text-center'>
          <button onClick={handlePurchage} className='purchage-btn'>Purchage Now</button>
          </div>
      </div>
      <Toaster/>
    </div>
  );
};

export default CheeckOut;